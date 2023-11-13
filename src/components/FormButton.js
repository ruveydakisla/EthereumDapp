import React from "react";

const FormButton=({butonName})=>{
    return(
        <div style={{ alignItems: 'center' }}>
        <button style={{ width: '100%' }} type="submit">
          {butonName}
        </button>
      </div>
    )
}
export default FormButton;