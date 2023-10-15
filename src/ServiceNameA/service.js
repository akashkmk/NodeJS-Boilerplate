import { ServiceAModel, ServiceBModel } from '../models';

export const printHello = async (params) => {
  const { GivenTitle } = params;
  await ServiceAModel.create({
    title: GivenTitle,
  });
};

export const printWorld = async (params) => {
  const { GivenTitle } = params;
  await ServiceBModel.create({
    title: GivenTitle,
  });
};
