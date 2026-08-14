// BACKEND\06-proj2\src\controllers\music.controller.js
const mongoose = require('mongoose')
const musicModel = require('../models/music.model')
const albumModel = require('../models/album.model')
const { uploadFile, deleteFile } = require("../services/storage.service")

const jwt = require('jsonwebtoken')

async function createMusic(req, res) {

    const { title } = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString('base64'))

    let music;
    try {
        music = await musicModel.create({
            uri: result.url,
            title,
            artist: req.user.id,
        })
    } catch (error) {
        await deleteFile(result.fileId)
        throw error
    }

    res.status(201).json({
        message: "Music created successfully",
        music: {
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist,
        }

    })
}

async function createAlbum(req, res) {

    const { title, musicIds = [] } = req.body;

    if (!musicIds.every(id => mongoose.Types.ObjectId.isValid(id))) {
        return res.status(400).json({ message: "One or more musicIds are invalid" })
    }

    const existingCount = await musicModel.countDocuments({ _id: { $in: musicIds } })

    if (existingCount !== musicIds.length) {
        return res.status(400).json({ message: "One or more musicIds are invalid" })
    }

    const album = await albumModel.create({
        title,
        artist: req.user.id,
        musics: musicIds,
    })

    res.status(201).json({
        message: "Album createdsuccessfully",
        album: {
            id: album._id,
            title: album.title, 
            artist: album.artist,
            musics: album.musics
        }
    })
}

async function getAllMusic(req, res) {
    const music = await musicModel.find().populate("artist")

    res.status(200).json({
        message: "Music fetched successfully",
        music
    })
}

async function getAllAlbums(req, res) {
    const albums = await albumModel.find().select("title artist").populate("musics")
    res.status(200).json({
        message : "Album fetched successfully",
        albums
    })
}

async function getAlbumById(req, res){
    const albumId = req.params.albumId;
    const album = await albumModel.findById(albumId).populate("artist", "username email").populate("musics")
     
    return res.status(200).json({
        message: "album fetched successfully",
        album:album
    })
}

module.exports = { createMusic, createAlbum, getAllMusic, getAllAlbums, getAlbumById }
