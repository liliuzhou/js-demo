$(document).ready(function(){
    var lei=$("ul li:gt(5):not(:last)");
    lei.hide();
    var btn=$(".div2 a")
    btn.click(function(){
        if(lei.is(":visible")){
        lei.hide();
        $(".div2 a span").text("显示全部品牌")
        $(".ul1 li a").filter(":contains('佳能'),:contains('三星'),:contains('索尼')").removeClass("pro")
        return false;
    }
    else
        {
            lei.show();
            $(".div2 a span").text("返回")
            $(".ul1 li a").filter(":contains('佳能'),:contains('三星'),:contains('索尼')").addClass("pro");
            return false;
        }
    });
});
