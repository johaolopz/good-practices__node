const { getUUID } = require('./plugins/getuuid.plugin')

const buildPerson = ({name, lastName}) => ({
    id: getUUID(),
    name,
    lastName,
})

console.log(buildPerson({name: 'Johao', lastName: 'Lopez'}))