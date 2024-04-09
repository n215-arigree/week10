var homeContent = `<div class="home">
<h1>Home Page</h1>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eum
  ipsum alias ex ipsa sed debitis nesciunt autem. Ex fuga, perferendis
  error perspiciatis at quibusdam autem quisquam quod? Repellat,
  tempora!
</p>
<p>
  Id incidunt recusandae qui aperiam culpa dicta eum, quidem maxime
  quibusdam vitae temporibus accusamus dignissimos officia cumque
  perspiciatis nostrum natus nobis, quae iste. Ipsa saepe nulla officiis
  sunt obcaecati? Similique?
</p>
<img src="images/nobg.png" alt="" />
</div>`;
var aboutContent = `<div class="about">
<h1>About Page</h1>
<p>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facere
  deleniti reprehenderit unde, explicabo ab enim cupiditate quisquam, ut
  saepe, pariatur incidunt quaerat? Omnis eligendi error natus quod.
  Similique, voluptatem!
</p>
<p>
  Nobis facilis nulla expedita nemo pariatur consequuntur sunt illum
  deserunt rerum architecto. Deserunt facere, velit optio ut eos
  perspiciatis dolorum, nisi necessitatibus laudantium iusto inventore
  consequatur dolorem totam vel blanditiis.
</p>
<p>
  Quasi consequatur esse explicabo dolores voluptas ea cumque sed, illo
  voluptatum modi ipsa voluptatem veniam iusto debitis quae, provident
  omnis ullam dolor architecto nisi necessitatibus adipisci similique
  rerum commodi. Recusandae.
</p>
<p>
  Minus officia asperiores nobis excepturi saepe sunt error tempora
  dicta aperiam inventore quam fuga eius assumenda similique dolorem
  quasi facere aspernatur in quibusdam atque, molestiae eveniet aliquid?
  Dolore, quaerat recusandae!
</p>
</div>`;
var productsContent = `<div class="products">
<h1>Products Page</h1>
<p>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facere
  deleniti reprehenderit unde, explicabo ab enim cupiditate quisquam, ut
  saepe, pariatur incidunt quaerat? Omnis eligendi error natus quod.
  Similique, voluptatem!
</p>
<p>
  Nobis facilis nulla expedita nemo pariatur consequuntur sunt illum
  deserunt rerum architecto. Deserunt facere, velit optio ut eos
  perspiciatis dolorum, nisi necessitatibus laudantium iusto inventore
  consequatur dolorem totam vel blanditiis.
</p>
<p>
  Quasi consequatur esse explicabo dolores voluptas ea cumque sed, illo
  voluptatum modi ipsa voluptatem veniam iusto debitis quae, provident
  omnis ullam dolor architecto nisi necessitatibus adipisci similique
  rerum commodi. Recusandae.
</p>
<p>
  Minus officia asperiores nobis excepturi saepe sunt error tempora
  dicta aperiam inventore quam fuga eius assumenda similique dolorem
  quasi facere aspernatur in quibusdam atque, molestiae eveniet aliquid?
  Dolore, quaerat recusandae!
</p>
</div>`;
var contactContent = `<div class="contact">
<h1>Contact Page</h1>
<p>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facere
  deleniti reprehenderit unde, explicabo ab enim cupiditate quisquam, ut
  saepe, pariatur incidunt quaerat? Omnis eligendi error natus quod.
  Similique, voluptatem!
</p>
<p>
  Nobis facilis nulla expedita nemo pariatur consequuntur sunt illum
  deserunt rerum architecto. Deserunt facere, velit optio ut eos
  perspiciatis dolorum, nisi necessitatibus laudantium iusto inventore
  consequatur dolorem totam vel blanditiis.
</p>
<p>
  Quasi consequatur esse explicabo dolores voluptas ea cumque sed, illo
  voluptatum modi ipsa voluptatem veniam iusto debitis quae, provident
  omnis ullam dolor architecto nisi necessitatibus adipisci similique
  rerum commodi. Recusandae.
</p>
<p>
  Minus officia asperiores nobis excepturi saepe sunt error tempora
  dicta aperiam inventore quam fuga eius assumenda similique dolorem
  quasi facere aspernatur in quibusdam atque, molestiae eveniet aliquid?
  Dolore, quaerat recusandae!
</p>
</div>`;

function initListeners() {
  $("nav a").on("click", (e) => {
    let btnID = e.currentTarget.id;
    // console.log("button id " + btnID);
    let pageContent = btnID + "Content";
    // console.log(btnID + " Content");
    // console.log(pageContent);
    // console.log(pageContent);

    // $("#app").html(btnID);
    //html wipes information out, replaces with next. so on this screen when you click nav button the button id pops up in body. with .html it replaces the text when you press a different button. you can also use prepend to add the text before (keeps it doesn't clear) and append to add to the end
    $("#app").html(eval(pageContent));
  });
}

$(document).ready(function () {
  $("#app").html(homeContent);
  initListeners();
});
