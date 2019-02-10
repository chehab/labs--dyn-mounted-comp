import React from "react";
import { get as _get } from "lodash";

import {
  AsyncCompOne,
  AsyncCompTwo,
  AsyncCompThree,
  AsyncCompFour
} from "./SubDynComp";

const dynCompList = {
  odd: {
    one: AsyncCompOne,
    three: AsyncCompThree
  },
  even: {
    two: AsyncCompTwo,
    four: AsyncCompFour
  }
};

const emptyComp = () => {
  return <h4>NONE/NOT-FOUND SELECTED</h4>;
};

export default function(props) {
  const DynComp = _get(dynCompList, props.compPath, emptyComp);

  return (
    <React.Fragment>
      <h2>DynComp</h2>
      <DynComp />
    </React.Fragment>
  );
}
