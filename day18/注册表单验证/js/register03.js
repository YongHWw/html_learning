$(function(){

    var $userName = $('#user_name');

    $userName.blur(function(){
        checkUsername();
    })

    $userName.click(function(){
        $(this).next().hide();
    })

    function checkUsername(){

        var val = $userName.val();
        var re = /^\w{6,20}$/;

        if(val==''){
            $userName.next().html('用户名不能为空，请输入用户名！');
            $userName.next().show();
            return;
        }

        if(re.test(val)){
            $userName.next().hide();
        }
        else{
            $userName.next().html('用户名是6到20位的数字、字母或下划线！');
            $userName.next().show();
            return;
        }


    }




})