import express from "express"
import {addNewRecord, getAllRecords, getRecordDetails, deleteRecord, updateRecord} from "../controllers/records_controllers.js"

const router = express.Router()

router.post("/add", addNewRecord)

router.get("/all", getAllRecords)

router.get("/record-details/:id", getRecordDetails)

router.delete("/delete/:id", deleteRecord)

router.put("/update/:id", updateRecord)

export default router