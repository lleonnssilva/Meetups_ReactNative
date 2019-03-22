import api from './api';

export const login = params => api.post('/sessions', params);
export const signup = params => api.post('/users', params);
export const meetupsSigneds = () => api.get('/meetups/signed/1');
export const meetupsUnsigneds = () => api.get('/meetups/unsigned/1');
export const meetupsRecommendeds = () => api.get('/meetups/recommended/1');
export const preferences = () => api.get('/preferences');
export const profileShow = () => api.get('/users/profile');
export const profileUpdate = params => api.put('/users', params);
export const profileCreate = params => api.put('/users/profile', params);
export const meetupShow = params => api.get(`/meetups/${params.id}`, params);
export const subscription = params => api.post(`/subscriptions/${params.id}`, params);
