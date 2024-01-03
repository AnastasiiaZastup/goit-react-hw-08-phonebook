export const selectUserEmail = state => state.authorization.user.email;

export const selectUserName = state => state.authorization.user.name;

export const selectIsLoggedin = state => state.authorization.isLoggedin;

export const selectIsRefreshing = state => state.authorization.isRefreshing;

export const selectToken = state => state.authorization.token;

export const selectIsError = state => state.authorization.isError;
