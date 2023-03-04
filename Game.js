AFRAME.registerComponent("game",{
    schema:{
        elemento:{type:"string", default:"#coin1"}
    },
    update:function(){
       this.colicionador(this.data.elemento)
    },
    colicionador:function(elemento){
        const element=document.querySelector(elemento)
        element.addEventListener("collide",(e)=>{
            if(elemento.includes("#coin")){
               console.log("colicione con una moneda")
            }
            else if(elemento.includes("#fish")){
               console.log("colicione con un pez")
            }
        })
    }
})
