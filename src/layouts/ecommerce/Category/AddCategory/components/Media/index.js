// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import PropTypes from 'prop-types'; // Import PropTypes
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

function Media({ file, setFile }) {
  return (
    <ArgonBox>
      <ArgonTypography variant="h5">Media</ArgonTypography>
      <ArgonBox mt={3}>
        <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
          <ArgonTypography component="label" variant="caption" fontWeight="bold">
            Category Image
          </ArgonTypography>
        </ArgonBox>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
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
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
            </form>
          </div>
        </div>
      </ArgonBox>
    </ArgonBox>
  );
}

Media.propTypes = {
  setFile: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
};

export default Media;
