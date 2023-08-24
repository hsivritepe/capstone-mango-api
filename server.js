require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5050;

const homeRoutes = require('./src/routes/homeRoutes');
const homeattRoutes = require('./src/routes/homeattRoutes');
const homeBookingRoutes = require('./src/routes/homeBookingRoutes');
const bookingRoutes = require('./src/routes/bookingRoutes');
const destinationRoutes = require('./src/routes/destinationRoutes');
const userRoutes = require('./src/routes/userRoutes');
const calendarRoutes = require('./src/routes/calendarRoutes');
const homeattCategoryRoutes = require('./src/routes/homeattCategoryRoutes');
const attributeRoutes = require('./src/routes/attributeRoutes');
const contactRoutes = require('./src/routes/contactRoutes');

// Middleware
app.use(express.json());
app.use(cors());

app.use('/api/v1/homes', homeRoutes);
app.use('/api/v1/homes', homeattRoutes);
app.use('/api/v1/homes', homeBookingRoutes);
app.use('/api/v1/bookings', bookingRoutes);
app.use('/api/v1/destinations', destinationRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/calendars', calendarRoutes);
app.use('/api/v1/homeattcategories', homeattCategoryRoutes);
app.use('/api/v1/homeattributes', attributeRoutes);
app.use('/api/v1/contacts', contactRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
