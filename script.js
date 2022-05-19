const buttonLayout = [
  "green",
  "red",
  "yellow",
  "blue",
];


const PlaySound = ( soundName ) => {
  const audio = new Audio( `/sounds/${soundName}.mp3` );
  audio.muted = false; // Duas propriedades necessárias para conseguir
  audio.autoplay = false; // Executar sons em websites sem erro.
  audio.play();
  audio.volume = 0.5;
};

function animateButton ( buttonClass ) {
  $( `.${buttonClass}` ).addClass( 'pressed' );

  setTimeout( () => {
    $( `.${buttonClass}` ).removeClass( 'pressed' );
  }, 100 );
}



$( ".btn" ).on( "click", ( evt ) => {

  let buttonColor = evt.target.id;


  const checkColor = ( item ) => {
    if ( buttonColor == item ) {
      PlaySound( item );
      animateButton( item );
    }
  };

  buttonLayout.forEach( checkColor );

} );



