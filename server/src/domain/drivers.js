class Drivers {
  constructor(id, name, lastname, dob, nationality, number, image, code, teams, description) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.dob = dob;
    this.nationality = nationality;
    this.number = number;
    this.image = image;
    this.code = code;
    this.teams = teams;
    this.description = description;
  }
}

module.exports = new Drivers();