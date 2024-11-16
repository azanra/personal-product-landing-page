import { ProductImage } from "./image/image";
import { ProductText } from "./text/text";

function ProductContainer() {
    const productArr = [
        {
            id: 1,
            image: "",
            name: "Product",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam sunt ipsa, necessitatibus minima numquam. Laboriosam repudiandae reprehenderit facilis minus, illo harum sint quasi temporibus praesentium sit. Ratione, nam omnis?",
            price: "Rp 15.000",
        }
    ]
    return (
            productArr.map((product, index) => {
                return (
                    <div key={product.id} className="order-image-width product-container container-bg-color order-image-height border-radius">
                            <ProductImage 
                                image = {product.image}
                            />
                            <ProductText 
                                name = {product.name}
                                description = {product.description}
                                price = {product.price}
                            />           
                    </div>
                )    
            })
    )
}

export {ProductContainer};