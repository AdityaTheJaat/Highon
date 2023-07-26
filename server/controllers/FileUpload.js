const cloudinary = require("cloudinary");
const Post = require("../models/Post");


async function uploadFileToCloudinary(file, folder, quality) {
	const options = { folder };
	console.log;
	console.log("temp file path", file);
	if (quality) {
		options.quality = quality;
	}
	options.resource_type = "auto";
	return await cloudinary.uploader.upload(file.imageFile.path, options);
}

exports.imageUpload = async (req, res) => {
	try {
		//data fetch
		const { name, email } = req.fields;
		console.log(name, email);
		// console.log(req.files);
		// console.log(req.body)
		const file = req.files;
		// console.log(file);
		// console.log(file.imageFile.path);

		//Validation
		const supportedTypes = ["jpg", "jpeg", "png"];
		const fileType = file.imageFile.name.split(".")[1].toLowerCase();


		console.log("Uploading to Codehelp");
		const response = await uploadFileToCloudinary(file, "Aditya");


		Post.create({
			description: "Hello",
			creator: "60b9b0b0e3b9c71f1c0b3b1e",
			creatorName: "Aditya",
			tags: ["Hello", "World"],
			likes: {
				total: 0,
				users: [],
				usersName: [],
			},
			location: "Delhi",
			imagePost: response.secure_url,
		});



 
		res.json({
			success: true,
			imageUrl: response.secure_url,
			message: "Image Successfully Uploaded",
		});
		console.log("success");
	} catch (error) {
		console.error(error);
		res.status(400).json({
			success: false,
			message: "Something went wrong",
		});
	}
};
