// ProductCell.js

import PropTypes from "prop-types";
import Checkbox from "@mui/material/Checkbox";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function ProductCell({ checked, img, name }) {

  return (
    <ArgonBox display="flex" alignItems="center">
      <Checkbox defaultChecked={checked} />
      <ArgonBox mx={2} width="3.75rem">
        <ArgonBox component="img" src={img} alt={name} width="100%" />
      </ArgonBox>
      <ArgonTypography variant="button" fontWeight="medium">
        {name}
      </ArgonTypography>
    </ArgonBox>
  );
}


// Prop types validation for the ProductCell component
ProductCell.propTypes = {
  checked: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

};

export default ProductCell;
