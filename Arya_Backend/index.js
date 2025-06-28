import express, { urlencoded } from 'express'
import cors from 'cors'
const app = express()
import dotenv from 'dotenv'
import ConnectDb from './config/DatabaseConnection.js'
const PORT = process.env.PORT || 6500;
import cookieParser from 'cookie-parser'
ConnectDb()
dotenv.config()


// routers 

import UserRouter from './Routers/UserRouter.js'
import ProductRouter from './Routers/ProductRouter.js'
import ReviewRouter from './Routers/ReviewRouter.js'
import UploadRouter from './middleware/upload.js'


// middleware 

app.use(express.json())
app.use(urlencoded({ extended: true }))


app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["POST", "DELETE", "GET", "PUT"],
    credentials: true
}))
app.use(cookieParser())



app.get('/', (req, res) => {
    res.send("hey hii your server is runing")
})

app.use('/api/v1/user-profile', UserRouter)
app.use('/api/v1/products', ProductRouter)
app.use('/api/v1/review', ReviewRouter)
app.use('/api/v1/products', UploadRouter)


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
