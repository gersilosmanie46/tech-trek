/* sophisticaed_program.js */

// This code is a complex program that simulates a social networking website.
// It includes features like user registration, login, posting and commenting on posts,
// friend requests, and messaging.
// The purpose of this code is to demonstrate advanced JavaScript functionality and programming skills.

// Define the User class
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.posts = [];
    this.friends = [];
    this.friendRequests = [];
    this.messages = [];
  }

  createPost(content) {
    const post = new Post(content);
    this.posts.push(post);
  }

  addFriend(user) {
    this.friends.push(user);
  }

  sendFriendRequest(user) {
    user.friendRequests.push(this);
  }

  acceptFriendRequest(user) {
    const index = this.friendRequests.indexOf(user);
    if (index > -1) {
      this.friendRequests.splice(index, 1);
      this.friends.push(user);
      user.friends.push(this);
    }
  }

  sendMessage(user, content) {
    const message = new Message(user, content);
    this.messages.push(message);
    user.messages.push(message);
  }
}

// Define the Post class
class Post {
  constructor(content) {
    this.content = content;
    this.comments = [];
  }

  addComment(user, content) {
    const comment = new Comment(user, content);
    this.comments.push(comment);
  }
}

// Define the Comment class
class Comment {
  constructor(user, content) {
    this.user = user;
    this.content = content;
  }
}

// Define the Message class
class Message {
  constructor(sender, content) {
    this.sender = sender;
    this.content = content;
  }
}

// Usage example

// Create users
const user1 = new User("user1", "password1");
const user2 = new User("user2", "password2");
const user3 = new User("user3", "password3");

// User 1 creates a post
user1.createPost("Hello world!");

// User 2 comments on the post
user2.addComment(user1, "Nice to meet you!");

// User 3 sends friend requests to both User 1 and User 2
user3.sendFriendRequest(user1);
user3.sendFriendRequest(user2);

// User 1 accepts User 3's friend request
user1.acceptFriendRequest(user3);

// User 1 sends a message to User 2
user1.sendMessage(user2, "Let's meet up!");

// Output some information about users, posts, and messages
console.log("User 1: ", user1);
console.log("User 2: ", user2);
console.log("User 3: ", user3);
console.log("User 1's posts: ", user1.posts);
console.log("User 2's posts: ", user2.posts);
console.log("User 3's posts: ", user3.posts);
console.log("User 1's messages: ", user1.messages);
console.log("User 2's messages: ", user2.messages);
console.log("User 3's messages: ", user3.messages);

// ... More lines of code can be added to further enhance the functionality of the social networking simulation