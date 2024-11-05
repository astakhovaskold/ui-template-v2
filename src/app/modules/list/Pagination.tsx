import {memo} from 'react';

import PaginationTable from '@/app/components/PaginationTable/PaginationTable';
import columns from '@/app/modules/list/columns';
import APIMock from '@/libs/APIMock';

const Pagination = memo((): JSX.Element | null => {
    return <PaginationTable url={APIMock.entities()} columns={columns} />;
});

export default Pagination;
