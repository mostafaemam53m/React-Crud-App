import React from "react";
const CourseForm = (props) => {
    return (
        // main form to add new course
        <form onSubmit={props.updatecours}>
            <input type="text" value={props.currentvalue} onChange={props.addCours}></input>
            <input type="submit" value="add"></input>
        </form>
    )
}
export default CourseForm;