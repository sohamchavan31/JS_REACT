const {ImageKit} = require("@imagekit/nodejs")

let ImageKitClient;

function getClient() {
    if (!ImageKitClient) {
        ImageKitClient = new ImageKit({
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
        })
    }
    return ImageKitClient
}

async function uploadFile(file) {
    const result = await getClient().files.upload({
        file,
        fileName:"music_" + Date.now(),
        folder: "sohrex_backend/music"
    })

    return result

}

async function deleteFile(fileId) {
    await getClient().files.delete(fileId)
}

module.exports = {uploadFile, deleteFile}