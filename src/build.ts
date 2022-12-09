import * as fs from 'fs'
import * as path from 'path'
import template from './template'

const content = JSON.stringify(template(), null, '\t')
fs.writeFileSync(path.join(process.cwd(), `/fosk.json`), content)
console.log(`Generate theme`)
