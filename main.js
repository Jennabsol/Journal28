let journalEntries = []

let entryArticle = document.querySelector(".entryLog")
const uidGenerator = function* () {
    while (true) {
        let time = new Date().getTime()
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
            const random = (time + Math.random() * 16) % 16 | 0
            return (char === 'x' ? random : (random & 0x3 | 0x8)).toString(16)
        })
        yield uuid
    }
}
const journalId = uidGenerator()
const clearForm = () => {
    document.querySelector("#date").value = ""
    document.querySelector("#concept").value = ""
    document.querySelector("#entry").value = ""
    document.querySelector("#mood").value = ""
}

document.querySelector("#btn_entry").addEventListener("click", evt => {
    // evt.preventDefault()
    entryArticle.innerHTML = ""
    const journalObj = {
        date: document.querySelector("#date").value,
        concept: document.querySelector("#concept").value,
        entry: document.querySelector("#entry").value,
        mood: document.querySelector("#mood").value,
        id: journalId.next().value
    }
    journalEntries.push(journalObj)
    clearForm()
    listEntries(journalEntries)
})

entryArticle.addEventListener("click", evt => {
    if (evt.target.id.startsWith("delete")) {
        entryArticle.innerHTML = ""
        const id = evt.target.id.split("!")[1]
        console.log(id)
        const newEntries = journalEntries.filter(entry => entry.id !== id )
        journalEntries = newEntries
        listEntries(journalEntries)
    }
})

const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `<h3>${journalEntry.concept}</h3>
    <p>${journalEntry.entry}</p>
    <p>My mood for the day ${journalEntry.mood}!</p>
    <p>${journalEntry.date}</p>
    <button id="delete!${journalEntry.id}" type="button">Delete</button>
    `
}

const renderJournalEntries = (entries) => {
    return entryArticle.innerHTML += entries
}

const listEntries = (journalArray) => {
    return journalArray.forEach(entry => {
        const currentEntry = makeJournalEntryComponent(entry)
        return renderJournalEntries(currentEntry)
    });
}

listEntries(journalEntries)