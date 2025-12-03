const express = require('express');
const app = express();
const port = 8080;

app.get('/api/mensagem', (req, res) => {

    res.json({data: "Mensagem secreta da API rodando em porta 8080: Bom final de ano e parabéns por todo trabalho duro que vocês fizeram como professores ❤️"});
});

// Sem middleware CORS configurado!

app.listen(port, () => {
    console.log(`API backend rodando em http://localhost:${port} `);
});