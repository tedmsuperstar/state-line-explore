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
            {products.map((card: any) => {return <li><ProductCard name={card.name} brand={card.brand} image1x={card.image1x} image2x={card.image2x} url={card.url} displayLocation={card.display_location} displayPrice={card.display_price}/></li>})}  
                
            </ul>
        </div>
        </>
    )
    }

    return <></>
}   

export default ProductCardList