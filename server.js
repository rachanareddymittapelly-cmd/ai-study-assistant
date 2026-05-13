const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('AI Study Assistant Backend Running! 🚀 Day 1 Complete - Rachana');
});

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/studyassistant')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));