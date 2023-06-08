//CLASS COMPONENT FOR "PersonalInfo"
import React from 'react';


class PersonalInfo extends React.Component{
    render(){
        return (
            <div className='border-2 border-green-500'>
                <form className='space-y-4 '>
                    <div>
                        <label for='name'>Name:</label>
                        <input id="name" type="text" placeholder="Full name"></input>
                        <label for='age'>Age:</label>
                        <input id='age' type='number' placeholder='Age'></input>
                    </div>
                        
                    <div>
                        <label for='address'>Address:</label>
                        <input id="address" type="text" placeholder="Address"></input>
                    </div>
                    <div>
                        <label for='email'>Email:</label>
                        <input id="email" type="text" placeholder="Email"></input>
                    </div>
                    <div>
                        <label for='cellphone'>Cellphone:</label>
                        <input id="cellphone" type="text" placeholder="Cellphone"></input>
                    </div>
                </form>
            </div>
            )
    }
}

export default PersonalInfo