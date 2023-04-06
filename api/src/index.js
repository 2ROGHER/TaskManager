const app = require("./server/app.js");
const { conn } = require('./database/database.js');
conn
    .sync({ force: true })
    .then(() => {
        app.listen(3001, () => {
            console.log("Listen in port ", 3001);
        });
    }).
    catch((error) => { console.log(error) });
