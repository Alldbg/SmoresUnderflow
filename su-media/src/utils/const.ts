export const PREFIX = '/workspace/SmoresUnderflow/media/';
// export const IP = '192.168.122.xx'; // TODO: FILL IN
export const HASH_KEY = 'SM2';
export const CACHE_TIMEOUT = 30;
export const ERROR_CODE = 400;
export const IMG_LIMIT = 20 * 1024 * 1024; // 20MB
export const VID_LIMIT = 100 * 1024 * 1024; // 100MB
export const REDIS_HOST = 'localhost';
export const REDIS_PORT = 6379;
export const MONGO_HOST = 'mongodb://localhost:27017/underflow';

export function getMime(mime: string) {
  return mime.split('/')[1];
}