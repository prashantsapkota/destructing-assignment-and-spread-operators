//Destructing Assignment

//const user ={


  //  id:5 ,
    //name:{
       // first:"Apil"
      //  last :"Tiwari"
    //},
    //profileURL :"https://hd.com/1/a.jpeg"

//};
//const id =user ['id'];
//const name =user.name;
//const profileURL =user.profileURL;

//const {id:userID,name:Username ,profileURL,message='Hello'} =user;

//const{name:{first="Prashant"}}=user;
//console.log(first);

//const date =['2021','01','02'];

//const [year,month,day] =date;
//console.log(year,month,day)

//const [year , , ,text] =['2021','01','02','abc'];
//console.log(year,text)

//Spread Operators
const planets =["Mercury" ,"Venus"];
const shadowPlanets =["Rahu" ,"Ketu"];

const allPlanets =[...planets,"Jupiter",...shadowPlanets];
console.log(allPlanets);

//const [a,b,c,d] =[1,2,3,4];
//console.log(a,b);


function add(a,b,...rest){

    var sum=0;
    sum+=a;

    for (let i=0;i<rest.length;i++){
        sum+=rest[i];

    }
    return sum;
}
    console.log(add(1,2,3,4,5,6,7))

//add(1,2,3,4)




 
 






