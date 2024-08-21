import ArtCraft from "../Components/ArtCraft";
import ArtCraftCategory from "../Components/ArtCraftCategory";
import Banner from "../Components/Banner";
import Newsletter from "../Components/Newsletter";

const Home = () => {
    return (
        <>
            <Banner/>
            <ArtCraft/>
            <ArtCraftCategory/>
            <Newsletter/>
        </>
    );
};

export default Home;