process.env;

export const {
  NODE_ENV = 'production'
} = process.env;

export const IS_DEV = NODE_ENV !== 'production';
export const SITE_NAME = 'Fullstack Next.js Template';
