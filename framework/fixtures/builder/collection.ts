import { faker } from "@faker-js/faker";

const currentCollectionOwner: string = 'anastasiauch';
const ownerWithoutPermission: string = 'author_collection';
const existingExternalId: string = 'M5989';

class BuildCollection {
    externalId: string;
    title: string;
    owner: string;
    taxonomies: {
      externalId: string;
      title: string;
    }[];
    objectiveRepositories: {
        externalId: string;
        title: string;
    }[];

    addExternalId() {
        this.externalId = faker.random.alphaNumeric(5);
        return this;
    }
    addInvalidExternalId() {
        this.externalId = "?/ab45";
        return this;
    }
    addExistingExternalId() {
        this.externalId = existingExternalId;
        return this;
    }
    addTitle() {
        this.title = faker.random.words();
        return this;
    }
    addLongTitle() {
        this.title = faker.random.words(100);
        return this;
    }
    addOwner() {
        this.owner = currentCollectionOwner;
        return this;
    }
    addNotExistingOwner() {
        this.owner = faker.random.alphaNumeric(10);
        return this;
    }
    addOwnerWithoutPermission() {
        this.owner = ownerWithoutPermission;
        return this;
    }
    addTaxonomies() {
        this.taxonomies = [{externalId: "TaxExt11", title: "Taxonomy_1"}];
        return this;
    }
    addObjectiveRepositories() {
        this.objectiveRepositories = [{externalId: "sdfdfg", title: "Objectives for external"}];
        return this;
    }
    generate() {
        const fields = Object.getOwnPropertyNames(this);
        const data = {};

        fields.forEach( (fieldName) => {
            if (this[fieldName] && typeof this[fieldName] !== 'function'){
                data[fieldName] = this[fieldName];
            }
        });
        return data;
    }
}

export default BuildCollection;