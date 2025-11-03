require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// ✅ Security & Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// ✅ Database Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message || err);
    process.exit(1);
  });

// ✅ Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/leads', require('./routes/leadRoutes'));

// ✅ Default route
app.get('/', (req, res) => {
  res.send('Fastor CRM Backend Running');
});

// ✅ Server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
