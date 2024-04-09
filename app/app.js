// var homeContent = ``;
// var aboutContent = ``;
// var productsContent = ``;
// var contactContent = ``;

function initListeners() {
  $("nav a").on("click", (e) => {
    let btnID = e.currentTarget.id;
    loadContent(btnID);
    // console.log("button id " + btnID);
    // let pageContent = btnID + "Content";
    // console.log(btnID + " Content");
    // console.log(pageContent);
    // console.log(pageContent);

    // $("#app").html(btnID);
    //html wipes information out, replaces with next. so on this screen when you click nav button the button id pops up in body. with .html it replaces the text when you press a different button. you can also use prepend to add the text before (keeps it doesn't clear) and append to add to the end
    // $("#app").html(eval(pageContent));
  });
}

function loadContent(pageName) {
  //   let pageContent = pageName + "Content";
  $.get(`../pages/${pageName}.html`, (data) => {
    $("#app").html(data);
    console.log(data);
  }).fail((error) => {
    console.log( "error ", error );
    alert("Page is " + error.statusText);
  });
//   $("#app").html(eval(pageContent));

}

function testButton() {
  alert("test");
}

$(document).ready(function () {
  loadContent("home");

  //   $("#app").html(homeContent);
  initListeners();
});
