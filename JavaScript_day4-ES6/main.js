
const obj = {
    name : "Santhoshkumar Elumalai",
    Date_of_birth : "22-09-1994",
    Age : 29,
    _10th_graduation_year : 2010,
    _10th_graduation_grade_percentage : "89%",
    _12th_graduation_year : 2012,
    _12th_graduation_grade_percentage : "91.5%",
    Degree : "B.Tech",
    Degree_course : "Mechatronics",
    Type_of_degree : "Under graduate",
    Degree_completion_year : 2017,
    Degree_graduation_grade_percentage : "89.5%",
}

// for in loop

for (let key in Object.keys(obj)){
    console.log(Object.keys(obj)[key], " : ",Object.values(obj)[key]);
}

// for loop

for (let i = 0; i < Object.keys(obj).length; i++){
    console.log(Object.keys(obj)[i], " : ",Object.values(obj)[i]);
}

// for of loop

let keys = Object.keys(obj);
for (let key of keys){
    console.log(key, " : ", obj[key]);
}



