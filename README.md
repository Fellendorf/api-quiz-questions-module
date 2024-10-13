# Description

NestJS module containing **Questions** REST API endpoints for **[Quiz](https://github.com/Fellendorf/quiz-ui)** application.

# API endpoints

[Retrieves a list of quiz questions](#retrieves-a-list-of-quiz-questions)  
[Retrieves a list of quiz topics](#retrieves-a-list-of-quiz-topics)

## Retrieves a list of quiz questions

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

## Retrieves a list of quiz topics

TODO:

- README.md
- TESTS
