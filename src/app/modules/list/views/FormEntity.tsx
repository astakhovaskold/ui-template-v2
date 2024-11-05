import {Button, Form, Input, Modal} from 'antd';
import {memo, useState} from 'react';

import useHasAccess from '@/hooks/useHasAccess';
import {ENTITY_MODULE} from '@/store/permissions';

interface FormEntityProps {}

const {Item, useForm} = Form;

const FormEntity = memo<FormEntityProps>((): JSX.Element | null => {
    const [open, setOpen] = useState(false);

    const hasAccess = useHasAccess(ENTITY_MODULE);

    const [form] = useForm();

    if (!hasAccess) return null;

    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                Create Entity
            </Button>

            <Modal
                title="Create Entity"
                width={400}
                open={open}
                onCancel={() => setOpen(false)}
                onOk={form.submit}
                destroyOnClose
            >
                <Form form={form} layout="vertical">
                    <Item label="Name" name="name" rules={[{required: true}]}>
                        <Input type="text" />
                    </Item>
                </Form>
            </Modal>
        </>
    );
});

export default FormEntity;
