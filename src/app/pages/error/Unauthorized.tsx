import {Button, Result} from 'antd';
import {memo} from 'react';
import {Link} from 'react-router-dom';

const Unauthorized = memo((): JSX.Element | null => {
    return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={
                <Button type="primary">
                    <Link to="/">Back Home</Link>
                </Button>
            }
        />
    );
});

export default Unauthorized;
