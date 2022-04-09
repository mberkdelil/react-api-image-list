const ImageList = (props) => {

    const images = props.images.map((image) => {
        return <img key={image.id} src={image.webformatURL} alt="img" />
    })

    return (
        <div>
            {images}
        </div>
    )
}

export default ImageList;