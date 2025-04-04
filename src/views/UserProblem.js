const render = (userproblem) => {
    return {
        id: userproblem._id,
        userId: userproblem.id_user,
        problemId: userproblem.id_problem,
    }
}

const renderMany = (userproblems) =>{
    return userproblems.map((userproblem) => render(userproblem))
}

module.exports.render = render
module.exports.renderMany = renderMany 