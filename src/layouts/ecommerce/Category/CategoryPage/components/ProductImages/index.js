import { useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
// react-images-viewer components
import ImgsViewer from "react-images-viewer";

// @mui material components
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";

function ProductImages() {
  const [imgsViewer, setImgsViewer] = useState(false);
  const [imgsViewerCurrent, setImgsViewerCurrent] = useState(0);

  const openImgsViewer = () => setImgsViewer(true);
  const closeImgsViewer = () => setImgsViewer(false);
  const imgsViewerNext = () => setImgsViewerCurrent(imgsViewerCurrent + 1);
  const imgsViewerPrev = () => setImgsViewerCurrent(imgsViewerCurrent - 1);
  const [editImg, setEditImg] = useState('');

  return (
    <ArgonBox>
      <ImgsViewer
        imgs={[{ src: editImg }]}
        isOpen={imgsViewer}
        onClose={closeImgsViewer}
        currImg={imgsViewerCurrent}
        onClickPrev={imgsViewerPrev}
        onClickNext={imgsViewerNext}
        backdropCloseable
        onChange={(e) => setEditImg(e.target.value)}
      />

      <ArgonBox
        component="img"
        src={editImg}
        alt="Product Image"
        shadow="lg"
        borderRadius="lg"
        width="100%"
        onClick={openImgsViewer}
        onChange={(e) => setEditImg(e.target.value)}
      />
    </ArgonBox>
  );
}

ProductImages.propTypes = {
  editImg: PropTypes.string.isRequired,
};

export default ProductImages;
