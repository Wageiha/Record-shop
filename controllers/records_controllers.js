import recordModel from "../models/record-model.js"


export const addNewRecord = async (req, res, next) => {
try {
  const record = new recordModel(req.body);
    await record.save();
    res.status(200).json(record);
} catch (err) {
  next(err)
}
};

export const getAllRecords = async (req, res, next) => {
  try {
    const allRecords = await recordModel.find();
    res.status(200).json(allRecords);
  } catch (err) {
    next(err);
  }
};

export const getRecordDetails = async (req, res, next) => {
  try {
    const record = await recordModel.findById(req.params.id);
    res.status(200).json(record);
  } catch (err) {
    next(err);
  }
};

export const deleteRecord = async (req, res, next) => {
  try {
    const record = await recordModel.findByIdAndDelete(req.params.id);
    res.status(200).json(`The record ${record} has been deleted.`);
  } catch (err) {
    next(err);
  }
};

export const updateRecord = async (req, res, next) => {
  try {
    const record = await recordModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );
    res.status(200).json(record);
  } catch (err) {
    next(err);
  }
  };