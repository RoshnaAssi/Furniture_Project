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
import FormField from "layouts/ecommerce/Category/AddCategory/components/FormField";
import ArgonEditor from "components/ArgonEditor";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "config/firebase";

function ProductInfo({
  editName, setEditName, editTotalProduct, setEditTotalProduct, editDescription, setEditDescription, editTotalEarning,
  setEditTotalEarning, editStatus, setEditStatus, editCategory
}) {
  const [categoryList, setCategoryList] = useState([]);

  // Define frameOptions and colorOptions
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
          setEditName(newList[0].name); // Assuming you want to set editName from the first item in the list
          setEditTotalProduct(newList[0].TotalProduct);
          setEditTotalEarning(newList[0].TotalEarning);
          setEditStatus(newList[0].status);
          setEditDescription(newList[0].description);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {categoryList.map((category, index) => (
        <ArgonBox key={category.id}>
          <ArgonBox mb={1}>
            <ArgonTypography variant="h3" fontWeight="bold">
              {category.name}
            </ArgonTypography>
          </ArgonBox>
          <ArgonTypography variant="h4" color="text" mt={2}>
            <Icon>star</Icon>
            <Icon>star</Icon>
            <Icon>star</Icon>
            <Icon>star</Icon>
            <Icon>star_half</Icon>
          </ArgonTypography>
          <ArgonBox mt={1}>
            <ArgonBox>
              <ArgonTypography variant="h6" fontWeight="medium">
                Total Product : {category.TotalProduct}
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mt={1}>
              <ArgonTypography variant="h6" fontWeight="medium">
                Total Earning : {category.TotalEarning}
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
          <ArgonBadge variant="contained" color="success" badgeContent={category.status} container />
          <ArgonBox mt={3} mb={1} ml={0.5}>
            <ArgonTypography variant="caption" fontWeight="bold">
              Description
            </ArgonTypography>
          </ArgonBox>
          <ArgonBox component="ul" m={0} pl={4} mb={2}>
            <ArgonBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
              <ArgonTypography variant="body2" color="text" verticalAlign="middle">
                {category.description}
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
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
              <ArgonButton variant="gradient" color="info" fullWidth>
                Add To Cart
              </ArgonButton>
            </Grid>
          </ArgonBox>
        </ArgonBox>
      ))}
    </>
  );
}

ProductInfo.propTypes = {
  editName: PropTypes.string.isRequired,
  setEditName: PropTypes.func.isRequired,
  editTotalProduct: PropTypes.string.isRequired,
  setEditTotalProduct: PropTypes.func.isRequired,
  editTotalEarning: PropTypes.string.isRequired,
  setEditTotalEarning: PropTypes.func.isRequired,
  editStatus: PropTypes.string.isRequired,
  setEditStatus: PropTypes.func.isRequired,
  editDescription: PropTypes.string.isRequired,
  setEditDescription: PropTypes.func.isRequired,
  editCategory: PropTypes.string.isRequired,
};


export default ProductInfo;
