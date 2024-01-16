const db = require("../models");
const Quiz = db.quizzes;

//CREATE
exports.create = async (req, res) => {

    try {
        const data = await Quiz.create(req.body)
        res.json({
            message: "quiz created successsfully.",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message ,
            data: null,
        });
    }
}

// READ
exports.getAll = async (req, res) => {

    try {
        const quizzes = await Quiz.findAll()
        res.json({
            message: "quiz retrieved successsfully.",
            data: quizzes,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message ,
            data: null,
        });
    }
}

//MENGUBAH
exports.update = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        quiz.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Quizzes updated successsfully.",
            data: quiz,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "some error ocurred while retrieved quiz",
            data: null,
        });
    }
}

//MENGHAPUS
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        
        quiz.destroy()
        
        res.json({
            message: "Quizzes deleted successsfully.",
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "some error ocurred while retrieved quiz",
            data: null,
        });
    }
}

//MENGAMBIL sesuai id
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message: `Quizzes retrieved successsfully with id=${id}.`,
            data: quiz,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "some error ocurred while retrieved quiz",
            data: null,
        });
    }
}

//MENGAMBIL semua berdasarkan category
exports.getByCategoryId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            categoryId: id
        }
    })
    res.json({
        message: `Quizzes retrieved successsfully with id categoryId=${id}.`,
        data: quizzes,
        });
    }

//MENAMPILKAN berdasarkan level tertentu
exports.getByLevelId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            levelId: id
        }
    })
    res.json({
        message: `Quizzes retrieved successsfully with id levelId=${id}.`,
        data: quizzes,
        });
    }