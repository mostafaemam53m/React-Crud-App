import React, { Component, Fragment } from "react";

class CouseList extends Component {

    state = {
        isEdit: false
    }
    // this function work as swich work when click on edit button or on click on update button
    togole = () => {
        let mo = this.state.isEdit
        this.setState({
            isEdit: !mo
        })
    }
    // this function work whan add new course and contain name of course and two button
    renderCourse = () => {
        return (
            <li>
                {/* name of course */}
                <span>{this.props.course.name}</span>
                <button onClick={() => { this.togole() }}>Edite course</button>

                <button onClick={() => { this.props.deletcourse(this.props.index) }} >delet</button>
            </li>
        )
    }

    getupdatevalue = (e) => {
        e.preventDefault();
        // console.log(this.props.index);
        // console.log(this.input.value);

        this.togole();
        // this function thate get the new value after edite and send it to state in App.js file
        this.props.EditValue(this.input.value, this.props.index)




    }
    // this function thate appear form on click on edite button and disapear it on press on update button
    renderEdit = () => {
        let allcourses = this.props.allcourses;
        let index = this.props.index;


        return (
            <form onSubmit={this.getupdatevalue}>
                {/* atrbute ref is work to get new value fron input and give it  to input value */}
                <input type="text" defaultValue={allcourses[index].name} ref={(v) => { this.input = v }} ></input>
                <input type="submit" value="update course" ></input>
            </form>
        )
    }


    render() {
        let isEdit = this.state.isEdit;
        return (
            <Fragment>

                {isEdit ? this.renderEdit() : this.renderCourse()}
            </Fragment>
        )
    }
}
export default CouseList;