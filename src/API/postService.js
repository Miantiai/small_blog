import axios from 'axios';

export class postService {
  static async getAllPosts() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
  }
}
