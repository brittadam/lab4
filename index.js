const express = require('express')
const app = express()
const port = 3000

//enable CORS express
const cors = require('cors');
app.use(cors());

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