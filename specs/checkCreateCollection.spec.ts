import api from '../framework/services/';
import BuildCollection from '../framework/fixtures/builder/collection';

test.skip('creating of collection is successful when all values are set', async () => {
    const body = new BuildCollection().addExternalId().addTitle().addOwner().addTaxonomies().addObjectiveRepositories()
        .generate();
    const r = await api().Collection().post(body);
    expect(r.status).toEqual(200);
});

test('collection with not existing owner is not created', async () => {
    const body = new BuildCollection().addExternalId().addTitle().addNotExistingOwner().addTaxonomies().addObjectiveRepositories()
        .generate();
    const r = await api().Collection().post(body);
    expect(r.status).toEqual(400);
    expect(r.text).toContain('{"Code":806,"Error":"Collection Owner has not been found"}');
});

test.skip('collection with owner without permission "Add collection" is not created', async () => {
    const body = new BuildCollection().addExternalId().addTitle().addOwnerWithoutPermission().addTaxonomies().addObjectiveRepositories()
        .generate();
    const r = await api().Collection().post(body);
    expect(r.status).toEqual(400);
    expect(r.text).toContain('{"Code":808,"Error":"Collection Owner does not have permissions to view collections"}');
});

// needs another customer without default owner
test.skip('collection without owner is not created', async () => {
    const body = new BuildCollection().addExternalId().addTitle().addTaxonomies().addObjectiveRepositories()
        .generate();
    const r = await api().Collection().post(body);
    expect(r.status).toEqual(400);
});

test('collection without title is not created', async () => {
    const body = new BuildCollection().addExternalId().addOwner().addTaxonomies().addObjectiveRepositories()
        .generate();
    const r = await api().Collection().post(body);
    expect(r.status).toEqual(400);
    expect(r.text).toContain('{"Code":804,"Error":"Collection title can not be null or empty"}');
});

test('collection with title > 100 characters is not created', async () => {
    const body = new BuildCollection().addExternalId().addLongTitle().addOwner().addTaxonomies().addObjectiveRepositories()
        .generate();
    const r = await api().Collection().post(body);
    expect(r.status).toEqual(400);
    expect(r.text).toContain('{"Code":805,"Error":"Collection title must be less than 100 symbols"}');
});

test('collection with invalid externalid is not created', async () => {
    const body = new BuildCollection().addInvalidExternalId().addTitle().addOwner().addTaxonomies().addObjectiveRepositories()
        .generate();
    const r = await api().Collection().post(body);
    expect(r.status).toEqual(400);
    expect(r.text).toContain('{"Code":802,"Error":"ExternalId must be alpha-numeric(a-z 0-9)"}');
});

test('collection with invalid externalid is not created', async () => {
    const body = new BuildCollection().addInvalidExternalId().addTitle().addOwner().addTaxonomies().addObjectiveRepositories()
        .generate();
    const r = await api().Collection().post(body);
    expect(r.status).toEqual(400);
    expect(r.text).toContain('{"Code":802,"Error":"ExternalId must be alpha-numeric(a-z 0-9)"}');
});