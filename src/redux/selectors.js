export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const selectFilter = state => state.filter;
export const getUserEmail = state => state.user.user.email;
export const getIsLoggedIn = state => state.user.isLoggedIn;
export const getIsRefreshing = state => state.user.isRefreshing;
