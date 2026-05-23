let hp=0
let cp=0
function iswin(h,c)
{
    if((h=="rock"&&c=="scissor")||(h=="paper"&&c=="rock")||(h=="scissor"&&c=="paper"))
        return true
    else 
        return false
}
let random=()=>Math.floor(3*Math.random())
function algo(h,c)
{
    if(h==c)
    {
        alert("draw")
        return
    }
    if(iswin(h,c))
            {
                hp+=1
                let t=document.querySelector(".human")
                t.innerHTML=`${hp}:human` 
                alert(`human wins with ${h} and computer chose ${c}`)    
            }
            else
            {
                cp+=1
                let t=document.querySelector(".computer")
                t.innerHTML=`${cp}:computer`
                alert(`computer wins with ${c} and human chose ${h}`)
            }
}
function game(){

    let ar=["rock","paper","scissor"]
    let r=document.querySelector('.stone')
    let s=document.querySelector(".scissor")
    let p=document.querySelector(".paper")

    r.addEventListener(("click"),()=>
        {
            let c=ar[random()]
            algo("rock",c)
            
        })
    s.addEventListener(("click"),()=>
        {
            let c=ar[random()]
            algo("scissor",c)
            
        })
    p.addEventListener(("click"),()=>
        {
            let c=ar[random()]
            algo("paper",c)
            
        })
    
}
game()