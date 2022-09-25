
document.getElementById("heading").addEventListener("click", function(){
    alert("THE DISCOUNT SALE ENDS SOON!");
}, true);
document.getElementById("para1").addEventListener("click", function(){
    this.style.color = "rgb(255, 120, 156)";
    this.style.fontSize = "larger"
}, true);
$(document).ready(function(){ 
    $('#show').click(function(){
        $('#child2').show();
    })
    $('.but1').click(function(){
        $.getJSON("result.json", function(data)
        {
            for (let i = 0; i < 4; i++) {
                const element = data[i].name;
                $('.text').append('<br>');
                $('.text').append(element);
            }
        })
    })
});
