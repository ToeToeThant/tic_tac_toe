    var computer_img = "";
    var player_img= "";
    var logo="plogo.jpg";
    var turns = [logo,logo,logo,logo,logo,logo,"+",logo];
    var gameOn = false;
    var count=0;

    function action_change(){
    var start=prompt("Choose your move","Type ICE-CREAM(i) or UNICORN(u)").toUpperCase();
    switch(start){
        case "I":
        player_img="u/1.png";
        $("#message").html("You choose ICE-CREAM to start!");
        break;
        case "U":
        $("#message").html("You choose UNICORN to start!");
        break;
        case null:
        alert("Sorry. Please type ICE-CREAM or UNICORN");
        window.location.reload(true);
        break;
        default:
        alert("Sorry. Please type ICE-CREAM or UNICORN");
        window.location.reload(true);
        break;
    }
}
