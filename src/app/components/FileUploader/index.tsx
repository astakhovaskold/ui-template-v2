import AutomaticFileUploader from '@/app/components/FileUploader/AutomaticFileUploader';
import ManualFileUploader from '@/app/components/FileUploader/ManualFileUploader';
import {AutomaticFileUploaderProps, UploadFileProps} from '@/app/components/FileUploader/types';
import {Common} from '@/typings/common';

const isAutomatic = (props: UploadFileProps): props is AutomaticFileUploaderProps => props.automatic;

function FileUploader<ResponseType extends Common>(props: UploadFileProps): JSX.Element | null {
    if (isAutomatic(props)) {
        return <AutomaticFileUploader<ResponseType> {...props} />;
    } else {
        return <ManualFileUploader {...props} />;
    }
}

export default FileUploader;
