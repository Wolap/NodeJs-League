import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const getChampions = (req, res) => {
    // prisma.tableName.cequeJeVeuxFaire()
    prisma.champions.findMany()
    .then(champions => {
        res.json(champions)
    })
    .catch(error => {
        res.json(error)
    })
}

const getChampion = (req, res) => {
    let id = Number(req.params.id)
    prisma.champions.findUnique({
        where: {
            id: id
        }
    })
    .then(champion => {
        res.json(champion)
    })
    .catch(error => {
        res.json(error)
    })
}

const createChampion = (req, res) => {
    let champion = req.body
    prisma.champions.create({
        data: {
            nom: champion.nom,
            type: champion.type
        }
    })
    .then(newChampion => {
        res.json(newChampion)
    })
    .catch(error => {
        res.json(error)
    })
}

const updateChampion = (req, res) => {
    let id = Number(req.params.id)
    let champion = req.body

    prisma.champions.update({
        where: {
            id: id
        },
        data: {
            nom: champion.nom,
            type: champion.type
        }
    })
    .then(updatedChampion => {
        res.json(updatedChampion)
    })
    .catch(error => {
        res.json(error)
    })
}

const deleteChampion = (req, res) => {
    let id = Number(req.params.id)

    prisma.champions.delete({
        where: {
            id: id
        }
    })
    .then(deletedChampion => {
        res.json(deletedChampion)
    })
    .catch(error => {
        res.json(error)
    })
}

export { getChampions, getChampion, createChampion, updateChampion, deleteChampion}