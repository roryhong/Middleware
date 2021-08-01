const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars' , exphbs({defaultLayout : 'main'}))
app.set('view engine', 'handlebars')

app.use((req, res, next) => {
    const start = new Date()
    const date = start.toLocaleString().replace(/T/, ' ').replace(/\..+/, '')
    

    res.on('finish', () => {
      const end = new Date()

      const methodFrom = req.method + ' ' + 'from'  + ' ' + req.originalUrl
      const time = `total time : ${end - start} ms`
      console.log(date + ' | ' + methodFrom + ' | ' +  time)
    })
    
    next()
})

app.get('/',(req, res) => {
  const text = '列出全部 Todo'
  res.render('index' ,{ text })
})

app.get('/new', (req, res) => {
  const text = '新增 Todo 頁面'
  res.render('index', { text})
})
 
app.get('/:id', (req, res) => {
  const text = '顯示一筆 Todo'
  res.render('index', { text })
})

app.post('/', (req, res) => {
  const text = '新增一筆  Todo'
  res.render('index', { text })
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})