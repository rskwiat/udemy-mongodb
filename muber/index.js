const app = require('./app');
const port = 3050;

app.listen(3050, () => {
  console.log(`Application is running on http://localhost:${port}`);
});
