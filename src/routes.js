import express from 'express';
import ServiceARoutes from './ServiceNameA/route';

const routes = express.Router();

routes.use('/service-a', ServiceARoutes);

export default routes;
