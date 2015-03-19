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
})();
