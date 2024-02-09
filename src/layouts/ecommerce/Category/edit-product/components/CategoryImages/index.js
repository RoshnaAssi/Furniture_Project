import { useState, useEffect } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
// @mui material components
import Card from "@mui/material/Card";
// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import { collection, getDocs } from "firebase/firestore";
import { db } from "config/firebase";
import ArgonTypography from "components/ArgonTypography";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

// Images
const sofa =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-page.jpg";

function CategoryImages({ editImg, setEditImg, setCategoryList }) {

  const [file, setFile] = useState(null); // State to hold the selected file

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Category"));
        const newList = [];
        querySnapshot.forEach((doc) => {
          newList.push({ id: doc.id, ...doc.data() });
        });
        setCategoryList(newList);
        console.log(newList);
        if (newList.length > 0) {
          setEditImg(newList[0].img); // Set editImg from fetched data
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  // Function to handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Convert selected file to URL and update editImg state
    const reader = new FileReader();
    reader.onload = () => {
      setEditImg(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <Card sx={{ height: "100%" }}>
    <ArgonBox p={3}>
      <ArgonBox mt={3}>
        <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
          <ArgonTypography component="label" variant="h5" fontWeight="bold">
            Category Image
          </ArgonTypography>
        </ArgonBox>
        <div className="bottom">
          <div className="left">
            <img
              src={
                editImg || (file && URL.createObjectURL(file))
                  ? editImg || URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              width="100%"
              my={3}
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange} // Handle file selection
                  style={{ display: "none" }}
                />
              </div>
            </form>
          </div>
        </div>
      </ArgonBox>
    </ArgonBox>
    </Card>
  );
}
CategoryImages.propTypes = {
  editImg: PropTypes.string.isRequired,
  setEditImg: PropTypes.func.isRequired, // Change to func
  setCategoryList: PropTypes.func.isRequired, // Change to func
};
export default CategoryImages;
