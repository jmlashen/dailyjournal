/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
{/* <p>${entry.date}</p> */}
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            
            <aside class="entryText">
            <p>${entry.mood}</p>
            <p>${entry.concept}</p>
            <p>${entry.entry}</p>
            
            </aside>
            
            <div id="buttonMove"><button class="deleteButton" id="delete--${entry.id}">Delete</button></div>
        </section>

    `
}


export const PostEntry = () => {
    return `
    <div class="newPost">
    <div> 
   
    <h2>What was today's concept?</h2>
    <div>
    <fieldset class="fSConcepts">
    <label for="conceptsCovered"></label>
    <input class="inputFieldConcepts" type="text" name="conceptsCovered" id="conceptsCovered">
    </fieldset>
    </div>

    <h2>What did you learn?</h2>
    <div>
    <fieldset class="fSEntry">
    <label for="journalEntry"></label>
    <textarea class="textAreaEntry" id="journalEntry" name="journalEntry" cols="20" rows="1"></textarea>
    </fieldset>
    </div>

    <h2>What was your mood today?</h2>
    <div>
    <fieldset>
    <label for="mood"></label>
    <select class="dropDown" class="selectDropDown" name="mood" id="mood">
        <div>
        <option value="Mood: happy">Happy</option>
        <option value="Mood: sad">Sad</option>
        <option value="Mood: tired">Tired</option>
        <option value="Mood: soggy">Soggy</option>
        <option value="Mood: excited">Excited</option>
        <option value="Mood: bored">Bored</option>
        </div>
    </select>
    </fieldset>
    </div>
    
    <div class="saveCancelButtons">
    <button class="saveButton" id="newPost__submit">Save</button>
    <button class="cancelButton" id="newPost__cancel">Cancel</button>
    </div>
    


    </div>
    `
}

