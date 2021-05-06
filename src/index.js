// write your code here

const url = 'http://localhost:3000'


// //******************First Deliverable******************/

fetch(`${url}/images/1`)
    .then(response => response.json())
    .then(data => renderImageCard(data))
   
    function renderImageCard(data) {

        const imageTitle = document.querySelector('h2.title')
        imageTitle.textContent = data.title

        const img = document.querySelector('img.image')
        img.src = data.image

        const commentsUl = document.querySelector('ul.comments')
        data.comments.forEach(commentObject => {
            const li = document.querySelector('li')
            li.textContent = commentObject.content
            commentsUl.append(li)
        })

        const imageLikes = document.querySelector('span.likes')
        imageLikes.textContent = `${data.likes} likes`
        
    renderImageCard
    }


// //******************Second Deliverable******************/

const likesButton = document.querySelector('button.like-button')
    
likesButton.addEventListener('click', e => { e
        const likeSpan = document.querySelector('span.likes')
        const newLikes = parseInt(likeSpan.textContent) + 1
   
    fetch(`${url}/images/1`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ likes: newLikes})
    })
        .then(response => response.json())
        .then(updatedLikesObject => {
            likeSpan.textContent = `${updatedLikesObject.likes} Likes`
        })
})

//likes still were not persisting in the web browser.
// spent some time reviewing videos, searching the web, and talked with Liz,
// but still couldn't figure out why they disapear on web refresh.

// //******************Third Deliverable******************/

const commentForm = document.querySelector('form.comment-form')

commentForm.addEventListener('submit', e => {
    e.preventDefault()
    
    const newCommentInput = e.target.comment.value

    const li = document.createElement('li')
    li.textContent = newCommentInput

    const commentsUl = document.querySelector('ul.comments')
    commentsUl.append(li)

    e.target.reset()
})