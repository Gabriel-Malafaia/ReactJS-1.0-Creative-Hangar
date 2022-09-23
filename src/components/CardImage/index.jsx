function CardImage({imageLink}) {
    return (
        <>
            <img className="animate__animated animate__fadeIn card__image" src={imageLink} alt="" />
        </>
    )
}

export default CardImage