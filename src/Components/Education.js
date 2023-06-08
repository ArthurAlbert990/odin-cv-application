import React from "react";


class Education extends React.Component{
    render(){
        return(
            <div className="border-2 border-amber-400">
                <form>
                    <label for="institution">Institution: </label>
                    <input id="institution" type="text" placeholder="institution name"></input>

                    <input id="start-date" type="date"></input>
                    <input id="end-date" type="date"></input>

                    <br></br>
                    <label for="degree">Degree: </label>
                    <input id="degree" type="text" placeholder="degree"></input>
                </form>
            </div>
        )
    }
}

export default Education;