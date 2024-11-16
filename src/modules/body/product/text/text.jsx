function ProductText({name, description, price}) {
    return (
        <div>
            <div>
                <h1 className="colored-span-text">{name}</h1>
                <p>{description}</p>
            </div>
            <div>
                <p>{price}</p>
            </div>
        </div>
    )
}

export {ProductText};