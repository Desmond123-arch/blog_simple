import { Link } from "react-router-dom";
import blogData from "../temp";
const Home = () => {
    const latestblog = blogData[blogData.length - 1];
    return (
        <div className="mx-auto my-10 w-full md:w-10/12">
            <div
                className="hero min-h-[55vh] rounded-xl place-items-end"
                style={{
                    backgroundImage: `url(${latestblog.imageUrl})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-neutral-content w-full h-max p-5">
                    <div className="w-full">
                        <h1 className="text-5xl font-bold text-start">{latestblog.title}</h1>
                        <p className="text-3xl font-bold text-start">{latestblog.subheading}</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {
                blogData.map((blog) => {
                    return (
                            <Link to={`/blog/${blog.id}`} key={blog.id} className="card bg-base-100 w-100 h-96 shadow-xl mt-10 mx-auto md:mx-0">
                                <figure>
                                    <img
                                        src={blog.imageUrl}
                                        alt="blog header" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{blog.title}</h2>
                                    <p>{blog.subheading}</p>
                                </div>
                            </Link>
                    )
                })
            }
            </div>
            {/*  */}
        </div>
    );
}

export default Home;