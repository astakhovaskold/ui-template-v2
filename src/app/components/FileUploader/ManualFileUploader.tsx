import {InboxOutlined} from '@ant-design/icons';
import {Typography, Upload} from 'antd';
import {RcFile} from 'antd/es/upload';
import {UploadChangeParam, UploadFile} from 'antd/es/upload/interface';
import {useCallback, useMemo} from 'react';

import {
    MAX_FILE_SIZE_ERROR,
    UNSUPPORTED_FORMAT_ERROR,
    ZERO_FILE_SIZE_ERROR,
} from '@/app/components/FileUploader/constants';
import {ManualFileUploaderProps} from '@/app/components/FileUploader/types';
import Utils from '@/libs/Utils';

const {Dragger} = Upload;

const {Text} = Typography;

function ManualFileUploader({
    accept,
    maxFileSize,
    setFileList,
    fileList: providedFileList,
    error: providedError,
    setError,
}: ManualFileUploaderProps): JSX.Element | null {
    const beforeUpload = useCallback(
        (targetFile: UploadFile<RcFile>): boolean => {
            if (accept) {
                const fileExtension = Utils.getFileExtension(targetFile.name);

                if (!accept.includes(fileExtension)) {
                    targetFile.status = 'error';
                    setError?.(UNSUPPORTED_FORMAT_ERROR);
                    return false;
                }
            }

            if (maxFileSize) {
                if (targetFile.size && targetFile.size > maxFileSize * 1024) {
                    targetFile.status = 'error';
                    setError?.(MAX_FILE_SIZE_ERROR);
                    return false;
                }

                if (targetFile.size && targetFile.size === 0) {
                    targetFile.status = 'error';
                    setError?.(ZERO_FILE_SIZE_ERROR);
                    return false;
                }
            }

            return false;
        },
        [accept, maxFileSize, setError],
    );

    const onChange = useCallback(
        ({fileList: newFileList}: UploadChangeParam<UploadFile<RcFile>>) => {
            if (!newFileList.some(file => file.status === 'error')) {
                setError?.(null);
            }
            setFileList?.(newFileList);
        },
        [setError, setFileList],
    );

    const onRemove = useCallback(
        (targetFile: UploadFile<RcFile>) => {
            setFileList?.(prevState => prevState.filter(file => file.uid !== targetFile.uid));
        },
        [setFileList],
    );

    const draggerProps = useMemo(
        () => ({
            onChange,
            beforeUpload,
            onRemove,
            fileList: providedFileList,
        }),
        [beforeUpload, onChange, onRemove, providedFileList],
    );
    return (
        <>
            <Dragger {...draggerProps} multiple={false} accept={accept?.join(',')}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single upload.</p>
            </Dragger>

            {providedError && <Text className="text-error">{providedError}</Text>}
        </>
    );
}

export default ManualFileUploader;
