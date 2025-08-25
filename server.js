import express, { json } from "express";
import dados from "./src/data/dados.js";

const {bruxos, varinhas, animais, pocoes} = dados;

const serverPort = 3000;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <div style="
      background: linear-gradient(135deg, #1a237e, #3949ab);
      color: white;
      padding: 50px;
      text-align: center;
      font-family: 'Georgia', serif;
      min-height: 100vh;
      margin: 0;
    ">
      <h1 style="
        font-size: 3rem;
        color: #ffd700;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        margin-bottom: 20px;
      ">
        ⚡ Bem-vindo à Hogwarts! ⚡
      </h1>
      <p style="font-size: 1.5rem; margin: 20px 0;">
        🏰 Escola de Magia e Bruxaria
      </p>
      <p style="font-size: 1.2rem; opacity: 0.9;">
        "É preciso muito mais que coragem para enfrentar nossos inimigos, 
        mas muito mais ainda para enfrentar nossos amigos."
      </p>
      <div style="margin-top: 30px;">
        <span style="font-size: 1.1rem;">🦁 Grifinória | 🐍 Sonserina | 🦅 Corvinal | 🦡 Lufa-lufa</span>
      </div>
    </div>
  `);
});

app.get("/bruxos", (req, res) => {
    res.status(200).json(bruxos);
});

app.get("/bruxos/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  const idBruxo = bruxos.find(i => i.id === id);
  
  if (idBruxo) {
      res.status(200).json(idBruxo);
  } else {
      res.status(404).json({
          erro: `Bruxo com id ${id} não encontrado!`
      });
  }
});

app.get("/bruxos/nomes/:nome", (req, res) => {
  let nome = req.params.nome.toLowerCase();
  const bruxosEcontrados = bruxos.filter(b => b.nome.toLowerCase().includes(nome));

  if (bruxosEcontrados.length > 0) {
    res.status(200).json(bruxosEcontrados);
  } else {
    res.status(404).json({
      erro: `Bruxo com nome ${nome} não encontrado!`
    });
  }
});

app.get("/bruxos/casas/:casa", (req, res) => {
  let casa = req.params.casa.toLowerCase();
  const casasEncontradas = bruxos.filter(b => b.casa.toLowerCase().includes(casa));

  if (casasEncontradas.length > 0) {
    res.status(200).json(casasEncontradas);
  } else {
    res.status(404).json({
      erro : `Casa ${casa} não encontrada!`
    });
  }
});

app.get("/bruxos/status/mortos", (req, res) => {
  const resultado = bruxos.filter((b) => !b.status);
  
  if (resultado) {
    res.status(200).json(resultado);
  } else {
    res.status(404).json({
      erro: "Nenhum bruxo morto encontrado!"
    });
  }
});

app.get("/varinhas", (req, res) => {
  res.status(200).json(varinhas);
});

app.get("/varinhas/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  const idVarinha = varinhas.find(i => i.id === id);

  if (idVarinha) {
    res.status(200).json(idVarinha);
  } else {
    res.status(404).json({
      erro: `Varinha com id ${id} não encontrado!`
    })
  }
});

app.get("/animais", (req, res) => {
  res.status(200).json(animais);
});

app.get("/animais/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  const idAnimais = animais.find(i => i.id === id);

  if (idAnimais) {
    res.status(200).json(idAnimais);
  } else {
    res.status(404).json({
      erro: `animal com id ${id} não encontrado!`
    });
  }
});

app.get("/pocoes", (req, res) => {
  res.status(200).json(pocoes);
});

app.get("/pocoes/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  const idPocoes = pocoes.find(i => i.id === id);

  if (idPocoes) {
    res.status(200).json(idPocoes);
  } else {
    res.status(404).json({
      erro: `Poção com id ${id} não encontrado!`
    });
  }
});

app.listen(serverPort, () => {
    console.log(`🧙‍♂️ API dos Bruxos está no ar em http://localhost:${serverPort}`);
});