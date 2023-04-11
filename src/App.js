import React, { Component } from 'react';
import './App.css';
import CourseForm from './component/coursform';
import CouseList from './component/courslist';

class App extends Component {
  state = {
    courslist: [
      { name: "Html" },
      { name: "JQuery" },
      { name: "Css" }
    ],
    currentvalue: ""
  }
  // func to get new value  of course from input 
  addCours = (e) => {

    // console.log(e.target.value);
    this.setState({
      currentvalue: e.target.value
    })



  }
  updatecours = (e) => {
    e.preventDefault();

    let CouseList = this.state.courslist;
    let currentvalue = this.state.currentvalue;
    // if condition to not add empty value from input type text of form
    if (currentvalue !== "") {
      CouseList.push({ name: currentvalue });
      this.setState({
        courslist: CouseList,
        currentvalue: ""
      })

    }
  }
  EditValue = (newValue, index) => {
    let allcourses = this.state.courslist;
    let updatecour = allcourses[index];
    updatecour['name'] = newValue
    console.log(allcourses[index].name);
    this.setState({
      courslist: allcourses
    })


  }
  // delet course
  deletcourse = (index) => {
    console.log(index)
    let allcourses = this.state.courslist;
    allcourses.splice(index, 1);
    this.setState({
      courslist: allcourses
    })

  }
  noCoursefound = () => {
    if (this.state.courslist.length == 0) {
      return (
        <div className="no_found_course">
          <p>not found any course</p>
        </div>
      )
    }
  }
  render() {
    const allcourses = this.state.courslist;
    const mainProcess = allcourses.map((ele, index) => {
      return <CouseList course={ele} key={index} deletcourse={this.deletcourse} index={index} allcourses={this.state.courslist} EditValue={this.EditValue} />
    })
    return (
      <div className="App">
        <h2>Add course</h2>
        <CourseForm addCours={this.addCours} updatecours={this.updatecours} currentvalue={this.state.currentvalue} />
        <ul>
          {mainProcess}
        </ul>
        {this.noCoursefound()}


      </div>
    );
  }

}

export default App;
