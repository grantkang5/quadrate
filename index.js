const express = require('express');
const app = express();
const port = process.env.PORT || 3050;

app.use(express.static(path.join(__dirname, 'dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + 'dist/index.html'))
})

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port, () => console.log(`Server listening on port: ${port}`))