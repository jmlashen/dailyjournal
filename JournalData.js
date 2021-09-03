/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "08/31/2021",
        concept: "api",
        entry: "Introduced api's and .json server",
        mood: "Good"
    },
    {
        id: 2,
        date: "09/01/2021",
        concept: "Postman and dbDigagram",
        entry: "I managed to keep up all day but looking forward to more practice with these concepts",
        mood: "Good"
    },
    {
        id: 3,
        date: "09/02/2021",
        concept: "Data Manager",
        entry: "New Concept",
        mood: "Excited"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}
