// plugins/errorHandling.js
export default ({ app }) => {
  console.log("error qul");
  app.router.afterEach((to, from, err) => {
    if (err && err.statusCode === 404) {
      app.error({ statusCode: 404, message: "Image Not Found1" });
    }
  });
};
