const render = (course) => {
    return {
        id: course._id,
        name: course.name
    }
}

const renderMany = (courses) =>{
    return courses.map((course) => render(course))
}

module.exports.render = render
module.exports.renderMany = renderMany 