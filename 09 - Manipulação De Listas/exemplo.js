const lista = [1,2,3,4,5,6,7,8,9,10]

//Forma de percorrer a lista assim como um For(), porém mais lento
lista.forEach((value,i,listRef) => {
    console.log(value + i)
})