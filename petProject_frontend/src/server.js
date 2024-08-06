const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(cors())

mongoose.connect('mongodb://localhost:27017/imageGallery', { useNewUrlParser: true,
    useUnifiedTopology: true})

const imageSchena = new mongoose.Schema({
    url: String,
    description: String
})

const Image = mongoose.model('Image', imageSchema)

app.get('/api/images', async (req, res) => {
    const { page = 1, limit = 10 } = req.query
    try {
        const images = await Image.find()
            .skip((page - 1) * limit)
            .limit(Number(limit))
        res.json(images)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})