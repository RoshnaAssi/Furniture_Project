import { useState, useEffect } from "react";
import PropTypes from 'prop-types'; // Import PropTypes

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import { collection, getDocs } from "firebase/firestore";
import { db } from "config/firebase";

function CategoryImages({ editImg, setEditImg, setCategoryList }) {
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

  return (
    <ArgonBox>
      <ArgonBox
        component="img"
        src={editImg}
        alt="Product Image"
        shadow="lg"
        borderRadius="lg"
        width="10%"
      />
    </ArgonBox>
  );
}

CategoryImages.propTypes = {
  editImg: PropTypes.string.isRequired,
  setEditImg: PropTypes.func.isRequired, // Change to func
  setCategoryList: PropTypes.func.isRequired, // Change to func
};

export default CategoryImages;
