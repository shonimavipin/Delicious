const Contact = require('../models/Contact');

// @desc    Handle contact form submission
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    res.status(201).json({ message: "Contact form submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

module.exports = { submitContactForm };

