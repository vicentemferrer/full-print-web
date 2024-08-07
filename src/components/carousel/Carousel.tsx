import CarouselButton, { btnTypes } from "./CarouselButton.tsx"
import "./Carousel.css"

function Carousel({ children }) {
    return (
        <section className="carousel">
            <CarouselButton btnType={btnTypes.Prev} />

            <div className="carousel-track">
                {
                    children
                }
            </div>

            <CarouselButton btnType={btnTypes.Next} />
        </section>
    )
}

export default Carousel