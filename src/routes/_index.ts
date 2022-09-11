import { Express } from 'express';
import TestModule from 'modules/Test/index';

export default function(app: Express) {
    app.use('/test', TestModule);
};