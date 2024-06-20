const render = (house) => {
    return {
        id: house._id,
        name: house.name,
        description: house.description,
        positionX: house.positionX,
        positionY: house.positionY,
    }
}

const renderMany = (houses) =>{
    return houses.map((house) => render(house))
}

module.exports.render = render
module.exports.renderMany = renderMany 