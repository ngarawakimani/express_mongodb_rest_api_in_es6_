import {
    addNewContact,
    getContacts,
    getContactWithId,
    updateContact,
    deleteContact
} from '../controllers/crmControllers';

const routes = (app) => {
    app.route("/contact")
    .get((req, res, next) => {

        //middleware
        console.log(`request from: ${req.originalUrl} `);
        console.log(`request method: ${req.method}`);

        next();
    },getContacts)

    //POST endpoint
    .post(addNewContact);

    app.route("/contact/:contactId")

    //get specific contact
    .get(getContactWithId)

    //put request
    .put(updateContact)

    //delete request
    .delete(deleteContact);

}

export default routes;