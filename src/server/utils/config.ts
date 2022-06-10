process.env;

export {
  NODE_ENV,
  IS_DEV
} from '@/utils/config';

export const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  SECRET_APP_KEY
} = process.env;
