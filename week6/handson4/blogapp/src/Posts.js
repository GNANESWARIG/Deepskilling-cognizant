import { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  // 6. Load posts using Fetch API
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        const postObjects = data.map(post => new Post(post.userId, post.id, post.title, post.body));
        this.setState({ posts: postObjects });
      })
      .catch(error => {
        this.setState({ error: error.message });
        alert("Error: " + error.message);
      });
  }

  // 7. Call loadPosts on component mount
  componentDidMount() {
    this.loadPosts();
  }

  // 9. Catch any rendering errors
  componentDidCatch(error, info) {
    alert('Something went wrong: ' + error);
  }

  // 8. Render posts
  render() {
    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id} style={{ marginBottom: '20px' }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
