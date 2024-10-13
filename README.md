# Description

NestJS module containing **Questions** REST API endpoints for **[Quiz](https://github.com/Fellendorf/quiz-ui)** application.

## API endpoints

Retrieves a list of quiz questions based on the provided topics and count:

${\textsf{\color{lightgreen}GET}}$ `https://{host}/quiz/questions`

| Query param | Type   | Required | Description                         | Example |
| ----------- | ------ | -------- | ----------------------------------- | ------- |
| topics[]    | string | false    | The topics to filter questions by   | "HTML"  |
| count       | number | false    | The number of questions to retrieve | 10      |

> [!TIP]
> To request a few topics, use a few "topics[]" query parameters. For example:
>
> ```
> /quiz/questions?topics[]=html&topics[]=css
> ```

TODO:

- README.md
- TESTS
