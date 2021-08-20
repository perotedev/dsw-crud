db.turmas.insertMany([
    {
        _id : ObjectId("60d8ad29967c085268fb5194"),
        alunosId : [
                ObjectId("60d8ad29967c085268fb5186"),
                ObjectId("60d8ad29967c085268fb5187")
        ],
        ID : 1,
        nome : "Intermediário",
        dataInicio : ISODate("2021-06-29T00:04:01.665Z"),
        dataFim : ISODate("2021-10-29T00:04:01.665Z"),
        cursoId : ObjectId("60d8ad29967c085268fb5191"),
        professorId : ObjectId("60d8ad29967c085268fb5197"),
        createdAt : ISODate("2021-08-11T00:19:59.894Z"),
        updatedAt : ISODate("2021-08-11T00:21:03.433Z")
    },
    {
        _id : ObjectId("60d8ad29967c085268fb5195"),
        alunosId : [
                ObjectId("60d8ad29967c085268fb5188"),
                ObjectId("60d8ad29967c085268fb5189")
        ],
        ID : 2,
        nome : "Avançado II",
        dataInicio : ISODate("2021-06-29T00:04:01.665Z"),
        dataFim : ISODate("2021-10-29T00:04:01.665Z"),
        cursoId : ObjectId("60d8ad29967c085268fb5192"),
        professorId : ObjectId("60d8ad29967c085268fb5199"),
        createdAt : ISODate("2021-08-11T00:19:59.894Z"),
        updatedAt : ISODate("2021-08-11T00:21:03.433Z")
    },
    {
        _id : ObjectId("60d8ad29967c085268fb5196"),
        alunosId : [
                ObjectId("60d8ad29967c085268fb5189"),
                ObjectId("60d8ad29967c085268fb5187")
        ],
        ID : 3,
        nome : "Iniciante I",
        dataInicio : ISODate("2021-06-29T00:04:01.665Z"),
        dataFim : ISODate("2021-10-29T00:04:01.665Z"),
        cursoId : ObjectId("60d8ad29967c085268fb5193"),
        professorId : ObjectId("60d8ad29967c085268fb5197"),
        createdAt : ISODate("2021-08-11T00:19:59.894Z"),
        updatedAt : ISODate("2021-08-11T00:21:03.433Z")
    }
])

