import * as supertest from 'supertest';
import urls from '../config';

const Collection = {
    post: async (body) => {
        const r = await supertest(urls.prod)
            .post('/v1/integrations/collections')
            .set({'Authorization': 'EAPI 4JgPkKKN2DGY7qVJf7GDo1Xq8oRdLSChwxH4DzN6eSsGc4QR', 'Accept':'application/json'})
            .send(body);
        return r;
    },
    /*
    postId: async (body, id) => {
        const r = await supertest(urls.vikunja)
            .post(`/v1/login+ ${id}`)
            .set('Accept','application/json')
            .send(body);
        return r;
    },
     */
};
export default Collection;