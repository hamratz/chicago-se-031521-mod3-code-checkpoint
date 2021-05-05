// write your code here

const url = 'http://localhost:3000'

//******************First Deliverable******************/

fetch(`${url}/images/1`)
    .then(response => response.json())
    .then(data => {
        const detailH2 = document.querySelector('h2.title')
        detailH2.textContent = data.title

        const img = document.querySelector('img.image')
        img.src = data.image

    

        const commentsUl = document.querySelector('ul.comments')

    data.comments.forEach(commentObject => {
        const li = document.querySelector('li')
        li.textContent = commentObject.content
        commentsUl.append(li)
    })
})


//******************Second Deliverable******************/

const likesDiv = document.querySelector('button.like-button')

likesDiv.addEventListener('click', event => {
    if(event.target.matches('button.like-button')) {
        
       
        const likeSpan =event.target.previousElementSibling
        const likes = parseInt(likeSpan.innerText) + 1
        likeSpan.innerText = `${likes} Likes`
        
        fetch(`${url}/images/1`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ likes })   
    })
        .then(response => response.json())
        .then(data => {
            likeSpan.innerText = `${data.likes} Likes`
    })
    }   
})


////was not able to have the likes stay on the page after refresh. not sure how to do that 

//******************Third Deliverable******************/

///ran out of time to finish the third deliverable :(

const commentForm = document.querySelector('input.comment-input')

commentForm.addEventListener('submit', event => {
    if(event.target.matches('imput.comment-input')){

    }

})