<?php
    header('content-type:text/html;charset="utf-8"');
    $a = $_GET['user'];
    $b = $_GET['pwd'];

    echo "用户名为：$a , 密码为：$b";
?>