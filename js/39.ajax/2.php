<?php
    header('content-type:text/html;charset="utf-8"');
    $a = $_POST['user'];
    $b = $_POST['pwd'];

    echo "用户名为：$a , 密码为：$b";
?>