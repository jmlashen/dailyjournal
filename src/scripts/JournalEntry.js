/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p>${entry.date}</p>
            <p>${entry.concept}</p>
            <p>${entry.entry}</p>
            <p>${entry.mood}</p>
        </section>
    `
}


export const PostEntry = () => {
    return `
    <div class="newPost">
    <div> 
   

    <div>
    <fieldset>
    <label for="conceptsCovered">Concepts Covered</label>
    <input type="text" name="conceptsCovered" id="conceptsCovered">
    </fieldset>
    </div>

    <div>
    <fieldset>
    <label for="journalEntry">Journal Entry</label>
    <textarea id="journalEntry" name="journalEntry" cols="20" rows="1"></textarea>
    </fieldset>
    </div>

    <div>
    <fieldset>
    <label for="mood">Mood</label>
    <select name="mood" id="mood">
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="tired">Tired</option>
        <option value="soggy">Soggy</option>
        <option value="excited">Excited</option>
        <option value="bored">Bored</option>
    </select>
    </fieldset>
    </div>
    <button id="newPost__submit">Save</button>
    <button id="newPost__cancel">Cancel</button>
    </div>
    `
}

