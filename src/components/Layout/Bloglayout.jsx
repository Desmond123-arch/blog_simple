import { Outlet } from "react-router-dom";
import { Suspense } from "react";
const BlogLayout = () => {
    
    return (
        <>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
                </Suspense>
            </main>
        </>
    );
}
 
export default BlogLayout;