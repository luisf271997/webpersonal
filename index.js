//cargar variables de entorno

const mongoose = require ('mongoose')
const { DB_USER, DB_PASSWORD, DB_HOST, API_VERSION, IP_SERVER,} = require ('./constants');
const app = require('./add');

//puerto de la aplicacion
const PORT = process. env.POST || 3000

//setiamos stictQuery
mongoose.set('strictQuery', false);

mongoose.connect(
`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/webpersonal?retryWrites=true&w=majority&appName=webpersonal`,
(error) => {
    if (error) throw error;

    app.listen(PORT, () => {
        console.log('###########################')
        console.log('### MERN API REST ###')
        console.log('###########################')
        console.log('http://${IP_SERVER}:${PORT}/api/${API_VERSION}')
    })
    
}

)
