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
    $("html").css("background","none");
    $("main").fadeIn(400);
  });
  // (await import ("./dev")).default();
  (await import("./bg")).default();
  (await import("./darkreader")).default();
  (await import("./hue")).default();
  (await import("./friends")).default();
})();
