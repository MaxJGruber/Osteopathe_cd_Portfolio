
const cloudinary = require('cloudinary').v2;
const express = require('express')
const router = express.Router();

// CLOUDINARY CONFIG SETUP
console.log(process.env.VUE_APP_CLOUD_NAME)
cloudinary.config({
    cloud_name: process.env.VUE_APP_CLOUD_NAME,
    api_key: process.env.VUE_APP_API_KEY,
    api_secret: process.env.VUE_APP_API_SECRET
});

router.get("/api/pics", async (req, res) => {
    const allPicObjs = await cloudinary.api.resources();
    const picsArray = allPicObjs.resources.map((picDetails) => picDetails.secure_url)
    console.log(picsArray)
    res.status(200).json(picsArray)
})
module.exports = router;
