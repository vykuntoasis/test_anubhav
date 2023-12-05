const MyService = function(srv){
    // llke dpc ext class when build odata
    srv.on('helloCAP', (req,res)=>{
              return "Hello capians ,welcome" + req.data.name
    })
}

module.exports =  MyService
