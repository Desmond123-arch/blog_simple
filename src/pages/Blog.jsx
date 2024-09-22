import { useParams } from "react-router-dom";

const Blog = () => {
   const {id} = useParams();
    return ( 
        <div>
            Blog details for {id}
        </div>
    );
}
 
export default Blog;