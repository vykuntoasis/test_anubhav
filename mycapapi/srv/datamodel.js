const cds = require('@sap/cds');

module.exports = cds.service.impl(async function (){

    const { Products } = this.entities;

    const service = await cds.connect.to('Northwind');

    this.on('READ',Products,async (request) => {

        var data = await service.tx(request).run(request.query);

       console.log(data);

       data.push({
            "ID": 99,
            "Name": "Anubhav trainings",
            "Description": "Whole grain bread",
            "ReleaseDate": "1992-01-01T00:00:00Z",
            "DiscontinuedDate": null,
            "Rating": 4,
            "Price": 2.5
        
       })

       return data;
    })

 })