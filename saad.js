function person(name, age, height){

    this.name = name;
    this.age = age;
    this.height = height;
    this.retire = yearsleft;

}

function yearsleft(){

    var numyears = 70 - this.age;
    return numyears;
}

var sadah = new person ("Mohamed sadah bah", 23, 6)
var na = new person ("COgoo", 27, 7.5)