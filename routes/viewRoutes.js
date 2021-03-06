const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');
const userController = require('../controllers/userController');

const router = express.Router();

router.use(viewsController.alerts);

router.get('/', authController.isLoggedIn, viewsController.getOverview);
router.get('/tour/:slug', authController.isLoggedIn, userController.checkIfFavourite, viewsController.getTour);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/signup', authController.isLoggedIn, viewsController.getSignUpForm);
router.get('/me', authController.protect, viewsController.getAccount);
router.get('/my-tours', /*bookingController.createBookingCheckout,*/ authController.isLoggedIn, authController.protect, viewsController.getMyTours);
router.get('/favourite-tours', authController.isLoggedIn, authController.protect, viewsController.getMyFavouriteTours)

router.post('/submit-user-data', authController.protect, viewsController.updateUserData);

module.exports = router;
