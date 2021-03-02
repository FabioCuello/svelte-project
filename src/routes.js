import Login from './Pages/Login.svelte';
import Main from './Pages/Main.svelte';
import Register from './Pages/Register.svelte';

export default {
  '/': Main,
  '/login': Login,
  '/register': Register
};
