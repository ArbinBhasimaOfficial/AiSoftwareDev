import fs from "fs/promises"

const Start = 50
const max = 100


function zionPartOne(rotations: string[]){
    let current = Start
    let password = 0
    rotations.forEach((rotations) => {
        const direction = rotations.slice(0, 1)
        const value = Number(rotations.slice(1))
        // console.log({direction, value})
        if (direction === "R"){
            current = (current + value) % max 
        } else if (direction === "L") {
            current = (current - value) % max 
            if (current < 0){
                current = max + current
            }
        }

        if(current === 0){
            password += 1
        }

    })

    // 979 too low
    console.log(password)
    // 1165 is the correct answer 
}

function zionPartTwo(rotations: string[]){
    let current = Start
    let password = 0
    rotations.forEach((rotations) => {
        const direction = rotations.slice(0, 1)
        const value = Number(rotations.slice(1))
        console.log({direction, value})
        if (direction === "R"){
            current = (current + value) % max 
        } else if (direction === "L") {
            current = (current - value) % max 
            if (current < 0){
                current = max + current
            }
        }

        if(current === 0){
            password += 1
        }

    })
    console.log(password)
}

const input = await fs.readFile("../input.txt", "utf-8")


// zionPartOne(input.split("\n"))

zionPartTwo(input.split("\n"))