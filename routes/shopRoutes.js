import express from 'express'

import {
  getBestSeller,
  getAllSeller,
  getBestSellerById,
  getAllSellerById,
} from '../controllers/shopController.js'

const router = express.Router()

router.get('/bestsellers', getBestSeller)

router.get('/bestsellers/:id', getBestSellerById)

router.get('/sellers', getAllSeller)

router.get('/sellers/:id', getAllSellerById)

export default router
