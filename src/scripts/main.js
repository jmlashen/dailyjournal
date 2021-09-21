import { getJournalEntries, createJournalEntry, deleteEntry } from "./data/DataManager.js"
import { EntryListComponent } from "./feed/JournalEntryList.js"
import { PostEntry } from "./feed/JournalEntry.js";






  const showPostEntry = () => { 
    //Get a reference to the location on the DOM where the nav will display
    const entryElement = document.querySelector(".entryForm");
    entryElement.innerHTML = PostEntry();
  }

  
  
const showJournalEntries = () => {
    
    // getJournalEntries came from data manager 
    // and we invoked it here below
    // .then gives an order to the process 
    // (get journalEntries first and then setting the return to allEntries = taco stiatuion and is the respponse of the previous)
    
    getJournalEntries().then(allEntries => EntryListComponent(allEntries))
    // only doing one thing – don't need {}
}

const applicationElement = document.querySelector(".entryForm")
const entryLogElement = document.querySelector("#entryLog")

applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "newPost__submit") {
        console.log("literallyanything")
    //collect the input values into an object to post to the DB
      
      const entry = document.querySelector("textarea[name='journalEntry']").value
      const concept = document.querySelector("input[name='conceptsCovered']").value
      const mood = document.querySelector("select[name='mood']").value
      //we have not created a user yet - for now, we will hard code `1`.
      //we can add the current time as well
      const journalEntryObject = {
        //   has to match your objects valued pairs in datamanger
                // no id cause JSON grabs that
          date: Date.now(),
          concept: concept,
          entry: entry,
          mood: mood
      }

  
    // be sure to import from the DataManager
        createJournalEntry(journalEntryObject)
        .then(dbResponse => {
            showJournalEntries()
            // invoke clear function here
        });
    }
  })

  entryLogElement.addEventListener("click", event => {
    event.preventDefault();
    console.log(event.target.id)
    if (event.target.id.startsWith("delete")) {
      const postId = event.target.id.split("--")[1];
      deleteEntry(postId)
        .then(response => {
          showJournalEntries();
        })
    }
  })

  
showJournalEntries();
showPostEntry();

  


