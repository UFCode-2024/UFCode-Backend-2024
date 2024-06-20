const render = (problem) => {
    return {
        id: problem._id,
        name: problem.name,
        description: problem.description,
        input: problem.input,
        expectedOutput: problem.expectedOutput,
        houseId: problem.id_house,
        difficultyId: problem.id_difficulty,
        courses: problem.courses,
        modules: problem.modules
    }
}

const renderMany = (problems) =>{
    return problems.map((problem) => render(problem))
}

module.exports.render = render
module.exports.renderMany = renderMany 