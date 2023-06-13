import React from "react";


class SubmitButton extends React.Component{
    render(){
        return (
          <button className="inline-block items-center 
          justify-center px-1 py-1 mb-2 text-base text-white bg-red-500 rounded-md
           hover:bg-red-800 sm:w-auto sm:mb-0"
           data-primary="red-400"
           data-rounded="rounded-2xl"
           data-primary-reset="{}">

            <a href="#_">EDIT</a>
          </button>
        );
    }
};

export default SubmitButton;