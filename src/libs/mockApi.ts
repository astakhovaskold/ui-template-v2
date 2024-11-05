import {createServer} from 'miragejs';

import {nanoid} from 'nanoid';

import APIMock from '@/libs/APIMock';
import {generatedEntityList, generatedEntityItem, generatedUserList} from '@/libs/mockData';
createServer({
    routes() {
        this.get(APIMock.entities(), (_, request) => generatedEntityList(request));
        this.get(APIMock.entities(nanoid()), () => generatedEntityItem);

        this.get(APIMock.users(), () => generatedUserList);

        this.passthrough();
    },
});
