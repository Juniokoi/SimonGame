const buttonLayout = [
  "green",
  "red",
  "yellow",
  "blue",
];


$( ".btn" ).on( "click", ( e ) => {

  console.log( e.target.className );
} );