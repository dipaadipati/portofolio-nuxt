export default defineNuxtRouteMiddleware((to, from) => {
  const setTransition = (fromTransition: string, toTransition: string) => {
    if (from.meta.pageTransition && typeof from.meta.pageTransition !== 'boolean') {
      from.meta.pageTransition.name = fromTransition;
    }
    if (to.meta.pageTransition && typeof to.meta.pageTransition !== 'boolean') {
      to.meta.pageTransition.name = toTransition;
    }
  };

  if (from.path === '/') {
    if (to.path === '/about' || to.path === '/skills') {
      setTransition('slide-right', 'slide-left');
    } else {
      setTransition('slide-left', 'slide-right');
    }
  }
})
