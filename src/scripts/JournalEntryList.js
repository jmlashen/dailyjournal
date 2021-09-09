/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */

import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

export const EntryListComponent = (allEntries) => {
    // Use the journal entry data from the data module component
    // const entries = getJournalEntries()
    let journalHtmlRep = ""
    for (const entry of allEntries) {
    journalHtmlRep += JournalEntryComponent(entry)
        
    } 
    entryLog.innerHTML += journalHtmlRep
}

