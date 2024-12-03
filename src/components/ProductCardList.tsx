import ProductCard from './ProductCard';

function ProductCardList(props: any): JSX.Element {

    const name = props.name || ''
    const index = props.index || 0
    const products = props.products || []
    
    if(products.length > 0){
    return (
        <>
        <h3>{name}</h3>
        <div className="product-card-list-wrapper">
            <ul className="product-card-list" data-index={index}>
            {products.map((product: any, productIndex:number) => {return <li><ProductCard name={product.name} brand={product.brand} image1x={product.image1x} image2x={product.image2x} loading={index < 2 && productIndex < 3 ? "eager" : "lazy"} srcSet={product.srcSet || null} url={product.url} displayLocation={product.display_location} displayPrice={product.display_price}/></li>})}  
                
            </ul>
        </div>
        </>
    )
    }

    return <></>
}   

export default ProductCardList