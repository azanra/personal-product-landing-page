import { OrderButton } from "./button/button";
import { HeaderOrder } from "./header/header"
import { OrderImage } from "./image/image";

function Order() {
    return (
        <div className="order-section flex-container container-bg-color">
            <div>
                <HeaderOrder/>
                <OrderButton/>
            </div>  
            <div>
                <OrderImage/> 
            </div>          
        </div>

    )
}

export {Order};