import express from 'express';
import directorRoutes from './routes/director.routes.js';
import movieRoutes from './routes/movie.routes.js'

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/directors', directorRoutes)
app.use('/movies', movieRoutes)
app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        res.status(401).json({error: err.name + ": " + err.message});
    } else if (err) {
        res.status(400).json({error: err.name + ": " + err.message});
        console.log(err);
    }
});
export default app

