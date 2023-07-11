// const router = require("express").Router();
// const authMiddleware = require("../middlewares/authMiddleware");
// const Notification = require("../models/notificationsModel");

// // Add Notification
// router.post("/notify", authMiddleware, async (req, res) => {
//   try {
//     const newNotification = new Notification(req.body);
//     await newNotification.save();
//     res.send({
//       success: true,
//       message: "Notification added successfully",
//     });
//   } catch (error) {
//     res.send({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // Get Notification by userId
// router.get("/get-all-notifications", authMiddleware, async (req, res) => {
//   try {
//     const notifications = await Notification.find({
//       user: req.body.userId,
//     }).sort({ createdAt: -1 });

//     res.send({
//       success: true,
//       data: notifications,
//     });
//   } catch (error) {
//     res.send({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // Delete Notification by userId
// router.delete("/delete-notification/:id", authMiddleware, async (req, res) => {
//   try {
//     await Notification.findByIdAndDelete(req.params.id);
//     res.send({
//       success: true,
//       message: "Notification deleted successfully",
//     });
//   } catch (error) {
//     res.send({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // Read all notifications
// router.put("/read-all-notifications", authMiddleware, async (req, res) => {
//   try {
//     await Notification.updateMany(
//       { user: res.body.userId, read: false },
//       { $set: { read: true } }
//     );
//   } catch (error) {
//     res.send({
//       sucess: false,
//       message: error.message,
//     });
//   }
// });
// module.exports = router;
