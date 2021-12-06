#!/bin/bash
FAIL="falhou na execução ❌"
SUCCESS="passou com sucesso ✅"

echo -e "Executando script de testes!\n"

# TESTE ROOT DA APLICAÇÃO
RESPONSE=$(curl -s --request GET 'http://localhost:4040')
if [ "$RESPONSE" == "This server is running in port 4040" ]
then
    echo -e "\e[01;32mTeste de inicialização $SUCCESS\e[00m"
else
    echo -e "\e[01;31mTeste de incialização $FAIL\e[00m"
fi
sleep 1

# TESTE LISTAR TODAS AS TURMAS
EXPECTED='{"alunosId":["60d8ad29967c085268fb5189","60d8ad29967c085268fb5187"],"_id":"60d8ad29967c085268fb5196","ID":3,"nome":"Iniciante I","dataInicio":"2021-06-29T00:04:01.665Z","dataFim":"2021-10-29T00:04:01.665Z","cursoId":"60d8ad29967c085268fb5193","professorId":"60d8ad29967c085268fb5197","createdAt":"2021-08-11T00:19:59.894Z","updatedAt":"2021-08-11T00:21:03.433Z"}'
RESPONSE=$(curl -s --request GET 'http://localhost:4040/turma')
if [[ "$RESPONSE" =~ .*"$EXPECTED".* ]]
then
    echo -e "\e[01;32mTeste listar turmas $SUCCESS\e[00m"
else
    echo -e "\e[01;31mTeste listar turmas $FAIL\e[00m"
fi
sleep 1

# TESTE LISTAR TURMA PELO ID (HEXADECIMAL MONGODB)
EXPECTED='{"alunosId":["60d8ad29967c085268fb5186","60d8ad29967c085268fb5187"],"_id":"60d8ad29967c085268fb5194","ID":1,"nome":"Tecnico Básico I","dataInicio":"2021-06-29T00:04:01.665Z","dataFim":"2021-10-29T00:04:01.665Z","cursoId":"60d8ad29967c085268fb5191","professorId":"60d8ad29967c085268fb5197","createdAt":"2021-08-11T00:19:59.894Z","updatedAt":"2021-08-11T00:21:03.433Z"}'
RESPONSE=$(curl -s --request GET 'http://localhost:4040/turma/60d8ad29967c085268fb5194')
if [ "$RESPONSE" == "$EXPECTED" ]
then
    echo -e "\e[01;32mTeste listar turma pelo _id (mongoDB) $SUCCESS\e[00m"
else
    echo -e "\e[01;31mTeste listar turma pelo _id (mongoDB) $FAIL\e[00m"
fi
sleep 1

# LISTART TURMAS PELO ID (AUTOINCREMENTO)
EXPECTED='[{"alunosId":["60d8ad29967c085268fb5188","60d8ad29967c085268fb5189"],"_id":"60d8ad29967c085268fb5195","ID":2,"nome":"Técnico Avançado II","dataInicio":"2021-06-29T00:04:01.665Z","dataFim":"2021-10-29T00:04:01.665Z","cursoId":"60d8ad29967c085268fb5192","professorId":"60d8ad29967c085268fb5199","createdAt":"2021-08-11T00:19:59.894Z","updatedAt":"2021-08-11T00:21:03.433Z"}]'
RESPONSE=$(curl -s --request POST 'http://localhost:4040/turma/listar-nome-id' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "termo": "2"
    }'
)
if [[ "$RESPONSE" =~ .*"$EXPECTED".* ]]
then
    echo -e "\e[01;32mTeste listar turmas pelo ID (autoincremento) $SUCCESS\e[00m"
else
    echo -e "\e[01;31mTeste listar turmas pelo ID (autoincremento) $FAIL\e[00m"
fi
sleep 1

# LISTAR TURMAS POR NOME
EXPECTED='"60d8ad29967c085268fb5197","createdAt":"2021-08-11T00:19:59.894Z","updatedAt":"2021-08-11T00:21:03.433Z"},{"alunosId":["60d8ad29967c085268fb5222","60d8ad29967c085268fb5221","60d8ad29967c085268fb5220","60d8ad29967c085268fb5190"],"_id":"60d8ad29967c085268fb5230","ID":4,"nome":"Iniciante III","dataInicio":"2021-06-29T00:04:01.665Z","dataFim":"2021-10-29T00:04:01.665Z"'
RESPONSE=$(curl -s --request POST 'http://localhost:4040/turma/listar-nome-id' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "termo": "iniciante"
    }'
)
if [[ "$RESPONSE" =~ .*"$EXPECTED".* ]]
then
    echo -e "\e[01;32mTeste listar turmas pelo nome $SUCCESS\e[00m"
else
    echo -e "\e[01;31mTeste listar turmas pelo nome $FAIL\e[00m"
fi
sleep 1