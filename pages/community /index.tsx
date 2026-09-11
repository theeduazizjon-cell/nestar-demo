import {useState} from "react";
    console.log("Community Page");
const Community = () => {
    const [title, setTitle] = useState <string>("Community Page");
    return (
    <div> 
        Community {" "} 
        <button onClick={() => alert("Hello MIT!")} style={{margin: "15px"}}> Press Me

        </button>
        </div> 
        ); 
}; 

export default Community;
