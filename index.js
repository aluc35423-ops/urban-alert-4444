require('dotenv').config();
// Tools
const express = require('express');
const express = require('mongose');
const {createCLient}=require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

// Supabase connection
const supabase = createCLient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// MongoDB connection
mongoose.conect(process.env.MONGO_KEY)
    .then(() => console.log('Succesful connection'))
    .catch(err => console.error('Error MongoDB:', err));

// Route test
app.get('/', async (req, res) => {
    // Supabase healthcheck
    const {data, error} = await supabase.from('profiles').select('*').limit(1);

    res.json({
        message: 'Welcome to UrbanAlert API',
        database_nosql: mongoose.connect.readyState === 1 ? 'Connection ready' : ' Fail connection',
        supabase_auth: error ? 'Error connection' : 'Online'
    });
});

app.listen(PORT, () => {
    console.log(`Port connection running in: http://localhost${PORT}`)
});