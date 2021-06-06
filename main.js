var StudentArray=[];

function submit(){
    var DisplayStudentArray=[];
       
    
        Name=document.getElementById("name1").value;
        StudentArray.push(Name);

    console.log(StudentArray);
    

    


    console.log(StudentArray);
    document.getElementById("display_name").innerHTML=(StudentArray);
    
}

function show(){
    var DisplayStudentArray=[];
    ArrayLength=StudentArray.length;

    for(var k=0;k<ArrayLength;k++)
    {
        DisplayStudentArray.push("<h4>"+StudentArray[k]+"</h4>");
    }

    
    
    removecommas=DisplayStudentArray.join(" ");
    document.getElementById("p1").innerHTML=(removecommas);
}

function sorting(){
    StudentArray.sort();
    DisplayStudentArray=[];
    ArrayLength=StudentArray.length;

    for(var k=0;k<ArrayLength;k++)
    {
        DisplayStudentArray.push("<h4>"+StudentArray[k]+"</h4>");
    }
    removecommas=DisplayStudentArray.join(" ");
    document.getElementById("sorted").innerHTML=(removecommas)
}

function searching(){
    ArrayLength=StudentArray.length;
    s=document.getElementById("s1").value;
    found=0;
    for(f=0; f<ArrayLength; f++){
        if(s==StudentArray[f]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found "+found+"time/s";
}