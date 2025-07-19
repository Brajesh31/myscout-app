// middleware/auth.global.ts
import { useAuth } from "~/composables/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth();

  const isPublic = ["/login"].includes(to.path);

  if (!isLoggedIn.value && !isPublic) {
    return navigateTo("/login");
  }

  if (isLoggedIn.value && isPublic) {
    return navigateTo("/");
  }
});
