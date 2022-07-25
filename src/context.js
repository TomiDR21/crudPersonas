const productos=[
    {id:'VjEtKLJvEmlsZ25xOTAZUT', nombre:'Camiseta',precio:500},                                    
    {id:'VKeL198JxCMI049QMNZb03', nombre:'Zapatillas',precio:2000},
    {id:'VjEtKLJvEmlsZ25x@TAZUT', nombre:'Pantalón',precio:1500},
  ];

  const idProductos = productos.filter( producto =>{
    return console.log(producto.nombre == 'Camiseta')
})
                                    