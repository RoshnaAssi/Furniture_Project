import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonEditor from "components/ArgonEditor";
import ArgonSelect from "components/ArgonSelect";

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";
import PropTypes from 'prop-types'; // Import PropTypes

function ProductInfo({setAddName,setAddTotalProduct,setAddDescription,setAddTotalEarning,setAddStatus}) {
  return (
    <ArgonBox>
    <ArgonTypography variant="h5">Add Category</ArgonTypography>
    <ArgonBox mt={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormField type="text" label="name" placeholder="eg. " onChange={(e) => { setAddName(e.target.value) }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormField type="text" label="TotalProduct" placeholder="eg. 42" onChange={(e) => { setAddTotalProduct(e.target.value) }} />
        </Grid>
      </Grid>
    </ArgonBox>
    <ArgonBox mt={2}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
            <ArgonTypography component="label" variant="caption" fontWeight="bold">
              Description&nbsp;&nbsp;
              <ArgonTypography variant="caption" fontWeight="regular" color="text" onChange={(e) => { setAddDescription(e.target.value) }}>
                (optional)
              </ArgonTypography>
            </ArgonTypography>
          </ArgonBox>
          <ArgonEditor />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormField type="text" label="TotalEarning" placeholder="eg. 420$" onChange={(e) => { setAddTotalEarning(e.target.value) }} />
          <FormField type="text" label="Status" placeholder="in stock" onChange={(e) => { setAddStatus(e.target.value) }} />
          <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
            <ArgonTypography
              component="label"
              variant="caption"
              fontWeight="bold"
              textTransform="capitalize"
            >
              Size
            </ArgonTypography>
          </ArgonBox>
          <ArgonSelect
            defaultValue={{ value: "medium", label: "Medium" }}
            options={[
              { value: "extra large", label: "Extra Large" },
              { value: "extra small", label: "Extra Small" },
              { value: "large", label: "Large" },
              { value: "medium", label: "Medium" },
              { value: "small", label: "Small" },
            ]}
          />
        </Grid>
      </Grid>
    </ArgonBox>
  </ArgonBox>
  );
}

ProductInfo.propTypes = {
  setAddName: PropTypes.string.isRequired,
  setAddTotalProduct: PropTypes.string.isRequired, 
  setAddDescription: PropTypes.string.isRequired, 
  setAddTotalEarning: PropTypes.string.isRequired,
  setAddStatus: PropTypes.string.isRequired,

  };

export default ProductInfo;
