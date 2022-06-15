import api from '../framework/services/';
import BuildUser from '../framework/fixtures/builder/user';

test('login is successfull', async () => {
    const body = new BuildUser().addGrantType().addUsername().addPassword()
        .generate();
    const r = await api().Login().post(body);
    //token = r.body.access_token
    expect(r.status).toEqual(200);
});