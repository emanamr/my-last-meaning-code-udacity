
import "regenerator-runtime/runtime";
import { checkUrl } from "./viewData";
import { viewData } from "./viewData";
const analysis = async () => {
    let url = document.getElementById('url').value;
    
    console.log(url)
    if (checkUrl(url)) {
        console.log(checkUrl(url))
        //post("http://localhost:8008/articalurl",{url:url})
        const res = await fetch("http://localhost:8009/articalurl", {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data:url})
        })
        .then(result => result.json())
        .then((data) => {
            console.log(data)
            return viewData(data)
        })
        .catch(error => {
            console.log(error);
        })

    } else {
        alert('please enter a valid URL and try again');
    }

}



export{
    analysis
}
    










