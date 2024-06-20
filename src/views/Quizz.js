const render = (quizz) => {
    return {
        id: quizz._id,
        description : quizz.description,
        option_one :  quizz.option_one,
        option_two :  quizz.option_two,
        option_three :  quizz.option_three,
        option_four :  quizz.option_four,
        option_correct :  quizz.option_correct,
        modules: quizz.modules

    }
}

const renderMany = (quizz) => {
    return quizz.map((quizz) => render(quizz))
}
module.exports.render = render
module.exports.renderMany = renderMany