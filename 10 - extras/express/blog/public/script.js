const postsDiv = document.getElementById('posts');
const form = document.getElementById('newPostForm');

// Hämta och visa alla inlägg
async function fetchPosts() {
  const response = await fetch('/posts');
  const posts = await response.json();
  postsDiv.innerHTML = posts
    .map(post => `<div><h3>${post.title}</h3><p>${post.content}</p></div>`)
    .join('');
}

// Lägg till nytt inlägg
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  const response = await fetch('/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content }),
  });

  if (response.ok) {
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    fetchPosts();
  }
});

// Kör när sidan laddas
fetchPosts();
