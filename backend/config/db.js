import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()
const postgresClient=new pg.Pool({
    connectionString:process.env.DB_CONNECTİON_STRİNG
})

export default postgresClient