// import React, { useRef, useState } from 'react'
// import back from '../resources/back.svg'
// import { Link } from 'react-router-dom'

// const Gallery = () => {
//   //const { token } = useSelector((state) => state.auth)
//   const user_info = JSON.parse(localStorage.getItem("user_info"))
//   const token = user_info?.user?.token;
//   const fileInputRef = useRef();
//   const [loading, setLoading] = useState(false)
//   const [imgFile, setImgFile] = useState(null);
//   const [previewSrc, setPreviewSrc] = useState();
//   //const dispatch = useDispatch();
//   const previewFile = (file) => {
//     const reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onloadend = () => {
//       setPreviewSrc(reader.result)
//     }
//   }
//   const handleFileChange = (event) => {
//     const file = event.target.files[0]
//     if(file){
//       setImgFile(file);
//       previewFile(file)
//     }
//   }
//   const handleFileUpload = () => {
//     try{
//       setLoading(true)
//       const formData = new FormData()
//       formData.append("displayPicture", imgFile)
//       //dispatch(updateDP(token, formData))
//     } catch(err){
//       console.log("ERROR MESSAGE - ", err.message)
//     }
//   }
//   const handleClick = () => {
//     fileInputRef.current.click();
//   }
//   return (
//     <div className='w-11/12 mx-auto space-y-4'>
//       <div className='flex justify-between mt-10 '>
//         <Link to='/create/createPost/'>
//           <img src={back} alt='' className='w-10' />
//         </Link>
//         <Link to='/create/createPost/gallery/upload/postDesc'>
//           <button className='rounded-2xl text-white p-3 bg-neutral-600'>Next</button>
//         </Link>
//       </div>
//       <p className='text-center text-zinc-600'>Select from your gallery</p>
//       {/* PHOTOS */}
//       <div className='flex gap-5 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12'>
//       <img src={previewSrc} alt='' className="aspect-square w-[78px] rounded-full object-cover" />
//       <div className='flex-row'>
//         <p className="text-lg font-medium text-richblack-5 mb-1">Change Profile Picture</p>
//         <div className='flex gap-5'>
//           <input
//             type="file"
//             ref={fileInputRef}
//             onChange={handleFileChange}
//             className="hidden"
//             accept="image/png, image/gif, .png"
//           />
//           <button
//             onClick={handleClick}
//             disabled={loading}
//             className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
//           >
//             Select
//           </button>
//           {/* <IconBtn text="Upload" onclick={handleFileUpload} >{!loading && (<FiUpload className="text-lg text-richblack-900" />)}</IconBtn> */}
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Gallery
import React, { useState } from "react";
import axios from "axios";

const ImageUploadForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
      formData.append("imageFile", imageFile);
      console.log(formData.get("name"));
      const response = await axios.post("http://localhost:4000/user/imageUpload", formData);
      setImageUrl(response.data.imageUrl);
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
      {message && <p>{message}</p>}
    </div>
  );
};

export default ImageUploadForm;
