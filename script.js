let posts = [];

class Post {
  constructor(username, text) {
    this.username = username;
    this.text = text;
  }
}

// same as constructor function:

// function Post(username, text) {
//    this.username = username;
//    this.text = text;
// }

const post1 = new Post("Alekai", "this is my first post so be nice to me :)");
const post2 = new Post("egglover100", "I love eggs! It's kinda my thing.");
const post3 = new Post("EggHater9000", "i can't believe this guy");

posts.push(post1);
posts.push(post2);
posts.push(post3);

// ********** INSTRUCTIONS **********

// TODO: display all 3 posts using DOM manipulation.
// include the username as an h2 and the text as a paragraph.
// give each h2 the class "user" and each paragraph the class "post-text"

// BONUS: the h2 and paragraph should be inside a div with the class "post-user"

// TIP: create a function called displayPost that displays one post.
// then use a loop to call this function for each post in our array

function displayPost(aPost) {
  let bodyElement = document.querySelector("body");
  let divElement = document.createElement("div");
  let h2Element = document.createElement("h2");
  let pElement = document.createElement("p");
  divElement.className = "post-user";
  h2Element.className = "user";
  pElement.className = "post-text";
  h2Element.innerHTML = aPost.username;
  pElement.innerHTML = aPost.text;
  divElement.appendChild(h2Element);
  divElement.appendChild(pElement);
  bodyElement.appendChild(divElement);
}

for (let i = 0; i < posts.length; i++) {
  displayPost(posts[i]);
}
