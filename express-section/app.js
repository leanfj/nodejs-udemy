const express = require('express')

const app = express()

const path = require('./util/path')

const PORT = process.env.PORT || 3000

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(express.urlencoded({ extended: false }))

app.use(express.static(path(['public'])))

app.use('/', shopRoutes)
app.use('/admin', adminRoutes.routes)

app.use((req, res, next) => {
    res.status(404).sendFile(path(['views', '404.html']))
})

app.listen(PORT, () => console.log(`Server run in http://localhost:${PORT}`))