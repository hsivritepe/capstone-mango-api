const Joi = require('joi');

// Attribute Schemas
const addAttributeSchema = Joi.object({
    attribute_name: Joi.string().min(3).required(),
    ha_category_id: Joi.number().integer().positive().required(),
});

// Booking Schemas
const createBookingSchema = Joi.object({
    user_id: Joi.number().integer().positive().required(),
    home_id: Joi.number().integer().positive().required(),
    customer_contact_id: Joi.number().integer().positive().required(),
    booking_status: Joi.string(),
    check_in: Joi.date().required(),
    check_out: Joi.date().required(),
});

const editBookingSchema = Joi.object({
    user_id: Joi.number().integer().positive().required(),
    home_id: Joi.number().integer().positive().required(),
    customer_contact_id: Joi.number().integer().positive().required(),
    booking_owner: Joi.string().min(1).required(),
    booking_status: Joi.string(),
    check_in: Joi.date().required(),
    check_out: Joi.date().required(),
});

// Calendar Schemas
const createCalendarSchema = Joi.object({
    home_id: Joi.number().integer().positive().required(),
    date: Joi.date().required(),
    data_ava: Joi.number().min(1).required(),
    price: Joi.number().min(1).required(),
});

const editCalendarSchema = Joi.object({
    home_id: Joi.number().integer().positive().required(),
    date: Joi.date().required(),
    data_ava: Joi.number().min(1),
    price: Joi.number().min(1),
});

// Contact Schemas
const createContactSchema = Joi.object({
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(10).required(),
});

const editContactSchema = Joi.object({
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(10).required(),
});

// Destination Schemas
const createDestinationSchema = Joi.object({
    destination_name: Joi.string().min(3).required(),
});

const editDestinationSchema = Joi.object({
    destination_name: Joi.string().min(3).required(),
});

// HomeattCategory Schemas
const addHomeattCategorySchema = Joi.object({
    ha_category_name: Joi.string().min(3).required(),
});

const editHomeattCategorySchema = Joi.object({
    ha_category_name: Joi.string().min(3).required(),
});

// Homeatt Schemas
const linkAttributeToHomeSchema = Joi.object({
    home_id: Joi.number().integer().positive().required(),
    attribute_id: Joi.number().integer().positive().required(),
});

const linkAllAttributesToHomeSchema = Joi.object({
    home_id: Joi.number().integer().positive().required(),
    attribute_id: Joi.number().integer().positive().required(),
});

// Home Schemas
const createHomeSchema = Joi.object({
    home_vs_name: Joi.string().min(3).required(),
    home_real_name: Joi.string().min(3).required(),
    destination_id: Joi.number().integer().positive().required(),
});

const editHomeSchema = Joi.object({
    home_vs_name: Joi.string().min(3),
    home_real_name: Joi.string().min(3),
    destination_id: Joi.number().integer().positive(),
});

// User Schemas
const createUserSchema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    is_admin: Joi.boolean().required(),
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().min(3).required(),
});

const editUserSchema = Joi.object({
    username: Joi.string().min(3),
    password: Joi.string().min(3),
    email: Joi.string().email(),
    is_admin: Joi.boolean(),
    first_name: Joi.string().min(3),
    last_name: Joi.string().min(3),
});

module.exports = {
    addAttributeSchema,
    createBookingSchema,
    editBookingSchema,
    createCalendarSchema,
    editCalendarSchema,
    createContactSchema,
    editContactSchema,
    createDestinationSchema,
    editDestinationSchema,
    addHomeattCategorySchema,
    editHomeattCategorySchema,
    linkAttributeToHomeSchema,
    linkAllAttributesToHomeSchema,
    createHomeSchema,
    editHomeSchema,
    createUserSchema,
    editUserSchema,
};
