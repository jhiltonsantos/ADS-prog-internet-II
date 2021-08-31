const express = require('express');

const app = express();

app.use(express.json());

// GET
app.get('/', (request, response) => {
  response.send({ msg: 'Hello World!' });
});

// POST
app.post('/', (request, response) => {
    const data = request.body;
    const name = data.name;
    const age = data.age;
    return response.json({ msg: `Ola ${name}.`, age: age });
});


app.listen(3000, () => {
  console.log('Server rodando na porta 3000');
});