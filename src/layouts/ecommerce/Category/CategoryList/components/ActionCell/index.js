import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import PropTypes from 'prop-types'; // Import PropTypes
import { useNavigate } from "react-router-dom";

function ActionCell({ category, handelDelete }) {
  const navigate = useNavigate();


  return (
    <ArgonBox display="flex" alignItems="center">
      <ArgonTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
        <Tooltip title="Preview product" placement="top" onClick={() => navigate(`/ecommerce/Category/CategoryPage/${category.id}`)}>
          <Icon>visibility</Icon>
        </Tooltip>
      </ArgonTypography>
      <ArgonBox mx={2}>
        <ArgonTypography
          variant="body1"
          color="secondary"
          sx={{ cursor: "pointer", lineHeight: 0 }}
        >
          <Tooltip title="Edit product" placement="top" onClick={() => navigate(`/ecommerce/Category/EditCategory/${category.id}`)}>
            <Icon>edit</Icon>
          </Tooltip>
        </ArgonTypography>
      </ArgonBox>
      <ArgonTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
        <Tooltip title="Delete product" placement="left" onClick={() => handelDelete(category.id)}>
          <Icon>delete</Icon>
        </Tooltip>
      </ArgonTypography>
    </ArgonBox>
  );
}

ActionCell.propTypes = {
  handelDelete: PropTypes.func.isRequired,
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default ActionCell;
