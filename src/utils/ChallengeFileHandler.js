import { promises as fs } from 'fs'
import { challengesBaseDir } from '../config'
const BASE_DIR = challengesBaseDir

fs.mkdir(BASE_DIR, { recursive: true })

class ChallengesFileHandler {
    async create(filename, data) {
        const path = `${BASE_DIR}/${filename}`
        const fileHandle = await fs.open(path, "w")
        fileHandle.writeFile(data)
        fileHandle.close()

        return path
    }
}

export default new ChallengesFileHandler()