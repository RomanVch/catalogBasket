import React, { memo } from "react";
import { CircularProgress } from "@material-ui/core";

const Loading: React.FC = () => {

  return (
    <div className={"loadingStartWrapper"}>
      <CircularProgress />
    </div>
  );
};

export default memo(Loading);
