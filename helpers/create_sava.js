exports.generateSavaCode = (number_sent,clienteId) => {
    try{
        var dt = new Date()
        const day = String(dt.getDate()).padStart(2, '0')
        const year= String(dt.getFullYear())
        const month=String(dt.getMonth()).padStart(2, '0')
        const number_pack=String(number_sent).padStart(3, '0')
        const id=String(clienteId).padStart(3, '0')
        savaCode=day+month+year+number_pack+id
        return savaCode
    }catch(err){
      next(err);
    }
    
  };
  