import multer from "multer";

const storage = multer.memoryStorage();


const singleUpload = multer({storage}).single("file");

// to upload multiple file
export const multipleUpload = multer({storage}).array("files",3);




export default singleUpload;