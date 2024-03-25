
import MoviesCarousel from "../features/Brain/FeaturedFilm";
import ChannelsCarousel from "../features/Brain/FeaturedTV";

const Home = () => {
    return (
        <>
            <div className="featured">
                <h2>NEW RELEASE</h2>
            </div>
            <MoviesCarousel />
            <div className="featured">
                <h2>TOP PICKS TV</h2>
            </div>
            <ChannelsCarousel />
        </>
    )
};

export default Home;