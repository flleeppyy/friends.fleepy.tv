import axios from "axios";

export default (): void => {

  $(() => {
    axios.get("/friends").then((res) => {
      const friends: friend[] = res.data;
      friends.forEach((friend: friend) => {
        const box = $(`<div id="${friend.namelowercase}" class="dropshadow friend"></div>`);
        const avatar = $(`<img class="dropshadow avatar" src="${friend.avatar}">`).appendTo(box);
        const name = $(`<h2 class="name">${friend.name}</h2>`).appendTo(box);
        const description = $(`<p class="noselect description">${friend.description}</p>`).appendTo(box);
        const links = $("<div class='socials'></div>").appendTo(box);
        friend.socials.forEach((social) => {
          const button = $(`<button href="${social.url}" class="dropshadow"><img src="${social.icon || "img/icons/questionmark.png"}" ${social.iconCss ? `style="${social.iconCss}"` : ""}><div class="socialTitle"><p>${social.title}</p></div></button>`);
          // console.log(button)
          button.attr("onclick", `window.location = '${social.url}'`);
          // button.attr('onclick', `console.log(this, event)`)
          button.css({
            "background": social.bgColor || "white",
            "color": social.textColor || "black"
          });
          button.appendTo(links);
          
          // We have to use normal javascript (not jquery) to add the mouse down listener because JQuery doesn't detect middle click or right click as a click event.
          button[0].addEventListener("mousedown", e => { // fuck you jquery
            if (e.which === 2) {
              e.preventDefault();
              window.open(social.url, "_blank");
            }
          });
        });
  
        avatar.on("click", function(e) {
          //@ts-ignore
          links.randomize("button");
        });
        
        box.appendTo("#friends");
      });
      $("#loading-container").fadeOut(300);
    });
  });
};