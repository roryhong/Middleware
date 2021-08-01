const express = require('express')
const app = express()
const port = 3000

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
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})
 
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})