const todoofMonth = [{
        id: 1,
        date: new Date(2020, 5, 1),
        deadline: "5 days",
        todos: [{
                key: 11,
                todo: "Wash clothes",
                done: false,
            },
            {
                key: 12,
                todo: "water plants",
                done: false,
            },
            {
                key: 13,
                todo: "bring medicine",
                done: false,
            }
        ]
    },

    {
        id: 2,
        date: new Date(2020, 5, 5),
        deadline: "2 days",
        todos: [{
                key: 14,
                todo: "call shubham",
                done: false,
            },
            {
                key: 15,
                todo: "study algorithms",
                done: false,
            }
        ],
    },
    {
        id: 3,
        date: new Date(2020, 5, 8),
        deadline: "1 hr",
        todos: [{
                key: 16,
                todo: "pay electric bill",
                done: false,
            },
            {
                key: 17,
                todo: "go to market",
                done: false,
            },
            {
                key: 18,
                todo: "go to doctor",
                done: false,
            }
        ],
    },
]

export default todoofMonth;