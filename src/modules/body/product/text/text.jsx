function ProductText({name, description, price}) {
    return (
        <div className="product-text-container flex-container">
            <div>
                <h1 className="colored-span-text product-header-text">{name}</h1>
                <p className="order-text">{description}</p>
            </div>
            <div>
                <p className="colored-span-text product-order-price">{price}</p>
            </div>
        </div>
    )
}

export {ProductText};