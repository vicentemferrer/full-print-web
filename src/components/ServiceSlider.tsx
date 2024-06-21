import type { ServiceLink } from "../data/types";

import GliderComponent from "react-glider";
import ServiceCard from "./ServiceCard.tsx";

import "glider-js/glider.min.css";

type Props = {
    anchors: ServiceLink[]
}

function ServiceSlider({ anchors }: Props) {
    const sliderCards = anchors.map((anchor: ServiceLink, i) => (
        <ServiceCard key={i} props={anchor} />
    ))

    return (
        <GliderComponent
            draggable
            hasArrows
            hasDots
            slidesToShow={1}
            slidesToScroll={5}
            responsive={[
                {
                    breakpoint: 775,
                    settings: {
                        slidesToShow: "auto",
                        slidesToScroll: "auto",
                        itemWidth: 150,
                        duration: 0.25,
                    },
                },
            ]}
        >
            {
                sliderCards
            }
        </GliderComponent>
    )
}

export default ServiceSlider