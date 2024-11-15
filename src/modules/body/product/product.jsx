import { ProductImage } from "./image/image";
import { ProductText } from "./text/text";

function ProductContainer() {
    const productArr = [
        {
            image: "",
            name: "Product",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam sunt ipsa, necessitatibus minima numquam. Laboriosam repudiandae reprehenderit facilis minus, illo harum sint quasi temporibus praesentium sit. Ratione, nam omnis?",
            price: "Rp 15.000",
        }
    ]
    return (
        <div>
            <ProductImage/>
            <ProductText/>
        </div>
    )
}

export {ProductContainer};