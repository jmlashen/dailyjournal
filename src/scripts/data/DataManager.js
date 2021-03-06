
// this function fetches all the entries 
export const getJournalEntries = () => {
    return fetch("http://localhost:8089/journal-entries")
        .then(response => response.json())
}

// this is where fucntions hit the api
// this is where this function fetches our data 
// from JSON and translates it in a way that JS understands it.


export const createJournalEntry = postObj => {
    return fetch("http://localhost:8089/journal-entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
  
    })
        .then(response => response.json())
  }

  export const deleteEntry = postId => {
    return fetch(`http://localhost:8089/journal-entries/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
  
    })
        .then(response => response.json())
        
  }