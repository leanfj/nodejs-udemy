const path = require('path')
const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(express.urlencoded({ extended: false }))

app.use('/', shopRoutes)
app.use('/admin', adminRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(PORT, () => console.log(`Server run in http://localhost:${PORT}`))