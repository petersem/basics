// routes/item.mjs
import express from "express";
import { ItemController } from "../controllers/ItemController.mjs";

const itemRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Item
 *   description: Item management
 */

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Get all items
 *     tags: [Item]
 *     responses:
 *       200:
 *         description: A list of items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Jane Doe"
 */
itemRoutes.get("/items", ItemController.list);

/**
 * @swagger
 * /api/items/{itemId}:
 *   get:
 *     summary: Get a single item
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: itemId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item details
 */
itemRoutes.get("/items/:itemId", ItemController.readItem);

export default itemRoutes;