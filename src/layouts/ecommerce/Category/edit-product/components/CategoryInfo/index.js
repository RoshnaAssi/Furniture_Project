import { useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonEditor from "components/ArgonEditor";
import ArgonSelect from "components/ArgonSelect";

// NewProduct page components
import FormField from "layouts/ecommerce/Category/edit-product/components/FormField"

function CategoryInfo({
  editName,setEditName,editTotalProduct,setEditTotalProduct,editDescription,setEditDescription,editTotalEarning,
  setEditTotalEarning,editStatus,setEditStatus,editCategory
}) {
  return (
    <Card sx={{ overflow: "visible" }}>
      <ArgonBox p={3}>
        <ArgonTypography variant="h5">Product Information</ArgonTypography>
        <ArgonBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormField type="text" label="name"  value={editName} onChange={(e) => setEditName(e.target.value)}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormField type="text" label="TotalProduct" placeholder="eg." value={editTotalProduct} onChange={(e) => setEditTotalProduct(e.target.value)} />
            </Grid>
          </Grid>
        </ArgonBox>
        <ArgonBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
            <FormField type="text" label="TotalEarning" placeholder="eg. 42" value={editTotalEarning} onChange={(e) => setEditTotalEarning(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={3}>
            <FormField type="text" label="Status" placeholder="in stock" value={editStatus} onChange={(e) => setEditStatus(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormField type="number" label="quantity" defaultValue={50} />
            </Grid>
          </Grid>
        </ArgonBox>
        <ArgonBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
              <ArgonBox mb={3}>
                <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <ArgonTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Category
                  </ArgonTypography>
                </ArgonBox>
                <ArgonSelect
                  defaultValue={{ value: "clothing", label: "Clothing" }}
                  options={[
                    { value: "clothing", label: "Clothing" },
                    { value: "electronics", label: "Electronics" },
                    { value: "furniture", label: "Furniture" },
                    { value: "others", label: "Others" },
                    { value: "real estate", label: "Real Estate" },
                  ]}
                />
              </ArgonBox>
              <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <ArgonTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Color
                </ArgonTypography>
              </ArgonBox>
              <ArgonSelect
                defaultValue={{ value: "black", label: "Black" }}
                options={[
                  { value: "black", label: "Black" },
                  { value: "blue", label: "Blue" },
                  { value: "green", label: "Green" },
                  { value: "orange", label: "Orange" },
                  { value: "white", label: "White" },
                ]}
              />
            </Grid>
          </Grid>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

CategoryInfo.propTypes = {
  editName: PropTypes.string.isRequired,
  setEditName: PropTypes.string.isRequired,
  editTotalProduct: PropTypes.string.isRequired,
  setEditTotalProduct: PropTypes.string.isRequired,
  editTotalEarning: PropTypes.string.isRequired,
  setEditTotalEarning: PropTypes.string.isRequired,
  editStatus: PropTypes.string.isRequired,
  setEditStatus: PropTypes.string.isRequired,
  editDescription: PropTypes.string.isRequired,
  setEditDescription: PropTypes.string.isRequired,
  editCategory: PropTypes.string.isRequired,
};

export default CategoryInfo;
