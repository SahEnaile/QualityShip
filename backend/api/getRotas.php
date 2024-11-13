<?php
header("Content-Type: application/json");

$rotas = [
    [
        "nome" => "Caminhão 1 | Porto Alegre - São Paulo",
        "origem" => "Porto Alegre, RS",
        "destino" => "São Paulo, SP",
        "status" => "em trânsito",
        "temperatura" => 18,
        "umidade" => 60,
        "previsao_chegada" => "2024-11-15 16:00"
    ],
    [
        "nome" => "Caminhão 2 | Curitiba - Rio de Janeiro",
        "origem" => "Curitiba, PR",
        "destino" => "Rio de Janeiro, RJ",
        "status" => "alerta de temperatura",
        "temperatura" => 30,
        "umidade" => 70,
        "previsao_chegada" => "2024-11-15 20:30"
    ],
    [
        "nome" => "Caminhão 3 | Belo Horizonte - Brasília",
        "origem" => "Belo Horizonte, MG",
        "destino" => "Brasília, DF",
        "status" => "em trânsito",
        "temperatura" => 22,
        "umidade" => 55,
        "previsao_chegada" => "2024-11-16 10:00"
    ],
    [
        "nome" => "Caminhão 4 | Salvador - Recife",
        "origem" => "Salvador, BA",
        "destino" => "Recife, PE",
        "status" => "parado",
        "temperatura" => 25,
        "umidade" => 65,
        "previsao_chegada" => "2024-11-16 14:00"
    ],
    [
        "nome" => "Caminhão 5 | Manaus - Belém",
        "origem" => "Manaus, AM",
        "destino" => "Belém, PA",
        "status" => "alerta de umidade",
        "temperatura" => 28,
        "umidade" => 85,
        "previsao_chegada" => "2024-11-17 18:00"
    ]
];

echo json_encode($rotas);
?>
