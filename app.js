$(document).ready(function(){ 
    const $name = $(".name")
    const $height = $(".height")
    
$(".generate").on("click", function () {
    let $number = Math.floor(Math.random()*50+1)

        $.get(`https://akabab.github.io/starwars-api/api/id/${$number}.json`, function(data){
                    console.log(data.name);
                    console.log(data.image);
                    $name.text(data.name)
                    $height.text(data.height)
                    // $img.html("<img src= alt= >")
                    $(".img").html(`<img src=${data.image} alt= >`)
            })
      })
})