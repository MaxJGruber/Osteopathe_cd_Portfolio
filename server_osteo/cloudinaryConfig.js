
const cloudinary = require('cloudinary').v2;
const express = require('express')
const router = express.Router();

// CLOUDINARY CONFIG SETUP

cloudinary.config({
    cloud_name: process.env.VUE_APP_CLOUD_NAME,
    api_key: process.env.VUE_APP_API_KEY,
    api_secret: process.env.VUE_APP_API_SECRET
});

// GET route to get ALL pictures from client-folder (right now call limit is set at 30 but can be brought up to 100)
router.get("/api/pics", async (req, res) => {
    const allPicObjs = await cloudinary.api.resources({ max_results: 10, quality: 10, loading: "lazy" },);
    const picsArray = allPicObjs.resources.map((picDetails) => picDetails.secure_url)
    console.log(picsArray)
    res.status(200).json(picsArray)
})
module.exports = router;
