const Bid = require("../models/bidModels");
const authMiddleware = require("../middlewares/authMiddleware");
const router = require("express").Router();
// POST new Bids

router.post("/place-new-bid", async (req, res) => {
  try {
    const newBid = new Bid(req.body);
    await newBid.save();
    res.send({ success: true, message: "Bid placed successfully" });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
});

// Get all Bids
router.get("/get-bids",   async (req, res) => {
  try {
    const bids = await Bid.find();
    res.send({
      success: true,
      message: "Users fetched Successfully",
      data: bids,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
