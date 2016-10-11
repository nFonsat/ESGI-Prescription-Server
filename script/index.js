var caller   = require('./restCall')();
var downler  = require('./download')();
const pattern = /(\d{2})\/(\d{2})\/(\d{4})/;

downler("http://base-donnees-publique.medicaments.gouv.fr/telechargement.php?fichier=CIS_bdpm.txt", "/tmp/medicaments.txt")
    .then(function (file) {
        readMedicament('/tmp/medicaments.txt');
    })
    .catch(function (error) {
        console.error(error);
    });

function readMedicament(filename) {
    var count = 0;
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(filename)
    });

    lineReader.on('line', function (line) {
        count++;
        var medicaments = line.split('\t');
        var cis            = medicaments[0];
        var denomination   = medicaments[1];
        var form           = medicaments[2];
        var administration = medicaments[3].split(';');
        var adminStatus    = medicaments[4];
        var type           = medicaments[5];
        var commState      = medicaments[6];
        var dateAMM        = new Date(medicaments[7].replace(pattern,'$3-$2-$1'));
        var bdmStatus      = medicaments[8];
        var authorization  = medicaments[9];
        var owner          = medicaments[10];
        var security       = medicaments[11] == "Oui";

        var host = "localhost";
        var port = 3000;
        var path = "/api/medicament";
        var data = {
            cis: cis,
            name: denomination,
            pharmaceutical_form: form,
            administration: administration,
            administrative_status: adminStatus,
            procedure: type,
            commercial_state: commState,
            date_amm: dateAMM,
            bdm_status: bdmStatus,
            authorisation: authorization,
            owner: owner,
            security: security
        };
        console.log(count);
        data = JSON.stringify(data);
        caller("POST", host, port, path, data)
            .then((response) => {
                console.log(`========================================\n${response}\n========================================`);
            })
            .catch((err) => {
                console.error(err);
            });
    });
}

