# Description

NestJS module containing **Questions** REST API endpoints for **[Quiz](https://github.com/Fellendorf/quiz-ui)** application.  
Table of Contents:

[API endpoints](#api-endpoints)

- [Retrieve a list of quiz questions](#retrieve-a-list-of-quiz-questions)
- [Retrieve a list of quiz topics](#retrieve-a-list-of-quiz-topics)
- [Create a new quiz question](#create-a-new-quiz-question)

[How to use](#how-to-use)  
[How to develop](#how-to-develop)

<br/>

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

#### REQUEST BODY

```
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
```

<br/>

# How to use

Install the package to the main NestJS application and add it to the main module imports:

```
import { QuestionsModule } from '@fellendorf/api-quiz-questions-module';

@Module({
  imports: [QuestionsModule],
  controllers: [],
  providers: [],
})
```

> [!IMPORTANT]
> Main application must be connected to the MongoDB database.

<br/>

# How to develop

Both this module package and the main application must be located locally on the same computer.  
Follow these steps:

1. This module package:

   1.1 Run `npm link` command. This will create a symbolic link from the package directory to the global **node_modules** directory

   1.2 Run `tsc -w` command to compile this module code in the "watch" mode.

2. In the main application run `npm link @fellendorf/api-quiz-questions-module` command. This will create a symbolic link from **node_modules/@fellendorf/api-quiz-questions-module** within the codebase to the global **node_modules**

Unfortunately, the main application will not recompile the code when you make some changes in the module local repository. Therefore, you should handle it manually.

<br/>

# App TODO:

- TESTS
