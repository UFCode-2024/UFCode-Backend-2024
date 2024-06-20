const render = (difficulty) => {
    return {
        id: difficulty._id,
        name: difficulty.name
    }
}

const renderMany = (difficultys) =>{
    return difficultys.map((difficulty) => render(difficulty))
}

module.exports.render = render
module.exports.renderMany = renderMany 