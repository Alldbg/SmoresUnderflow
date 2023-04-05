// TODO: For scaling, modify these so that they point to Nginx endpoints

// const gitPodUrl="spiderpig86-smoresunder-22b6r6zwxl3.ws-eu93.gitpod.io"
// export const API = `https://3000-${gitPodUrl}`;
// export const ACCOUNTS_API = `https://3001-${gitPodUrl}`;
// export const USER_API = `https://3002-${gitPodUrl}/user`;
// export const QUESTIONS_API = `https://3003-${gitPodUrl}/questions`;
// export const ANSWERS_API = `https://3004-${gitPodUrl}/answers`;
// export const SEARCH_API = `https://3005-${gitPodUrl}/search`;
// export const MEDIA_API = `https://3006-${gitPodUrl}/addmedia`;

export const API = '80-spiderpig86-smoresunder-22b6r6zwxl3.ws-eu93.gitpod.io'; // localhost
export const ACCOUNTS_API = `https://${API}`;
export const USER_API = `https://${API}/user`;
export const QUESTIONS_API = `https://${API}/questions`;
export const ANSWERS_API = `https://${API}/answers`;
export const SEARCH_API = `https://${API}/search`;
export const MEDIA_API = `https://${API}/addmedia`;

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