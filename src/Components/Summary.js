import React from "react";


class Summary extends React.Component{
    render(){
        return(

            <div className="border-2 border-blue-500">
                {/* <label for='summary'>Summary:</label> */}
                <input id="name" type="text" placeholder="write your summary here"></input>
            </div>
            
        )
    }
}

export default Summary;