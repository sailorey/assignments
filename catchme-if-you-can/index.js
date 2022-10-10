try {
    function sum(x, y){
        var add = x + y
        
         if(add === 2){
        
       console.log("2 is equal to 2")
      }
      else {
        throw new Error("sum is Not equal to 2")
      
      }return add
      }
      sum ( 1, 1)
  }
  catch(err) {
      console.log(err)
  
  }  
  
    //2
    
  var user = {username: "sam", password: "123abc"};
  try{
    
    function login(username, password){
      if(username === user.username && password === user.password){
         console.log("Username & password Match")
      } else{
        throw Error("Username & password don't match")
      }
    }
    login("sam", "123abc")
  }
  
  catch(err){
    console.log(err)
  }
  