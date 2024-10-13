# Description

NestJS module containing **Questions** REST API endpoints for **[Quiz](https://github.com/Fellendorf/quiz-ui)** application.  
Table of Contents:

[API endpoints](#api-endpoints)

- [Retrieve a list of quiz questions](#retrieve-a-list-of-quiz-questions)
- [Retrieve a list of quiz topics](#retrieve-a-list-of-quiz-topics)
- [Create a new quiz question](#create-a-new-quiz-question)

[How to develop](#how-to-develop)

# API endpoints

## Retrieve a list of quiz questions

&nbsp; &nbsp; ${\textsf{\color{lightgreen}GET}}$ &nbsp; &nbsp; &nbsp; &nbsp;`https://{host}/quiz/questions`

#### QUERY PARAMS

| Param    | Type   | Required | Description                         | Example |
| -------- | ------ | -------- | ----------------------------------- | ------- |
| topics[] | string | false    | The topics to filter questions by   | HTML    |
| count    | number | false    | The number of questions to retrieve | 10      |

#### RESPONSE BODY

```
[
    {
        topic: string;
        text: string;
        code?: {
            text: string;
            language: 'typescript' | 'javascript' | 'html' | 'css';
        }
        options: string[];
        answer: {
            index: number;
            explanation?: string;
        };
    }
]
```

<br/>

> [!TIP]
> To filter by multiple topics, use a few "topics[]" query parameters. For example:
>
> ```
> /quiz/questions?topics[]=HTML&topics[]=CSS
> ```

## Retrieve a list of quiz topics

${\textsf{\color{lightgreen}GET}}$ &nbsp; &nbsp; &nbsp; &nbsp;`https://{host}/quiz/topics`

#### RESPONSE BODY

```
[
    {
        name: string;
        questionCount: number;
    }
]
```

## Create a new quiz question

<br/>

${\textsf{\color{orange}POST}}$ &nbsp; &nbsp; &nbsp; &nbsp;`https://{host}/quiz/question`

TODO: finish this section

# How to develop

TODO: describe

# App TODO:

- TESTS
