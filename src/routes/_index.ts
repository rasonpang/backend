import { Express } from 'express';

import { RouteList } from 'types/common';

import UserRoute from './User';
import ProductRoute from './Product';

const RouteList: RouteList = [
    ['/user', UserRoute],
    ['/product', ProductRoute],
];

export default function(app: Express) {
    RouteList.forEach(([path, route]) => {
        app.use(path, route);
    });
};