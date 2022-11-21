/** @see https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables */

export const NODE_ENV = process.env.NODE_ENV || 'production';

/** Custom ENV */
export const IS_DEV = NODE_ENV !== 'production';
export const SITE_NAME = 'Fullstack Next.js Template';
