import express from "express"
import { categoriesCotroller } from "./controllers/categoriesController"
import { coursesController } from "./controllers/coursesController"
import { episodeController } from "./controllers/episodesController"
import { authController } from "./controllers/authController"
import { ensureAuth, ensureAuthViaQuery } from "./middlewares/auth"
import { favoritesController } from "./controllers/favoritesController"
import { likesController } from "./controllers/likesController"
import { usersController } from "./controllers/usersController"


export const router = express.Router()


//User Routes
router.post("/auth/register", authController.register)
router.post("/auth/login", authController.login)

//Categories Routes
router.get("/categories",ensureAuth,categoriesCotroller.index)
router.get("/categories/:id", ensureAuth ,categoriesCotroller.show)

//Courses Routes
router.get("/courses/featured", ensureAuth ,coursesController.featured)
router.get("/courses/newest" ,coursesController.newest)
router.get("/courses/search", ensureAuth ,coursesController.search)
router.get("/courses/popular", ensureAuth ,coursesController.search)
router.get("/courses/:id", ensureAuth ,coursesController.show)

router.get("/episodes/stream",ensureAuthViaQuery,episodeController.stream)
router.get("/episodes/:id/watchtime",ensureAuth, episodeController.getWatchTime)
router.get("/episodes/:id/watchtime",ensureAuth, episodeController.setWatchTime)

//Favorites Routes 
router.post("/favorites", ensureAuth, favoritesController.save)
router.get("/favorites", ensureAuth, favoritesController.index)
router.delete("/favorites/:id",ensureAuth, favoritesController.delete)

//likes Routes
router.post("/likes",ensureAuth, likesController.save)

router.get("/users/current", ensureAuth,usersController.show)
router.put("/users/current", ensureAuth, usersController.update)
router.put("/users/current/password", ensureAuth, usersController.updatePassword)
router.get("/users/current/watching", ensureAuth, usersController.watching)
