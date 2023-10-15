import mongoose from 'mongoose';
import ServiceBSchema from './schema';

const ServiceBModel = mongoose.model(ServiceBSchema);

export default ServiceBModel;
