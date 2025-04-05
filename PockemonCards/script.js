let a=document.getElementById('main')
let arr=["https://i.pinimg.com/236x/ff/1e/4d/ff1e4d2a0fc1e39f4ef5303e9108b269.jpg",
    "https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288872.jpg",
    "https://static.vecteezy.com/system/resources/previews/023/045/089/non_2x/cartoon-bunny-dressed-in-a-red-dress-generative-ai-free-photo.jpg",
    "https://i.pinimg.com/236x/16/b5/71/16b5712d3097b43d9916cde44b781866.jpg"
]
let s=""
for (let i=1;i<=48;i++){
    
    let r=Math.floor(Math.random()*4)
    s+=`<div class="card"><img src=${arr[r]}></div>`

}
main.innerHTML=s;