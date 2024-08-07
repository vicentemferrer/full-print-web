import './CarouselButton.css'

export enum btnTypes {
    Prev = 'prev',
    Next = 'next'
}

const iconStyles = {
    prev: 'left',
    next: 'right',
}

type Props = {
    btnType: btnTypes
}

function CarouselButton({ btnType }: Props) {
    return (
        <button className={`carousel-arrow carousel-${btnType}`} data-button={`button-${btnType}`}>
            <i className={`fi fi-br-angle-small-${iconStyles[btnType]}`}></i>
        </button>
    )
}

export default CarouselButton