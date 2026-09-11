import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import {useState} from "react";
    console.log("Community Page");
const Community: NextPage = () => {
    const [title, setTitle] = useState <string>("Community Page");
    return (
    <div> 
        Community {" "} 
        <button onClick={() => alert("Hello MIT!")} style={{margin: "15px"}}> Press Me

        </button>
        </div> 
        ); 
}; 

export default withLayoutBasic(Community);
