<?php
header('Content-Type:text/html;charset=utf-8');
header('Content-Type:text/event-stream');
$time = date('r');
$data = array(
    array(
        'name'=>'dream',
        'age'=>20
    )
);
echo "data:".json_encode($data)."\n\n";
flush();
?>