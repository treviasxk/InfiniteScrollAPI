<?php
    if(isset($_REQUEST["index"])){
        $i = $_REQUEST["index"] + 1;
        $dados = ['users' => [
            [
                'name' => "$i Marco",
                'age' => '22y',
                'nationality' => 'Brazil',
            ],
            [
                'name' => "$i Sofia",
                'age' => '21y',
                'nationality' => 'EUA',
            ],
        ]];
        print_r(json_encode($dados));
    }
?>