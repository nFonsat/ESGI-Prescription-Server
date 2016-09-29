/**
 * Created by nicolas on 29/09/2016.
 */
module.exports = function (app) {

    var MedicamentSchema = new app.mongoose.Schema({
        cis: {
            type: String,
            require: true,
            unique: true
        },
        name: {
            type: String,
            require: true
        },
        pharmaceutical_form: {
            type: String,
            require: true
        },
        administration: {
            type: [String],
            require: true
        },
        administrative_status: {
            type: String,
            require: true
        },
        procedure: {
            type: String,
            require: true
        },
        commercial_state: {
            type: String,
            require: true
        },
        date_amm: {
            type: Date,
            require: true
        },
        bdm_status: {
            type: String,
            require: true
        },
        authorisation: {
            type: String,
            require: true
        },
        owner: {
            type: [String],
            require: true
        },
        security: {
            type: Boolean,
            default: false
        }
    });

    MedicamentSchema.plugin(require('mongoose-timestamp'));

    return app.mongoose.model('Medicament', MedicamentSchema);;
    
};