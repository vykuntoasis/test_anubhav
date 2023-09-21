sap.ui.define(["sap/ui/model/json/JSONModel",
"sap/ui/model/xml/XMLModel",
"sap/ui/model/resource/ResourceModel"],
   function(JSONModel,XMLModel,ResourceModel) {
    return {

        createMyJSONModel :function(filepath){
            var oModel = new JSONModel();
            //Step 2: Set or load the data in the model
            oModel.loadData(filepath)
    
        return oModel
    },

    createXMLModel: function(filepath){
      var oModel = new XMLModel();
      //Step 2: Set or load the data in the model
      oModel.loadData(filepath)  
      return oModel 
    },
    createResourceModel: function(){
      var oModel = new ResourceModel(
        {
          bundleUrl : 'i18n/i18n.properties'
        }
      );
      //Step 2: Set or load the data in the model
      
      return oModel 
    },

        
    
  }
  
       
}
)