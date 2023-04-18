//CLASS COMPONENT FOR "PersonalInfo"
import React from 'react';


class PersonalInfo extends React.Component{
    render(){
        return (
            <div className=''>
                <form>
                    <div>
                        <label for='name'>Name:</label>
                        <input id="name" type="text" placeholder="Full name"></input>
                    </div>
                    <div>
                        <label for='age'>Age:</label>
                        <input id='age' type='number' placeholder='Age'></input>
                    </div>
                    <div>
                        <label for='address'>Address:</label>
                        <input id="address" type="text" placeholder="Address"></input>
                    </div>
                </form>
            </div>
            )
    }
}

export default PersonalInfo