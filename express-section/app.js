const express = require('express')

const app = express()

const path = require('./util/path')

const PORT = process.env.PORT || 3000

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: false }))

app.use(express.static(path(['public'])))

app.use('/', shopRoutes)
app.use('/admin', adminRoutes.routes)

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: '404 - Página não encontrada'})
})

app.listen(PORT, () => console.log(`Server run in http://localhost:${PORT}`))