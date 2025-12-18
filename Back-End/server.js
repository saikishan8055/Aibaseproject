// require('dotenv').config
// const app = require('./src/app')
// app.listen(3000,()=>{
// console.log("server is running on port 3000")
// })
import 'dotenv/config';
import app from './src/app.js';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
