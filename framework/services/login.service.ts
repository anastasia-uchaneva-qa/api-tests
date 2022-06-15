import * as supertest from 'supertest';

const Login = {
    post: async (body) => {
        const r = await supertest(`https://api.${process.env.DOMEN_NAME}/`)
            .post('oauth/token')
            .type('form')
            .set({'Accept':'application/json'})
            .send(body);
        return r;
    }
};
export default Login;