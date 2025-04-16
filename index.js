const app = require('./src/app');


const PORT = process.env.DB_PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

