document.getElementById("frm").addEventListener("submit",(e)=>{
    e.preventDefault()
    const username=document.getElementById("username").value;
    const email=document.getElementById("email").value;
    console.log(e.target);
    const data = new FormData(e.target)
    console.log(data);
    // userData=JSON.stringify({username,email})
    fetch("http://localhost:3000/api/upload",{
        method:"POST",
        body:data
    }).then(async(res)=>{
        console.log(res);
        const data = await res.json()
        if(res.status==201){
            alert(data.msg)

        }
        else{
            alert(data.msg)


        }
        
    }).catch((error)=>{
        console.log(error);
        
    })
    

    

})



async function getUsers() {
    const res= await fetch('http://localhost:3000/api/getUsers')
    const  users =await res.json();
    console.log(users);

    str=``
    users.map((user)=>{
        console.log(user.profile.filename);

        str+=`
        <div class="card" style="width: 10rem;height: 10rem;">
    <div class="images" style="width: 100%;height: 705;">\
        <img src="http://localhost:3000/api/image/${uesr.Profile.filename}" style="width: 100%;height: 100%;" alt="">
    </div>
    <h3>${user.username}</h3>
    <p>${user.email}</p>
</div>
        
        `
    })
    document.getElementById("cards").innerHTML=str
    
}