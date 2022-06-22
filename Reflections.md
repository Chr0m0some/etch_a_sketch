# Issues
1. Height of the page wasn't fitting the etch-a-sketch container properly
2. Erase button was not calling the function to clear the grid

# Things I Tried Out
1. Adding a font awesome icon for a link to my GitHub
2. Adding other fonts using the google fonts API which was suprisingly really easy to use

# Realizations
1. Making height auto is nice because it allows the page to adapt to its children contents to fit whatever's in the body
2. Declaring a nodelist above where the nodelist was made was bad if I ever wanted to iterate through the nodelist.
    In this case, it made the nodelist of grid-squares empty which means that when I was calling clearGrid() it wouldn't
    have any squares to sort through to clear.
    Also, the interesting about putting a function as an argument that I have to remember is that if I pass a function
    with parenthesis, it will call the function instead of properly passing it as an argument. This prevented me for 
    hours from getting the clearGrid to work off of pressing the button. Instead, it would just run the instant it was 
    loaded.