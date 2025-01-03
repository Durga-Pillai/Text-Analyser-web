import "./Toggle.css";

export const Toggle = ({handleChange,isChecked}) => {
    return (
        <div className="toggle-conatiner">
        <input type="checkbox" 
               id="check"
               className="toggle"
               onChange={handleChange}
               checked={isChecked}
               />
         <label htmlFor="check">Dark Mode</label>      
               </div>
    );
}