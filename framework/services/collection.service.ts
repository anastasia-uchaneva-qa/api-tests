import * as supertest from 'supertest';
import token from '../config';

const Collection = {
    post: async (body) => {
        const r = await supertest(`https://api.${process.env.DOMEN_NAME}/api`)
            .post('/v1/integrations/collections')
            .set({'Authorization': `EAPI ${token}`, 'Accept':'application/json'})
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