// TODO: For scaling, modify these so that they point to Nginx endpoints

export const API = "https://3000-spiderpig86-smoresunder-22b6r6zwxl3.ws-eu93.gitpod.io/" ;
export const ACCOUNTS_API = `http://${API}:3001`;
export const USER_API = `http://${API}:3002`;
export const QUESTIONS_API = `http://${API}:3003`;
export const ANSWERS_API = `http://${API}:3004`;
export const SEARCH_API = `http://${API}:3005`;
export const MEDIA_API = `http://${API}/addmedia`;

// export const API = 'smores.cse356.compas.cs.stonybrook.edu'; // localhost
// export const ACCOUNTS_API = `http://${API}`;
// export const USER_API = `http://${API}/user`;
// export const QUESTIONS_API = `http://${API}/questions`;
// export const ANSWERS_API = `http://${API}/answers`;
// export const SEARCH_API = `http://${API}/search`;
// export const MEDIA_API = `http://${API}/addmedia`;


export const STATUS_OK = 'OK';
export const STATUS_ERR = 'error';

export const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MFswDQYJKoZIhvcNAQEBBQADSgAwRwJAaSt2fAMaQqq1FZk5E+dhrZk3ZG2q/uG2
WNBGImujPTrkmmzYVpwb72VkBQWzi/rGFevzqWxMK30P3lfcskcXcwIDAQAB
-----END PUBLIC KEY-----`;