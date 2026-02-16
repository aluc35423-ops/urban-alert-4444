require('dotenv').config();
// Tools
const mongoose = require('mongoose');
//const {createClient}= require('@supabase/supabase-js');
const connectDB = require('./src/config/database');
const reportesRoutes = require('./src/routes/reportes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Communication

// DB connection
connectDB();

// Main routes
app.use("/api/reportes", );

// Supabase connection
//const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

app.listen(PORT, () => {
    console.log(`Port connection running in: http://localhost:${PORT}`)
});