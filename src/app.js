const { getUUID, buildLogger } = require('./plugins');

const buildPerson = ({name, lastName}) => ({
    id: getUUID(),
    name,
    lastName,
})

console.log(buildPerson({name: 'Johao', lastName: 'Lopez'}))

// ejemplo de logger winston
const logger = buildLogger('app.js');

logger.log('This is a text about Log Example')
logger.error('This is a text about ErrorLog Example')