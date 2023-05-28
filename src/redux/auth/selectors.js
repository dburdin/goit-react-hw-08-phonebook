export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoadingUser = state => state.auth.isLoading;
export const selectErrorUser = state => state.auth.error;
