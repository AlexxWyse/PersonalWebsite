let ACIT1620 ={
    code:"ACIT 1620",
    name:"Web Fundamental Technologies",
};
let ACIT1420 = {
    code:"ACIT 1420", 
    name:"System Administration",
};
let ACIT1515 = {
    code:"ACIT 1515", 
    name:"Scripting for IT",
};

const courseList = [
ACIT1620,
ACIT1420,
ACIT1515];

let userinput;
do {
    userinput = prompt("Enter a 4 digit code: ") 
} while (isNaN(Number(userinput)) || userinput.length !== 4);

for (let course in courseList) {
    if ((courseList[course].code).includes(userinput)) {
        console.log(`Yes, I am taking the course: ACIT ${userinput}`);
        break;
    } else  if (courseList.length-1 == course) {
        let temp = {
            code: null,
            name: null,
        };
        temp.code = userinput
        courseList.push(temp);
        console.log(courseList);
        break;
    }
}