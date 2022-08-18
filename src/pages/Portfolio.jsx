import React, {Suspense} from 'react';
import Loading from '../components/Loading';
const Carousel = React.lazy(() => import('../components/Carousel'))

const Portfolio = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Carousel/>
        </Suspense>
    );
};

export default Portfolio;