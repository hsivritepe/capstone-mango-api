require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5050;

const homeRoutes = require('./routes/homeRoutes');
const homeattRoutes = require('./routes/homeattRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const destinationRoutes = require('./routes/destinationRoutes');
const userRoutes = require('./routes/userRoutes');
const calendarRoutes = require('./routes/calendarRoutes');

// Middleware
app.use(express.json());
app.use(cors());

app.use('/api/v1/homes', homeRoutes);
app.use('/api/v1/homes', homeattRoutes);
app.use('/api/v1/bookings', bookingRoutes);
app.use('/api/v1/destinations', destinationRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/calendars', calendarRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
