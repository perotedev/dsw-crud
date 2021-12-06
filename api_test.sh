#!/bin/bash

APP=$(curl -s --request GET 'http://localhost:4040')
echo -e "Aplicação funcionando: $APP \n"

TURMAS=$(curl -s --request GET 'http://localhost:4040/turma')
echo -e "Turmas: $TURMAS \n"

TURMABYID=$(curl -s --request GET 'http://localhost:4040/turma/60d8ad29967c085268fb5194')
echo -e "Turma 1: $TURMABYID \n"

TURMABYNAMEID=$(curl -s --request POST 'http://localhost:4040/turma/listar-nome-id' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "termo": "iniciante"
    }'
)
echo -e "Turma por nome: $TURMABYNAMEID"