/* Puerto */
process.env.PORT = process.env.PORT || 3000;
/* Entorno */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
/* BD */
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://jaguar:ZOoBy0S2Kb6fVRk1@cluster0-mqtf0.mongodb.net/cafe';
}

process.env.URLDB = urlDB;