/* Puerto */
process.env.PORT = process.env.PORT || 3000;

/* Entorno */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/* Vencimiento del Token */
/* 60 seg * 60 min * 24 hrs * 30 dias */
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

/* SEED de autenticacion */
process.env.SEED = process.env.SEED || 'este-es-el-secret-desarrollo';

/* BD */
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

/* Google Client ID */
process.env.CLIENT_ID = process.env.CLIENT_ID || '368255276955-qr7oid6khdfrtaqi3d5i7ksls6a12qal.apps.googleusercontent.com';