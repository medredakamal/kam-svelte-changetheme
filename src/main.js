import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    activetheme: "light",
    welcome: "Welcome to your Dashboard",
    user: "Kamal",
    orders: 244,
    products: 40,
    earnings: 9932,
    active_users: 45,
  },
});

export default app;
