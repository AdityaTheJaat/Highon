async function uploadFileToCloudinary(file, folder, quality) {
	const options = { folder };
	console.log("temp file path", file.tempFilePath);
	if (quality) {
		options.quality = quality;
	}
	options.resource_type = "auto";
	return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.imageUpload = async (req, res) => {
	try {
		//data fetch
		const { name, email } = req.body;
		console.log(name, email);
    console.log(req.body)
		const file = req.files;
		console.log(file);
    console.log(file.imageFile.name)

		//Validation
		const supportedTypes = ["jpg", "jpeg", "png"];
		const fileType = file.imageFile.name.split(".")[1].toLowerCase();
		console.log("File Type:", fileType);
    console.log("Testing")
		if (!isFileTypeSupported(fileType, supportedTypes)) {
			return res.status(400).json({
				success: false,
				message: "File format not supported",
			});
		}
    
		//file format supported hai
		console.log("Uploading to Codehelp");
		const response = await uploadFileToCloudinary(file, "Aditya");
		console.log(response);

		//db me entry save krni h
		const fileData = await File.create({
			name,
			email,
			imageUrl: response.secure_url,
		});

		res.json({
			success: true,
			imageUrl: response.secure_url,
			message: "Image Successfully Uploaded",
      fileData
		});
	} catch (error) {
		console.error(error);
		res.status(400).json({
			success: false,
			message: "Something went wrong",
		});
	}
};