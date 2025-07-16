const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const bookRoutes = require("./route/Bookroute");
const authRoutes = require("./route/Authroute");

const _dirname = path.resolve();
const app = express();

console.log(process.env.PASSWORD, process.env.USER);

// CORS configuration
app.use(cors({
    origin: 'https://kindle-production-5bff.up.railway.app',  // React frontend
    credentials: true
}));

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/book", bookRoutes);

// Serve React build files in production
app.use(express.static(path.join(_dirname, '/client/my-app/build')));

app.get('*', (_, res) => {
    res.sendFile(path.resolve(_dirname, 'client', 'my-app', 'build', 'index.html'));
});

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT || 3001}`);
});
