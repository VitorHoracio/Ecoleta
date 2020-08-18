import express, { response, request } from 'express';

const app = express();

app.use(express.json());

    // Rotas:  Endereço completo da requisição
    // Recurso: Qual entidade estamos acessanto do sistema
    //------rota-------/-recurso-
    //www.endereco.com/user

    //GET:      Buscar uma ou mais informações do back-end
    //POST:     Criar uma nova infromação no back-end
    //PUT:      Atualizar uma informação existente no back-end
    //DELETE:   Remover uma informação do back-end

    // Request Param: parâmetros que vem na própria rota que identificam um recurso
    // Query Param: parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
    // Request Body: parâmetros para criação/atualização de informações

    //SELECT * FROM users WHERE name='Vitor'
    //knex('users').where('name','Vitor').select('*')

    const users = [
        'Vitor',
        'Ferreira',
        'Horácio',
        'Daniel',
        'Lucas'
    ];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response)=>{
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response)=>{
    const data = request.body;

    

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);

});

app.listen(3333);