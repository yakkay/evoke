function delay() {
    return new Promise(() => setTimeout(
    ()=>{console.log('la tarea es de '+materia)
},
         3000));
}
function t(materia,finish){
    delay()
    finish()
}

t('filosofia',function(){
    console.log('terminé')
})