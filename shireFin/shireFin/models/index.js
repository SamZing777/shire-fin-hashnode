// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const CountryField = {
  "NIGERIA": "NIGERIA",
  "UNITED_KINGDOM": "UNITED_KINGDOM"
};

const Gender = {
  "MALE": "MALE",
  "FEMALE": "FEMALE",
  "OTHER": "OTHER"
};

const { UserInformation } = initSchema(schema);

export {
  UserInformation,
  CountryField,
  Gender
};
