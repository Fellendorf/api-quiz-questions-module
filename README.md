# Description

NestJS module containing **Questions** REST API endpoints for **[Quiz](https://github.com/Fellendorf/quiz-ui)** application.

# API endpoints

[Retrieve a list of quiz questions](#retrieve-a-list-of-quiz-questions)  
[Retrieve a list of quiz topics](#retrieve-a-list-of-quiz-topics)  
[Create a new quiz question](#create-a-new-quiz-question)

## Retrieve a list of quiz questions

<br/>

| ${\textsf{\color{lightgreen}GET}}$ &nbsp; &nbsp; &nbsp; &nbsp;`https://{host}/quiz/questions` |
| --------------------------------------------------------------------------------------------- |

<br/>

${\textsf{\color{lightgreen}GET}}$ &nbsp; &nbsp; &nbsp; &nbsp;`https://{host}/quiz/questions`

<br/>

| Query param | Type   | Required | Description                         | Example |
| ----------- | ------ | -------- | ----------------------------------- | ------- |
| topics[]    | string | false    | The topics to filter questions by   | HTML    |
| count       | number | false    | The number of questions to retrieve | 10      |

<br/>

> [!TIP]
> To filter by multiple topics, use a few "topics[]" query parameters. For example:
>
> ```
> /quiz/questions?topics[]=HTML&topics[]=CSS
> ```

## Retrieve a list of quiz topics

<br/>

${\textsf{\color{lightgreen}GET}}$ &nbsp; &nbsp; &nbsp; &nbsp;`https://{host}/quiz/topics`

<br/>

## Create a new quiz question

<br/>

${\textsf{\color{orange}POST}}$ &nbsp; &nbsp; &nbsp; &nbsp;`https://{host}/quiz/question`

TODO:

- README.md
- TESTS
