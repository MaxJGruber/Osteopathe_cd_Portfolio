const cloudinary = require('cloudinary').v2;
const express = require('express')
const router = express.Router();

// CLOUDINARY CONFIG SETUP

cloudinary.config({
    cloud_name: "rolotomasi57" ,
    api_key : "395995118237346",
    api_secret: "GX92ghdHqCvP21eBYTLGGII5_ak"
});

router.get("/api/pics", async(req,res)=> {
    let picsArray = [];
   const allPicObjs = await cloudinary.api.resources((err,result)=> result);
   allPicObjs.resources.map((picDetails)=> picsArray.push(picDetails.secure_url))
   console.log(picsArray)
   res.status(200).json(picsArray)
   
  
})
// function getPicUrls() {
//     let picsArray = [];
//    return cloudinary.api.resources((err,result)=> result)
//     .then(res => res.resources.map((picDetails)=> picsArray.push(picDetails.secure_url))).then(() => picsArray)

// }
module.exports = router;
