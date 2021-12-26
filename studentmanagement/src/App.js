import react from "react";
import Student from "./Student";

class App extends react.Component {
  state = {
    students: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        isEnable: true,
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        isEnable: true,
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        isEnable: false,
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        isEnable: true,
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        isEnable: true,
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        isEnable: true,
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        phone: "210.067.6132",
        isEnable: false,
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        isEnable: true,
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        isEnable: true,
      },
    ],
  };
  disable = (id) => {
    debugger;
    let filteredStudents = this.state.students.filter((student) => {
      return student.id != id;
    });
    this.setState({
      students: filteredStudents,
    });
  };
  render() {
    return (
      <div className="App">
        <h2 className="text-center">Active Users</h2>
        <div className="d-g bold">
          <div>Name</div>
          <div>Username</div>
          <div>Email</div>
          <div></div>
        </div>
        {this.state.students.filter((student) => student.isEnable).length ? (
          this.state.students
            .filter((student) => student.isEnable)
            .map((student, i) => {
              return (
                <Student
                  student={student}
                  key={student.id}
                  disable={this.disable}
                />
              );
            })
        ) : (
          <div className="text-center">Empty</div>
        )}
      </div>
    );
  }
}

export default App;
