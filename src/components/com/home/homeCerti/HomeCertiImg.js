// import React from "react";

// const HomeCertiImg = ({ image }) => {
//   return (
//     <div className="certi-list">
//       <img src={image} alt="인증서" />
//     </div>
//   );
// };

// export default HomeCertiImg;

import React from "react";

const HomeCertiImg = ({ image, style }) => {
  return (
    <div className="certi-list">
      <img src={image} alt="인증서" style={style} />
    </div>
  );
};

export default HomeCertiImg;
