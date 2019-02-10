import React from "react";
import Loadable from "react-loadable";

function LoadingComp() {
  return <h4>loading ...</h4>;
}

export const AsyncCompOne = Loadable({
  loading: LoadingComp,
  loader: () => {
    return import(/* webpackChunkName: "AsyncCompOne" */ "./SubCompOne");
  }
});

export const AsyncCompTwo = Loadable({
  loading: LoadingComp,
  loader: () => {
    return import(/* webpackChunkName: "AsyncCompTwo" */ "./SubCompTwo");
  }
});

export const AsyncCompThree = Loadable({
  loading: LoadingComp,
  loader: () => {
    return import(/* webpackChunkName: "AsyncCompThree" */ "./SubCompThree");
  }
});

export const AsyncCompFour = Loadable({
  loading: LoadingComp,
  loader: () => {
    return import(/* webpackChunkName: "AsyncCompFour" */ "./SubCompFour");
  }
});
