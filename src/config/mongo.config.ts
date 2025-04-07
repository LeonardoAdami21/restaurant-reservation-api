import { mongoDbUrl } from "../env/envoriment";

export const mongoConfig = () => ({
  mongo: {
    client: 'mongodb',
    connection: {
      uri: mongoDbUrl,
    },
  },
});