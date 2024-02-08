// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Checkbox from "@mui/material/Checkbox";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function ProductCell({ categoryList,category, name, checked }) {
  return (
    <>
    {categoryList.map((category, index) => (
      <ArgonBox key={category.id} display="flex" alignItems="center">
        <ArgonBox key={category.id} display="flex" alignItems="center">
          <Checkbox defaultChecked={category.checked} />
          <ArgonBox mx={2} width="3.75rem">
            <ArgonBox component="img" src={category.img} alt={category.name} width="100%" />
          </ArgonBox>
          <ArgonTypography variant="button" fontWeight="medium">
            {category.name}
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
    ))}
  </>
  );
}

// Typechecking props for the ProductCell
ProductCell.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  category: PropTypes.string.isRequired,
  categoryList: PropTypes.string.isRequired,
};

export default ProductCell;
