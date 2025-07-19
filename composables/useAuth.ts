export const useAuth = () => {
  const token = useCookie("auth_token");

  function logout() {
    token.value = null;
    navigateTo("/login");
  }

  return {
    isLoggedIn: computed(() => !!token.value),
    token,
    logout,
  };
};
