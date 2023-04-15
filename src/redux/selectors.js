export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectFilter = state => state.filter;
export const getUserEmail = state => state.user.user.email;
export const getIsLoggedIn = state => state.user.isLoggedIn;
