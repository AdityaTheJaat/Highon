

// export default Gallery
import React, { useState } from "react";
import back from '../resources/back.svg'
import axios from "axios";
import ChipInput from './ChipInput'
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const CreateStory = () => {
  const navigate = useNavigate();
  const { fetchPosts } = React.useContext(UserContext);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
	const [imageFile, setImageFile] = useState(null);
	const [imageUrl, setImageUrl] = useState("");
	const [message, setMessage] = useState("");

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

  const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	};

	const handleImageChange = (e) => {
		setImageFile(e.target.files[0]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const formData = new FormData();
			formData.append("name", name);
			formData.append("email", email);
      formData.append("description", description)
			formData.append("imageFile", imageFile);
			const response = await axios.post(
				"http://localhost:4000/user/imageUpload",
				formData
			);
			setImageUrl(response.data.imageUrl);
			setMessage(response.data.message);
      fetchPosts();
      navigate("/")
		} catch (error) {
			console.error(error);
			setMessage("Something went wrong");
		}
	};

	return (
		<div>
      <Link to='/create/createPost/gallery'>
          <img src={back} alt='' className='w-10' />
      </Link>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Name:</label>
					<input type="text" value={name} onChange={handleNameChange} />
				</div>
        <div>
          <label>description :</label>
          <input type="text" value={description} onChange={handleDescriptionChange} />
        </div>
				<div>
					<label>Email:</label>
					<input type="text" value={email} onChange={handleEmailChange} />
				</div>
        <ChipInput label="Tag People" />
        <hr />
        <ChipInput label="Location" />
        <hr />
				<div className="w-full">
					<label>Vedio:</label>
					<input type="file" onChange={handleImageChange} />
				</div>
				<button type="submit">Upload</button>
			</form>
			{imageUrl && <img src={imageUrl} alt="Uploaded" />}
			{message && <p>{message}</p>}
		</div>
	);
};

export default CreateStory;
