const rides = [
    {
        name: "at1",
        height: 130,
    },
    {
        name: "at2",
        height: 90,
    },
    {
        name: "at3",
        height: 95,
    },
];

var slideAction = function(userHeight) {
let value = parseInt(userHeight);

for (let i=0; i<3; i++) {
    if (rides[i].height > value) {
        document.getElementById(rides[i].name).style.display = "none";
    }
    else if (rides[i].height <= value) {
        document.getElementById(rides[i].name).style.display = "grid";
    }
};
}
