$(function () {


    let text = $("h1");
    let list = $("#list li")
    /* list.click(function() {
        console.log($(this).text())
    }) */

    let ul = $("ul")
    /* list.click(function () {
        console.log("test");
    }) */


    let btn = $("#btn");
    let count = 0;
    /* btn.click(function () {
        
        let newLi = $(`<li class = "list-group-item"> ${count} </li>`);
        ul.append(newLi);
        count++;
    }) */
    /* $(document).on("click","#list li",function () {
        console.log("test");
    }) */


    $(document).on("click", "#btn", function () {
        ul.toggle("fast");
    })

    /* $(document).on("click","#btn",function () {
        $(".box").slideToggle();
        $(".box").css("background-color", "yellow");
    }) */

    $(document).on("click", "#play", function () {
        $(".box").slideToggle(3000);
        // $(".box").css("background-color", "yellow");
    })
    $(document).on("click","#stop",function () {
        $(".box").stop();
    })

    $(document).on("click",".accordion-header",function(){
        $(this).next().slideToggle();
    })
})