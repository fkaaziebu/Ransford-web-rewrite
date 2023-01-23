

// imports all images from assets folder
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);


const Carousel = () => {
    return (
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                {Object.values(heroTextureImports).map((texture, index) => (
                    <div key={`carousel-image-${index}`} class="carousel-item active" data-bs-interval="10000">
                        <img
                            src={texture}
                            alt={`carousel-${index}`}
                            style={{
                            width: "100%",
                            height: "400px",
                            objectFit: "cover",
                            backgroundAttachment: "fixed",
                            }}
                        />
                    </div>
                ))}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
</div>
    )
}

export default Carousel;