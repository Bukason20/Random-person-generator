document.getElementById("button").addEventListener("click", generateRandomUser)

function generateRandomUser(){
    const xhr = new XMLHttpRequest()

    xhr.open("GET", "https://randomuser.me/api/", true)

    xhr.onload = function(){
        if(xhr.status === 200){
            const data = JSON.parse(xhr.responseText);
            const results = data.results
            console.log(results)

            results.forEach((result) => {
                document.querySelector(".person-details").innerHTML =
                `
                    <div class = "person-img">
                        <img src = "${result.picture.large}">
                    </div>

                    <div class = "person-data">
                        <div class = "person-bio">
                            <img src = "icons/user.png" class = "icon">
                            <p>Name : <span class = "bg-gray">${result.name.first}</span></p>
                        </div>
                        
                        <div class = "person-bio">
                            <img src = "icons/user.png" class = "icon">
                            <p>Last Name : <span class = "bg-gray">${result.name.last}</span></p>
                        </div>
                        

                        <div class = "person-bio">
                            <img src = "icons/location.png" class = "icon">
                            <p>Location : <span class = "bg-gray">${result.location.country}</span></p>
                        </div>


                        <div class = "person-bio">
                            <img src = "icons/phone-call.png" class = "icon">
                            <p>Phone : <span class = "bg-gray">${result.phone}</span></p>
                        
                        </div>



                        <div class = "person-bio">
                            <img src = "icons/email.png" class = "icon">
                            <p>Email : <span class = "bg-gray">${result.email}</span></p>
                        </div>
                        
                    </div>
                ` 
            })

            
            
            
        }
        
    }

    xhr.send()
}