import JsonApi from 'devour-client'

const token = '2|nwupKDLtLI1d0udLKAkxw7u8kT2vmgIOPsSX1TdA'
const jsonApi = new JsonApi({
    apiUrl: 'http://cliquewise.test/api/v1',
})
jsonApi.headers['Authorization'] = `Bearer ${token}`

jsonApi.define('project', {
    name: '',
    boards: {
        jsonApi: 'hasMany',
        type: 'boards',
    },
    created_at: '',
    updated_at: '',
})

jsonApi.define('board', {
    title: '',
    created_at: '',
    updated_at: '',
})

jsonApi.define('user', {
    email: '',
    created_at: '',
    updated_at: '',
})

export default jsonApi
// jsonApi.findAll('user').then((user) => {
//     console.table(user.data)
// })
