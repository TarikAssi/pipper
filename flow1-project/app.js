import fetch from "cross-fetch";


const callApi = async () => {
    let result = await fetch('http://localhost:3306', { method: "Post" });
    result = await result.json();
    console.log(result);
}

function add(a, b) {
    return a+b;
}

add(1,4);

callApi();