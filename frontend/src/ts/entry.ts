/* eslint-disable @typescript-eslint/ban-ts-comment */
import $ from "jquery";

window.$ = $;

(async () => {
  // @ts-ignore
  $.fn.randomize = function(selector){
    (selector ? this.find(selector) : this).parent().each(function(){
      // @ts-ignore
      $(this).children(selector).sort(function(){
        return Math.random() - 0.5;
      }).detach().appendTo(this);
    });   
    return this;
  };

  $(() => {
    $("body").css("background","none");
    $("main").fadeIn(400);
  });
  
  if (window.location.hostname === "127.0.0.1" || 
      window.location.hostname === "localhost" || 
      window.location.hostname === "0.0.0.0")
  {
    (await import("./modules/dev")).default();
  }
  (await import("./modules/bg")).default();
  (await import("./modules/hue")).default();
  (await import("./modules/friends")).default();
})();
