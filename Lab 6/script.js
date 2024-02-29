window.onload = () => {
  fetchComments();
}


const fetchComments = () => {
    const commentsContainer = document.getElementById('comments');
    const apiUrl = 'https://jsonplaceholder.typicode.com';

    fetch(apiUrl + "/comments")
      .then(response =>  response.json())
      .then((data) => {
        console.log("Data: ", data)
        data.slice(0,10).forEach((comment) => {
          const commentElement = document.createElement('div');
          commentElement.classList.add('comment');
          commentElement.innerHTML = `
           <i class="fas fa-user comment-avatar"></i>
           <div class="comment-text">
           <p class="comment-email">${comment.email}</p>
           <p class="comment-body">${comment.body}</p>
           </div>
          `;
          commentsContainer.appendChild(commentElement);
        });
      })
      .catch((error) => {
        console.error('Fetch Error:', error);
    });
}




const addComment = (commentEmail, commentBody, postId) => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/';

  fetch(apiUrl + "/comments", {
    method: 'POST',
    body: JSON.stringify({
      title: commentEmail,
      body: commentBody,
      userId: postId 
    }),
    headers: {
      'Content-type': 'application/json'
    },
  })
    .then(response => response.json())
    .then((data) => {
      responseContainer.innerHTML = `New comment Created with ID: ${data.id}`;
    })
    .catch((error) => {
      console.error('Fetch Error:', error);
  });
}




