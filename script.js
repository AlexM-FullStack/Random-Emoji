let btnEl = document.getElementById('btn')
let emojiEl = document.getElementById('emoji-name')

let apiKey = '26f6f88d56ace935188d45bcb98fc2a2bf0db960'
let apiURL = 'https://emoji-api.com/emojis'

let emoji = []

async function getEmoji() {
    let response = await fetch(`${apiURL}?access_key=${apiKey}`)
    let data = await response.json()
    
    for (let i=0; i<1500; i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName
        })
    }

}

getEmoji()

btnEl.addEventListener('click', () => {
    let randomNum = Math.floor(Math.random()*emoji.length)
    btnEl.innerText = emoji[randomNum].emojiName
    emojiEl.innerText = emoji[randomNum].emojiCode
})