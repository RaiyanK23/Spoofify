const express = require('express');
const router = express.Router();
const db = require('../config/db'); 

router.use(express.json());
router.use(express.urlencoded({ extended: true }));