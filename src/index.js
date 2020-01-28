const app = require('./app');

app.set('port', process.env.PORT || 3000);


async function main() {
    await app.listen('port');
    console.log('Server is running')
}

main();