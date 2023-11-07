const config = {
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Store Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "Testing",
      "Auth.form.welcome.title":"Welcome to Go Digital Hub Admin panel",
      "Auth.form.welcome.subtitle": "Login to your account",
    }
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
