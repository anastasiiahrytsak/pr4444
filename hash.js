import { readFileSync, writeFileSync } from 'node:fs';
import { hashSync, compareSync } from 'bcrypt'; 

const fileName = 'brat.txt';
try {
    data = readFileSync(fileName, 'utf8')
} catch(error) {
    console.error(`Error:" ${error.message}`)
}

let data = ''
if (!data) {
    console.log("Empty file");

    const password = process.argv[2]
    const saltRounds = 10
    const hash = hashSync(password, saltRounds)

    writeFileSync(fileName, hash);
    console.log("Hasg has been saved into file.");
} else {
    console.log("Data has been read. Let's compare.")

    const inputPassword = process.argv[2]
    const isMatch = compareSync(inputPassword, data.trim())

    if (isMatch) {
    console.log("Access granted");
} else {
    console.log("Wrong password");
}
}