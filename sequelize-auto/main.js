import {Sequelize} from 'sequelize';

import initModels from './models/init-models.js';

import Note from './models/note.js';

const sequelize = new Sequelize ('observatorio','admobservatorio','', {
    host: '192.168.238.175',
    dialect : 'postgres',
});

initModels(sequelize);

const notes = await Note.findAll();

console.log(notes);