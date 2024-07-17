// 2) add full_name to existing list where married Female its Mrs, unmarried female its Ms., for all male its Mr.
// example : 
// 'full_name': Ms.Maria Gomes

let customers = [
    {
       'id': 1,
       'f_name': 'Abby',
       'l_name': 'Thomas',
       'gender': 'M',
       'married': true,
       'age': 32,
       'expense': 500,
       'purchased': ['Shampoo', 'Toys', 'Book']
    },
    {
       'id': 2,
       'f_name': 'Jerry',
       'l_name': 'Tom',
       'gender': 'M',
       'married': true,
       'age': 64,
       'expense': 100,
       'purchased': ['Stick', 'Blade']
    },
    {
       'id': 3,
       'f_name': 'Dianna',
       'l_name': 'Cherry',
       'gender': 'F',
       'married': true,
       'age': 22,
       'expense': 1500,
       'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
    },
    {
       'id': 4,
       'f_name': 'Dev',
       'l_name': 'Currian',
       'gender': 'M',
       'married': true,
       'age': 82,
       'expense': 90,
       'purchased': ['Book']
    },
    {
       'id': 5,
       'f_name': 'Maria',
       'l_name': 'Gomes',
       'gender': 'F',
       'married': false,
       'age': 7,
       'expense': 300,
       'purchased': ['Toys']
    }
 ];
 
 customers.forEach(element => {
    let p1='Mr.';
    let p2='Mrs. ';
    let p3='Ms. ';
    element.Fullname=(element.f_name).concat(element.l_name);
    
    if(element.gender==='M'&&element.married===true){
        element.Fullname=p1.concat(element.Fullname)
    }
    else if(element.gender==='M'&&element.married===false){
        element.Fullname=p1.concat(element.Fullname)
    }
    else if(element.gender==='F'&&element.married===true){
        element.Fullname=p2.concat(element.Fullname)
    }
    else{
        element.Fullname=p3.concat(element.Fullname)
    }

 });

 console.log("Names of the people in this Array are: ")
 customers.forEach(element => {
     console.log(element.Fullname)
 });

 


 
