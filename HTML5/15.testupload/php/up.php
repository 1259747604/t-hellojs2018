<?php
    header('content-type:text/html;charset="utf-8"');
    move_uploaded_file($_FILES['a']['tmp_name'],'../img/'.$_FILES['a']['name']);
?>