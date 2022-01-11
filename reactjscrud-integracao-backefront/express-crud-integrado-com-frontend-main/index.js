const express = require("express");
const {Client} = require("pg");
require("dotenv").config();



(async () => {
    const dbHost = process.env.DB_HOST;
    const dbPort = process.env.DB_PORT;
    const dbName = process.env.DB_NAME;
    const dbUser = process.env.DB_USER;
    const dbPassword = process.env.DB_PASSWORD;

    const connectionString = `postgres://admobservatorio:XU*h!9NTKDg4hTAP@192.168.238.175:5432/observatorio`;

    console.info("Conectando ao banco de dados MongoDB...");

    const options = {
        useUnifiedTopology: true,
    };

    //const client = await client.connect(connectionString, options);
    const client = new Client({
        connectionString: connectionString
    });


    client.connect();
    var app = express();

    const port = process.env.PORT || 3000;

    app.use(express.json());


    app.all("/*", (req, res, next) => {
        res.header("Acess-Control-Allow-Origin","*");

        res.header("Acess-Control-Allow-Methods","*");

        res.header("Acess-Control-Allow-Headers",
        "Acess-Control-Allow-Headers, Origin, Accept, X-Request-With, Content-Type, Access-Controel-Request-Method, Acess-Control-Request-Headers, Authorization");
    next();
    });

    app.get("/",  (req, res) => {
        res.send("oi porra");
    });



    /*
    Lista de Endpoints da aplicação CRUD de personagens
    CRUD: Create, Read (Single & All), Update and Delete
    CRUD: Criar, Ler (Individual e Tudo), Atualizar e Remover
    - [GET] /personagens - Retorna a lista de personagens
    - [GET] /personagens/{id} - Retorna apenas uma única personagem pelo ID
    - [POST] /personagens - Cria uma nova personagem
    - [PUT] /personagens/{id} - Atualiza uma personagem pelo ID
    - [DELETE] /personagens/{id} - Remover uma personagem pelo ID
    */


    // - [GET] /personagens - Retorna a lista de personagens

 
    const personagens = dbName.collection("personagens");

    const getpersonagensValidas = () => personagens.find({}).toArray();

    const getPersonagemById = async id =>
        personagens.findOne({ _id: ObjectId(id) });


    app.get("/personagens", async (req, res) => {
        res.send(await getpersonagensValidas());
    });

    // - [GET] /personagens/{id} - Retorna apenas uma única personagem pelo ID
    app.get("/personagens/:id", async (req, res) => {
        const id = req.params.id;

        const personagem = await getPersonagemById(id);

        if (!personagem) {
            res.send("Personagem não encontrado.");

            return;
        }

        res.send(personagem);
    });

    // - [POST] /personagens - Cria uma nova personagem
    app.post("/personagens", async (req, res) => {
        const objeto = req.body;

        if (!objeto || !objeto.nome || !objeto.imagemUrl) {
            res.send("Objeto inválido.");

            return;
        }

        const { insertedCount } = await personagens.insertOne(objeto);

        if (insertedCount !== 1) {
            res.send("Ocorreu um erro ao criar a personagem.");

            return;
        }

        res.send(objeto);
    });

    // - [PUT] /personagens/{id} - Atualiza uma personagem pelo ID
    app.put("/personagens/:id", async (req, res) => {
        const id = req.params.id;

        const objeto = req.body;

        if (!objeto || !objeto.nome || !objeto.imagemUrl) {
            res.send("Personagem inválido.");

            return;
        }

        const quantidade_personagens = await personagens.countDocuments({
            _id: ObjectId(id),
        });

        if (quantidade_personagens !== 1) {
            res.send("Personagem não encontrado.");

            return;
        }

        const { result } = await personagens.updateOne(
            {
                _id: ObjectId(id),
            },
            {
                $set: objeto,
            }
        );

        if (result.ok !== 1) {
            res.send("Ocorreu um erro ao atualizar o personagem.");

            return;
        }

        res.send(await getPersonagemById(id));
    });

    // - [DELETE] /personagens/{id} - Remover uma personagem pelo ID
    app.delete("/personagens/:id", async (req, res) => {
        const id = req.params.id;

        const quantidade_personagens = await personagens.countDocuments({
            _id: ObjectId(id),
        });

        if (quantidade_personagens !== 1) {
            res.send("Personagem não encontrado.");

            return;
        }

        const { deletedCount } = await personagens.deleteOne({
            _id: ObjectId(id),
        });

        if (deletedCount !== 1) {
            res.send("Ocorreu um erro ao remover o personagem.");

            return;
        }

        res.send("Personagem removido com sucesso.");
    });

    app.listen(port, () => {
        console.info(`App rodando em http://localhost:${port}`);
    });
})();
