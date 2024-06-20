const render = (language) => {
    return {
        id:language._id,
        name: language.name
    }
}

const renderMany = (languages) => {
    return  languages.map((language) => render(language))
}

module.exports.render = render
module.exports.renderMany = renderMany