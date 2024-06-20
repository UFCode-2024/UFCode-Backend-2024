const render = (module) => {
    return {
        id: module._id,
        name: module.name
    }
}

const renderMany = (modules) =>{
    return modules.map((module) => render(module))
}

module.exports.render = render
module.exports.renderMany = renderMany 