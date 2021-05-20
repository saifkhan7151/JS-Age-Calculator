console.log("JS Connected")

document.getElementById("age").addEventListener("click",function(){
    var birth_year= prompt("Enter Your Birth Year: ");
    var curr_Date=new Date()
    console.log(birth_year)
    console.log(curr_Date.getFullYear())
    var year_diff=curr_Date.getFullYear()-birth_year;
    console.log(year_diff)
    console.log(`Age in Days: ${year_diff*365}`)
    document.getElementById("out").innerText=`Your Current Age in Days as of "${curr_Date.getDate()}/${curr_Date.getMonth()+1}/${curr_Date.getFullYear()}" is : ${year_diff*365}`
})