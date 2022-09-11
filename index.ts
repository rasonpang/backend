import express from 'express';
import RouteSetup from './src/routes/_index';

const app = express();
app.use(express.json());

RouteSetup(app);

app.listen(4000, () => {
    console.log('Express server listening on port 4000');
})