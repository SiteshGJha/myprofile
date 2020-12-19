const express = require('express')
const app = express();
const PORT = process.env.PORT || 9999

//request payload middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
    res.send('Hey Sitesh!');
});

app.listen(PORT, () => {
    console.log(`Server listening to port: ${PORT}`);
});