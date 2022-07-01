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

const createPosts = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post); // load in 2s
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject("Error: Something went wrong");
            }
        }, 2000);
    });
};

async function init() {
    await createPosts({"name": "orochi", "age": 2, "weight": 2.4});
    getPosts();
}

init();

async function fetchUsers() {
    const res = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    console.log(res);
}

fetchUsers();