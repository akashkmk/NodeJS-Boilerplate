import express from 'express';
import { HelloMessage, WorldMessage } from './controller';

const ServiceARoutes = express.Router();

ServiceARoutes.get('/controller-hello', HelloMessage);
ServiceARoutes.get('/controller-world', WorldMessage);

export default ServiceARoutes;
