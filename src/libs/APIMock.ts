import API from '@/libs/API';

class APIMock extends API {
    protected static get PREFIX_API() {
        return '/mock/api';
    }
}

export default APIMock;
