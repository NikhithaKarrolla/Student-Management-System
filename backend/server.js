const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/StudentRoutes');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());


// Connect to MongoDB
mongoose.connect('mongodb+srv://KarrollaNikhitha:KarrollaNikhitha@studentcluster.0jkth4b.mongodb.net/?retryWrites=true&w=majority&appName=StudentCluster')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use('/students', studentRoutes);
// Health check route
app.get('/', (req, res) => {
    res.send('Server is running');
    res.status(200);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});