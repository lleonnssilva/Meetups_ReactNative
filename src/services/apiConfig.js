import api from './api';

export const login = params => api.post('/sessions', params);
export const signup = params => api.post('/users', params);

export const meetupsSigneds = () => api.get('/meetups/signed');
export const meetupsUnsigneds = () => api.get('/meetups/unsigned');
export const meetupsRecommendeds = () => api.get('/meetups/recommended');
export const meetupsFilter = params => api.get(`meetups/filter/${params.criterio}`, params);

export const profileShow = () => api.get('/users/profile');
export const profileUpdate = params => api.put('/users', params);
export const profileCreate = params => api.put('/users/preferences', params);

export const meetupShow = params => api.get(`/meetups/${params.id}`, params);
export const meetupCreate = params => api.post('/meetups', params);

export const fileCreate = params => api.post('/files', params);

export const subscription = params => api.post(`/subscriptions/${params.id}`, params);

export const preferences = () => api.get('/preferences');
