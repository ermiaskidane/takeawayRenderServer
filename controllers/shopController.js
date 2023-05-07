import asyncHandler from 'express-async-handler'
import BestSeller from '../models/bestSellerModel.js'
import ShopMenu from '../models/ShopMenuModel.js'

// @desc Fetch BestSeller
// @route GET /api/shop/bestsellers
// @access Public
const getBestSeller = asyncHandler(async (req, res) => {
  const bestSell = await BestSeller.find({})

  if (bestSell) {
    res.json(bestSell)
  } else {
    res.status(404)
    throw new Error('bestSell not found')
  }
})

// @desc    Fetch single product
// @route   GET /api/homeScreen/menus/:id
// @access  Public
const getBestSellerById = asyncHandler(async (req, res) => {
  const bestSell = await BestSeller.findById(req.params.id)

  if (bestSell) {
    res.json(bestSell)
  } else {
    res.status(404)
    throw new Error('menus not found')
  }
})

// @desc Fetch BestSeller
// @route GET /api/shop/sellers
// @access Public
const getAllSeller = asyncHandler(async (req, res) => {
  const shopMenu = await ShopMenu.find({})

  if (shopMenu) {
    res.json(shopMenu)
  } else {
    res.status(404)
    throw new Error('shopMenu not found')
  }
})

// @desc    Fetch single product
// @route   GET /api/homeScreen/menus/:id
// @access  Public
const getAllSellerById = asyncHandler(async (req, res) => {
  const bestSeller = await ShopMenu.findById(req.params.id)

  if (bestSeller) {
    res.json(bestSeller)
  } else {
    res.status(404)
    throw new Error('menus not found')
  }
})

export { getBestSeller, getBestSellerById, getAllSeller, getAllSellerById }
