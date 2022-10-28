$(function() {
    
    $("#" + $(".radio-rate:checked").val()).show();
    $(".radio-rate").change(function(){
        $(".radio-blocks").hide();
        $("#" + $(this).val()).show();
        $(".master-class__form").hide();
    });

    $("#" + $(".radio-form:checked").val()).show();
        $(".radio-form").change(function(){
            $(".master-class__form").hide();
            $("#" + $(this).val()).show();
        });
         
});



