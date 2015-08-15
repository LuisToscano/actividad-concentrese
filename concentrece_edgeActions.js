/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Insertar código para ejecutarse cuando el símbolo se crea aquí
         ed_send_data(sym);
         inicializarTimer(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${carta_1_A}", "click", function(sym, e) {         
         //sym.getSymbol("carta_1_A").playReverse("a");
         startTimer(sym);
         carta_clickeada(sym, "carta_1_A");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${carta_1_B}", "click", function(sym, e) {
         carta_clickeada(sym, "carta_1_B");
         startTimer(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${carta_2_A}", "click", function(sym, e) {
         startTimer(sym);
         carta_clickeada(sym, "carta_2_A");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${carta_2_B}", "click", function(sym, e) {
         startTimer(sym);
         carta_clickeada(sym, "carta_2_B");

      });
      //Edge binding end      

      Symbol.bindElementAction(compId, symbolName, "${btn_submit}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         EDGE_Recurso_Submit(sym);
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'carta_1_A'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

   })("carta_1_A");
   //Edge symbol end:'carta_1_A'

   //=========================================================
   
   //Edge symbol: 'carta_1_A_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("carta_1_B");
   //Edge symbol end:'carta_1_B'

   //=========================================================
   
   //Edge symbol: 'carta_1_A_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("carta_2_B");
   //Edge symbol end:'carta_2_B'

   //=========================================================
   
   //Edge symbol: 'carta_1_A_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("carta_2_A");
   //Edge symbol end:'carta_2_A'

   //=========================================================
   
   //Edge symbol: 'btn_submit'
   (function(symbolName) {   
   
   })("btn_submit");
   //Edge symbol end:'btn_submit'

   //=========================================================
   
   //Edge symbol: 'testBtn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 511, function(sym, e) {
         // introducir código aquí
         
         sym.stop();

      });
      //Edge binding end

   })("testBtn");
   //Edge symbol end:'testBtn'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-559548");