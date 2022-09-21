import { Express } from 'express';

import { RouteList } from 'types/common';

import TestRoute from './Test';
import ProductRoute from './Product';

const RouteList: RouteList = [
    ['/test', TestRoute],
    ['/product', ProductRoute],
];

export default function(app: Express) {
    RouteList.forEach(([path, route]) => {
        app.use(path, route);
    });
};