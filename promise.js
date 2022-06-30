const posts = [
    {
        name: "Neko", 
        age: 5, 
        weight: 3.4
    }, 
    {
        name: "Inu", 
        age: 7, 
        weight: 10.3
    }, 
    {
        name: "Orochi", 
        age: 15, 
        weight: 247.9
    }
];

const getPosts = () => {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<p>${index}: {Name: ${post.name}, Age: ${post.age}, Weight: ${post.weight}}</p>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};

const createPosts = (post, callback) => {
    setTimeout(() => {
        posts.push(post); // load in 2s
        callback(); // load in 1s but wait for posts.push() to finish => 3s in total
    }, 2000);
};

createPosts({"name": "orochi", "age": 2, "weight": 2.4}, getPosts);