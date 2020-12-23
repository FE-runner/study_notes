let m=0
let flag= true
function a(n){
    if(n===1||flag){
        m=Math.round(Math.random()*(50-m)+m)
        console.log(m)
        flag=false
    }else if(n>=47){
      return
    } else if(n===m-1){
      flag=true
    }
    
    n++
    return a(n)
}
a(1)