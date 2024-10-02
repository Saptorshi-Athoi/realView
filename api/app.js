import express from 'express';
import authRoute from './routes/auth.route.js'

const app = express();
const port = 8080

app.use(express.json());

app.use("/api/test", (req, res) => {
    res.send("Hello World")
});
app.use("/api/auth", authRoute);


app.listen(port, () => {
    console.log("Server listening on port " + port);
})