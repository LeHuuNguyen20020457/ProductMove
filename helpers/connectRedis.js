const redis = require('redis');

const client = redis.createClient({
    port: 6379,
    host: '127.0.0.1',
});

(async () => {
    await client.connect();
})();

client.on('error', (err) => console.log('Redis Client Error', err));
client.ping((err, pong) => {
    console.log(pong);
});
module.exports = { client };
