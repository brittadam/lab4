const express = require('express')
const app = express()
const port = 3000

app.get('/api/v1/messages', (req, res) => {
  res.json( {
    "status": "success",
    "messages": "GET messages",
    "data": [], 
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})