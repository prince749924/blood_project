import { Button, Upload, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { SetLoader } from "../../redux/loaderSlice";
import {
  EditAdvertisement,
  UploadAdvertisementImage,
} from "../../apicalls/advertisement";

function Images({
  selectedAdvertisement,
  setSelectedAdvertisement,
  setShowAdvertisementForm,
  getData,
}) {
  const [showPreview, setShowPreview] = React.useState(true);
  const [images, setImages] = React.useState(selectedAdvertisement.images);
  const [file = null, setFile] = React.useState(null);
  const dispatch = useDispatch();

  // Delete Image

  const deleteImage = async (image) => {
    try {
      const updatedImagesArray = images.filter((img) => img !== image);
      const updatedAdvertisement = {
        ...selectedAdvertisement,
        images: updatedImagesArray,
      };
      const response = await EditAdvertisement(
        selectedAdvertisement._id,
        updatedAdvertisement
      );

      if (response.success) {
        message.success(response.message);
        setImages(updatedImagesArray);
        setFile(null);
        getData();
      } else {
        throw new Error(response.message);
      }

      dispatch(SetLoader(true));
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  // Upload Images
  const upload = async () => {
    try {
      dispatch(SetLoader(true));
      // Upload Images to cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("adsId", selectedAdvertisement._id);
      const response = await UploadAdvertisementImage(formData);
      dispatch(SetLoader(false));
      if (response.success) {
        message.success(response.message);
        setImages([...images, response.data]);
        setShowPreview(false);
        setFile(null);
        getData();
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex gap-5 mb-5">
        {images.map((image) => {
          return (
            <div className="flex gap-2 border border-solid border-gray-500 rounded p-2 items-end">
              <img className="h-20 w-20 object-cover" src={image} alt="" />
              <i
                className="ri-delete-bin-line"
                onClick={() => deleteImage(image)}
              ></i>
            </div>
          );
        })}
      </div>
      <Upload
        listType="picture"
        beforeUpload={() => false}
        onChange={(info) => {
          setFile(info.file);
          setShowPreview(true);
        }}
        showUploadList={showPreview}
      >
        <Button type="default">Upload Image</Button>
      </Upload>

      <div className="flex justify-end gap-5 mt-5">
        <Button
          type="primary"
          onClick={() => {
            setShowAdvertisementForm(false);
          }}
        >
          Cancel
        </Button>
        <Button type="primary" disabled={!file} onClick={upload}>
          Upload
        </Button>
      </div>
    </div>
  );
}

export default Images;
