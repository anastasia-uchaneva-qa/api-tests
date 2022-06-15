class BuildUser {
    username: string;
    password: string;
    grant_type: string;

    addGrantType() {
        this.grant_type = 'password';
        return this;
    }
    addUsername() {
        this.username = 'test-education:anastasiauch';
        return this;
    }
    addPassword() {
        this.password = "FF42Ksx72HHq";
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

export default BuildUser;