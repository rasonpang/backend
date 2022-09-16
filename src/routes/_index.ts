import { Express } from 'express';

import { RouteList } from 'types/common';

import TestRoute from './Test';

const RouteList: RouteList = [
    ['/test', TestRoute],
];

export default function(app: Express) {
    RouteList.forEach(([path, route]) => {
        app.use(path, route);
    });
};