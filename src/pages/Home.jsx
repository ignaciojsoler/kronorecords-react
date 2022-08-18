import React, {Suspense} from "react";
import Loading from "../components/Loading";

const Cover = React.lazy(() => import("../components/Cover"))
const WhatWeDo = React.lazy(() => import("../components/WhatWeDo"))
const Carousel = React.lazy(() => import("../components/Carousel"))

const Home = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <div>
        <Cover/>
        <WhatWeDo/>
        <Carousel/>
        </div>
    </Suspense>
  );
};

export default Home;
