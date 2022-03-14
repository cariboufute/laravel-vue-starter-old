export default class User {
    email = '';

    constructor(attributes = {}) {
        Object.assign(this, attributes);
    }
}
