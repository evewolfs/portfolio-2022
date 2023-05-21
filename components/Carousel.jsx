
const Carousel = () => {
  return (
    <div className="carousel-container">
        
        <div className="Carousel">
            {img.map(img=> (<div className="carousel-item">
<img src={img.url} />
            </div>))}
        </div>
    </div>
  )
}

export default Carousel