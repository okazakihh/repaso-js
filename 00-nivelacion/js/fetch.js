fetch("https://jsonplaceholder.typicode.com/users/1")
.then((Response) => 
     Response.json())
  .then((data) => {
    console.log(data);
})