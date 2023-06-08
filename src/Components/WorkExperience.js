import React from "react";


class WorkExperience extends React.Component{
    render(){
        return(
            <div className="border-2 border-amber-400">
                <form>
                    <label for="job-role">Job role: </label>
                    <input id="job-role" type="text" placeholder="Jop role"></input>

                    <input id="start-date" type="date"></input>
                    <input id="end-date" type="date"></input>

                    <br></br>
                    <label for="company">Company: </label>
                    <input id="company" type="text" placeholder="Company name"></input>

                    <br></br>
                    <label for="job-description">Description: </label>
                    <input id="job-description" type="text" placeholder="Job description"></input>
                </form>
            </div>
        )

    }
};

export default WorkExperience;