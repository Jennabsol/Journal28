const journalEntries = [{
        date: "07/24/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Ok"
    },
    {
        date: "06/24/2018",
        concept: "objects",
        entry: "We learned that objects are neurotic.",
        mood: "happy"
    },
    {
        date: "05/24/2018",
        concept: "for loops",
        entry: "We learned that for loops are annoying.",
        mood: "Mad"
    }
]

let entryArticle = document.querySelector(".entryLog")

const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `<h3>${journalEntry.concept}</h3>
    <p>${journalEntry.entry}</p>
    <p>My mood for the day ${journalEntry.mood}!</p>
    <p>${journalEntry.date}</p>`
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