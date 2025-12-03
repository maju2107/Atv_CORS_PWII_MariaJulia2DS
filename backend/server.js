const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET',
    optionSuccessStatus: 200
};

// Com middleware CORS configurado!

app.use(cors(corsOptions));

app.get('/api/mensagem', (req, res) => {

    res.json({data: "Mensagem secreta da API rodando em porta 8080: Bom final de ano e parabéns por todo trabalho duro que vocês fizeram como professores ❤️"});
});

app.listen(port, () => {
    console.log(`API backend rodando em http://localhost:${port} `);
    console.log(`AGORA PERMITIDO acesso de http://localhost:3000`);
});