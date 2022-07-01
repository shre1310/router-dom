import React from "react";
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <Link to={'/Vercelapp'}>VercelApp</Link><br/>
            <Link to={'/git-feature'}>GitFeature</Link>
        </div>
    )
}
export default Home
