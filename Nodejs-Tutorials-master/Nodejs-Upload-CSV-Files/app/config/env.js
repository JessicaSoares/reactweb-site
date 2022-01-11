const env = {
  database: 'observatorio',
  username: 'admobservatorio',
  password: 'XU*h!9NTKDg4hTAP',
  host: '192.168.238.175',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
 
module.exports = env;