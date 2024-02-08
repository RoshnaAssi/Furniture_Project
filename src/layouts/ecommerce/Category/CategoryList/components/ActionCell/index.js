// @mui material components
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import PropTypes from 'prop-types'; // Import PropTypes
import { useNavigate } from "react-router-dom";

function ActionCell({categoryList,handelDelete}) {
  const navigate = useNavigate();
  return (
    <>
      {categoryList.map((category, index) => (
        <ArgonBox key={category.id} display="flex" alignItems="center">
          {index === 0 && ( // Render the icon only for the first category
            <>
              <ArgonTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
                <Tooltip title="Preview product" placement="top">
                  <Icon>visibility</Icon>
                </Tooltip>
              </ArgonTypography>
              <ArgonBox mx={2}>
                <ArgonTypography
                  variant="body1"
                  color="secondary"
                  sx={{ cursor: "pointer", lineHeight: 0 }}
                >
                  <Tooltip title="Edit product" placement="top" onClick={() => navigate(`/ecommerce/Category/CategoryPage/${category.id}`)}>
                    <Icon>edit</Icon>
                  </Tooltip>
                </ArgonTypography>
              </ArgonBox>
              <ArgonTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
                <Tooltip title="Delete product" placement="left" onClick={() => handelDelete(category.id)}>
                  <Icon>delete</Icon>
                </Tooltip>
              </ArgonTypography>
            </>
          )}
        </ArgonBox>
      ))}
    </>
  );
}

ActionCell.propTypes = {
  categoryList: PropTypes.string.isRequired,
  handelDelete: PropTypes.string.isRequired,
};

export default ActionCell;
