// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import ArgonBadge from "components/ArgonBadge";
import ArgonSelect from "components/ArgonSelect";
import ArgonInput from "components/ArgonInput";
import PropTypes from 'prop-types'; // Import PropTypes
import { updateDoc, collection, getDoc } from "firebase/firestore";
import { useState } from "react";
import { db, storage } from "../../../../../../config/firebase"
import { Link, useParams } from "react-router-dom";
import FormField from "layouts/ecommerce/Category/AddCategory/components/FormField";
import ArgonEditor from "components/ArgonEditor";
import { useEffect } from "react";


function ProductInfo({
   editName, setEditName, editTotalProduct, setEditTotalProduct,editDescription, setEditDescription
  ,editTotalEarning, setEditTotalEarning,editStatus, setEditStatus, editCategory
}) {

  const { id } = useParams();
  const [data, setData] = useState([]);
  
  const frameOptions = [
    { value: "aluminium", label: "Aluminium" },
    { value: "carbon", label: "Carbon" },
    { value: "steel", label: "Steel" },
    { value: "wood", label: "Wood" },
  ];

  const colorOptions = [
    { value: "black", label: "black" },
    { value: "blue", label: "blue" },
    { value: "gray", label: "gray" },
    { value: "pink", label: "pink" },
    { value: "red", label: "red" },
    { value: "white", label: "white" },
  ];

  return (
    <ArgonBox>
      <Grid item xs={12} sm={6}>
        <FormField type="text" label="name" placeholder="eg. " value={editName} onChange={(e) => setEditName(e.target.value)} />
      </Grid>
      <ArgonTypography variant="h4" color="text" mt={2}>
        <Icon>star</Icon>
        <Icon>star</Icon>
        <Icon>star</Icon>
        <Icon>star</Icon>
        <Icon>star_half</Icon>
      </ArgonTypography>
      <ArgonBox mt={1}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="TotalProduct" placeholder="eg." value={editTotalProduct} onChange={(e) => setEditTotalProduct(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="TotalEarning" placeholder="eg. 42" value={editTotalEarning} onChange={(e) => setEditTotalEarning(e.target.value)} />
          </Grid>
        </Grid>
      </ArgonBox>
      <FormField type="text" label="Status" placeholder="in stock" value={editStatus} onChange={(e) => setEditStatus(e.target.value)} />
      <Grid item xs={12}>
        <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
          <ArgonTypography component="label" variant="caption" fontWeight="bold">
            Description&nbsp;&nbsp;
            <ArgonTypography variant="caption" fontWeight="regular" color="text" value={editDescription} onChange={(e) => setEditDescription(e.target.value)}>
              (optional)
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
        <ArgonEditor />
      </Grid>
      <ArgonBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <ArgonTypography component="label" variant="caption" fontWeight="bold">
                Frame Material
              </ArgonTypography>
            </ArgonBox>
            <ArgonSelect defaultValue={frameOptions[3]} options={frameOptions} />
          </Grid>
          <Grid item xs={12} lg={5}>
            <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <ArgonTypography component="label" variant="caption" fontWeight="bold">
                Color
              </ArgonTypography>
            </ArgonBox>
            <ArgonSelect defaultValue={colorOptions[5]} options={colorOptions} />
          </Grid>
          <Grid item xs={12} lg={2}>
            <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <ArgonTypography component="label" variant="caption" fontWeight="bold">
                Quantity
              </ArgonTypography>
            </ArgonBox>
            <ArgonInput inputProps={{ type: "number" }} defaultValue={1} />
          </Grid>
        </Grid>
      </ArgonBox>
      <ArgonBox mt={3}>
        <Grid item xs={12} lg={5} container>
          <ArgonButton variant="gradient" color="info" fullWidth onClick={() => editCategory(data.id)}>
            Edit
          </ArgonButton>
        </Grid>
      </ArgonBox>
    </ArgonBox>
  );
}

ProductInfo.propTypes = {
  editName: PropTypes.string.isRequired,
  setEditName: PropTypes.func.isRequired,
  editTotalProduct: PropTypes.string.isRequired,
  setEditTotalProduct: PropTypes.func.isRequired,
  editDescription: PropTypes.string.isRequired,
  setEditDescription: PropTypes.func.isRequired,
  editTotalEarning: PropTypes.string.isRequired,
  setEditTotalEarning: PropTypes.func.isRequired,
  editStatus: PropTypes.string.isRequired,
  setEditStatus: PropTypes.func.isRequired,
  editCategory: PropTypes.func.isRequired, 
};

export default ProductInfo;
