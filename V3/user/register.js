var mysql = require('mysql12')

var connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "users"
    }
)

var emailInput = document.getElementById("email-input");
var email = emailInput.value;

const sql = `INSERT INTO users (email) VALUES (?)`;

connection.query(sql, [email], (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Dane zostały zapisane w bazie danych.');
    }
});
