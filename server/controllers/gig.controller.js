import { createError } from "../utils/createError.js";
import Gig from "../models/Gig.model.js";

export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) return next(createError(401, "gig not found"));
    res.status(200).send(gig);
  } catch (error) {
    next(error);
  }
};

export const test = async (req, res, next) => {
  try {
    const gig = await Gig.find();
    res.status(200).send(gig);
  } catch (error) {
    next(error);
  }
};

export const getGigs = async (req, res, next) => {
  const q = req.query;

  const filters = {
    ...(q.cat && { cat: q.cat }),
    ...(q.userId && { userId: q.userId }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gte: q.min }),
        ...(q.max && { $lte: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };
  //   console.log(filters);

  try {
    const gigs = filters
      ? await Gig.find(filters).sort({ [q.sort]: -1 })
      : await Gig.find();
    // console.log(gigs);
    res.status(200).send(gigs);
  } catch (error) {
    next(error);
  }
};

export const createGig = async (req, res, next) => {
  if (!req.isSeller) {
    return next(createError(403, "only sellers can create a gig"));
  }
  const newGig = Gig({
    userId: req.userId,
    ...req.body,
  });
  try {
    const saveGig = await newGig.save();
    res.status(201).json(saveGig);
  } catch (error) {
    next(error);
  }
};

export const deleteGig = async (req, res, next) => {
  const gig = await Gig.findById(req.params.id);
  if (req.userId !== gig.userId)
    return next(createError(403, "you can delete only your gig!"));
  try {
    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send("Gig has been deleted");
  } catch (error) {
    next(error);
  }
};
