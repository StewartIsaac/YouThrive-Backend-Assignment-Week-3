const dataContainer = document.getElementById('data-container');

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function displayData() {
  const users = await fetchData('https://jsonplaceholder.typicode.com/users');
  const posts = await fetchData('https://jsonplaceholder.typicode.com/posts');
  const comments = await fetchData('https://jsonplaceholder.typicode.com/comments');

  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.classList.add('card');
    userCard.innerHTML = `<h3>User: ${user.name}</h3>
                          <p>Email: ${user.email}</p>`;
    dataContainer.appendChild(userCard);
  });

  posts.forEach(post => {
    const postCard = document.createElement('div');
    postCard.classList.add('card');
    postCard.innerHTML = `<h3>Post: ${post.title}</h3>
                          <p>Body: ${post.body.slice(0, 100)}...</p>`;
    dataContainer.appendChild(postCard);
  });

  comments.forEach(comment => {
    const commentCard = document.createElement('div');
    commentCard.classList.add('card');
    commentCard.innerHTML = `<h3>Comment:</h3>
                          <p>Name: ${comment.name}</p>
                          <p>Email: ${comment.email}</p>
                          <p>Body: ${comment.body.slice(0, 100)}...</p>`;
    dataContainer.appendChild(commentCard);
  });
}

displayData();
