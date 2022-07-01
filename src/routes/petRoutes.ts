import { Router } from "express";
import {
  allPets,
  onePet,
  addPetPage,
  addPet,
  editPetPage,
  editPet,
  deletePet,
} from "../controllers/petController";

const router = Router();

router.get("/", allPets);

router.get("/add", addPetPage);
router.post("/add", addPet);

router.get("/edit/:petId", editPetPage);
router.post("/edit/:petId", editPet);

router.post("/delete/:petId", deletePet);

router.get("/:petId", onePet);

export default router;
