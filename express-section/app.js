const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(express.urlencoded({ extended: false }))

app.use('/', shopRoutes)
app.use('/admin', adminRoutes)

app.use((req, res, next) => {
    res.status(404).send('<h1>404 - Page not Found</h1>')
})

app.listen(PORT, () => console.log(`Server run in http://localhost:${PORT}`))