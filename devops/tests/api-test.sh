#!/bin/bash

curl -X POST http://localhost:4040/turma -H 'Content-Type: application/json' -d "{\"nome\":\"teste\",\"dataInicio\":\"2021-06-29T00:04:01.665Z\",\"dataFim\":\"2021-10-29T00:04:01.665Z\",\"professorId\":\"60d8ad29967c085268fb5197\",\"cursoId\":\"60d8ad29967c085268fb5193\"}"
