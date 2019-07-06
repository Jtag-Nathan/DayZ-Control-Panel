//Load the MySQL pool connection
const pool = require('../data/config');

// Make endpoint for GET request of server root
const router = app => {
    app.get('/', (request, response) => {
        //console.log(`URL: ${request.url}`);
        response.send({
            message: 'Node.js and Express RESTful API'}
        );
    });

    //Display all users in our users table from our config.js connected database pool
    app.get('/users', (request, response) => {
        pool.query('SELECT * FROM users', (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

    //Display selected user by id
    app.get('/users/:id', (request, response) => {
        //Store the id given in the URL
        const id = request.params.id;

        pool.query('SELECT * FROM users WHERE id = ?', id, (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

    //Add a new user
    app.post('/users', (request, response) => {
        pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
            if (error) throw error;

            response.status(201).send(`User added with ID: ${result.insertId}`);
        });
    });

    //Update an existing user by given ID put should only be used when we update all fields of a user ?
    app.put('/users/:id', (request, response) => {
        const id = request.params.id;

        pool.query('UPDATE users SET ? WHERE id = ?', [request.body, id], (error, result) => {
            if (error) throw error;

            response.send(`User ID: ${id} updated successfully!`);
        });
    });

    //Delete a user by given ID
    app.delete('/users/:id', (request, response) => {
        const id = request.params.id;

        pool.query('DELETE FROM users WHERE id = ?', id, (error, result) => {
            if (error) throw error;

            response.send(`User ID: ${id} deleted!`);
        });
    });
}

// Export the router
module.exports = router;