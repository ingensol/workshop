(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    

        $(document).on("click", ".uib_w_8", function(evt)
        {
        /* your code goes here */ 
        });
        $(document).on("click", ".uib_w_50", function(evt)
        {
         activate_subpage("#uib_page_bombthreat_call"); 
        });
}
 $(document).ready(register_event_handlers);
 var viewportScale = 1 / window.devicePixelRatio;
 $("#viewport").attr("content", "user-scalable=no, initial-scale=" + viewportScale + ", minimum-scale=0.2, maximum-scale=2, width=device-width");
})();
