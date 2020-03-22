const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.json({ "API": "ok" });
})

app.get('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({ "id": id });
})


app.post('/cliente/:id', (req, res) => {
    let id = req.params.id;
    let nome = req.body.nome;
    let email = req.body.email;
    res.json(id);
})



const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
    console.log(`API RODANDO NA PORTA ${PORT}`);
})