const init = () => {
    const inputForm = document.querySelector("form") // This targets the DOM we want.

    inputForm.addEventListener("submit", (event) => { // Adds an event listener to the form.
                                                      // Event listeners require 2 callbacks: type of event as a string "submit"; and the listener, a callback (event).  
        event.preventDefault() // The (event) object that gets passed as the callback contains a method to override our form's behavior- preventDefault().
                               // This stops the page from refreshing.
        // event.target.children[1].value // This gets the value of the second element [1] from our (event) object.
                                       // event.target or e.target returns the DOM element targeted by our event,
                                       // which is the <form>.
        const input = document.querySelector("input#searchByID") // This does the same thing!
        // console.log(input.value) 
        
        fetch(`http://localhost:3000/movies/${input.value}`) // This will return any single event as long as it's a valid ID in the form.
                                                               // If you pass "http:... 300/movies/1" it will return this single object.
           .then(res => res.json())
           .then(data => {
              const title = document.querySelector("section#movieDetails h4") // This accesses the DOM and stores:
                                                                              // <section, # (the id tag), "movieDetails", and then h4 (which represents the Title.)
                                                                              // This all comes from the html section: <section id="movieDetails">
                                                                              //                                          <h4>Title</h4>
              const summary = document.querySelector("section#movieDetails p") // This pulls from the html code:
                                                                               // <section id(or #)="movieDetails">
                                                                               //   <p>Summary</p>   
              title.innerText = data.title // This changes the contents of title and summary elements
                                           // based on the returned data.
                                           // This is done by setting the innerText values to 
                                           // the appropriate calues in the data.
              summary.innerText = data.summary                                                                
           })
    })
}

document.addEventListener('DOMContentLoaded', init); // Makes sure our JS code executes when DOM is fully loaded.