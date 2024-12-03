
function ProductCard(props: any): JSX.Element {

    const name = props.name || ""
    const displayPrice = props.displayPrice || ""
    const displayLocation = props.displayLocation || ""
    const image1x = props.image1x || ""
    const image2x = props.image2x || image1x
    const srcSet = props.srcSet || `${image1x} 300w, ${image2x} 600w`
    const sizes= "(max-width: 600px) 300px, 600px"
    const url = props.url || ""
    const loading = props.loading || "lazy"

    return (
 
        <>
            <a className='product-card' href={url}>
                <article>
                    <div className="img-wrap">
                        <img  
                        loading={loading}
                        alt={name}
                        srcSet={srcSet}
                        sizes={sizes}
                        src={image1x}/>
                    </div>
                    <section>
                        <div>
                            <h3>
                                <h4 className="location">{displayLocation}</h4>
                                <span className="product-name">{name}</span>
                            </h3>
                        </div>
                    </section>
                    <div >
                        <span className="display-price">{displayPrice}</span>
                    </div>
                </article>
            </a>
        </>
    );
}   

export default ProductCard;