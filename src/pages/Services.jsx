import React, {Suspense} from "react";
import Loading from "../components/Loading";
const GridServices = React.lazy(() => import('../components/GridServices'))

const Services = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <GridServices />
    </Suspense>
  );
};

export default Services;
