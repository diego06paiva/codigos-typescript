const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS


export default {
    porta: 3000,
    //DB_USER: process.env.DB_USER,
    //DB_PASS: process.env.DB_PASS,
    dbUri:`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.wcs70hm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    env: "development"
}