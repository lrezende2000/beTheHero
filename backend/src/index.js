const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no bac-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviado na rota após '?' (filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recrusos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recrusos
  */

  /**
   * SQL: MySQL, SQLite, PostegresSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users).select('*').where()
    */



app.listen(3333);