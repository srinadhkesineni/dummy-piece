const mongoose = require('mongoose');

// Define the Booking schema
const bookingSchema = new mongoose.Schema({
  collegeName: {
    type: String,
    // required: true,
    trim: true
  },
  email: {
    type: String,
    // required: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address']
  },
  mobile: {
    type: String,
    // required: true,
    trim: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number']
  },
  timeSlot: {
    type: String,
    // required: true,
    enum: ['9am-11am', '11am-1pm', '2pm-4pm', '4pm-6pm'] // Only allow predefined time slots
  },
  venue: {
    type: String,
    // required: true,
    trim: true
  },
  calender: {
    type: Date,
    default: Date.now
  }
});

// Create the Booking model
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
