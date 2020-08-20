const form = document.getElementById("form");
const Id = x => document.getElementById(x);
const cargarData = async (evnt) => {
    evnt.preventDefault();    
    const PostId = Id("postId"),
          Cid = Id("id"),
          name = Id("name"),
          email = Id("email"),
          body = Id("body");

    try {
        const ResponseData = await fetch("https://jsonplaceholder.typicode.com/comments");
        const responseJson = await ResponseData.json();

        if (responseJson !== "") {
            PostId.value = responseJson[0]['postId'];
            Cid.value = responseJson[0]['id'];
            name.value = responseJson[0]['name'];
            email.value = responseJson[0]['email'];
            body.value = responseJson[0]['body'];            
        } else {
            alert("Datos vacios");
        }
        
    } catch (er) {
        console.error(er);
    }    
}

form.addEventListener("submit", cargarData);