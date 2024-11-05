import {RcFile} from 'antd/es/upload';
import {UploadFile} from 'antd/es/upload/interface';
import {Dispatch, SetStateAction} from 'react';

export type CommonUploaderProps = {
    accept?: Array<string>;
    maxFileSize?: number;
    setFileList: Dispatch<SetStateAction<Array<UploadFile<RcFile>>>>;
};

export type AutomaticFileUploaderProps = CommonUploaderProps & {
    automatic: true;
    url: string;
};

export type ManualFileUploaderProps = CommonUploaderProps & {
    automatic: false;
    fileList?: Array<UploadFile>;
    error?: string | null;
    setError?: Dispatch<SetStateAction<string | null>>;
};

export type UploadFileProps = AutomaticFileUploaderProps | ManualFileUploaderProps;
