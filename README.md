# Description

NestJS module containing **Questions** REST API endpoints for **[Quiz](https://github.com/Fellendorf/quiz-ui)** application.  
Table of Contents:

[API endpoints](#api-endpoints)

- [Retrieve a quiz question by id](#retrieve-a-quiz-question-by-id)
- [Create a new quiz question](#create-a-new-quiz-question)
- [Update a quiz question](#update-a-quiz-question)
- [Delete a quiz question by id](#delete-a-quiz-question-by-id)
- [Retrieve a list of quiz questions](#retrieve-a-list-of-quiz-questions)
- [Retrieve a list of quiz topics](#retrieve-a-list-of-quiz-topics)
- [Create new quiz questions](#create-new-quiz-questions)

[How to use](#how-to-use)  
[How to develop](#how-to-develop)

<br/>

# API endpoints

<br/>

## Retrieve a quiz question by id

&nbsp; &nbsp; ${\textsf{\color{lightgreen}GET}}$ &nbsp; &nbsp; &nbsp; &nbsp;`https://{host}/quiz/question`

#### QUERY PARAMS

| Param | Type   | Required | Description            | Example                  |
| ----- | ------ | -------- | ---------------------- | ------------------------ |
| id    | string | true     | The question ID to get | 671d7510132024de0ed47304 |

#### RESPONSE BODY

```
{
    _id: string;
    topic: string;
    subtopic?: string;
    text: string;
    code?: {
        text: string;
        language: 'typescript' | 'javascript' | 'html' | 'css';
    }
    options: Array<{
        text: string;
        isCorrect?: boolean;
    }>;
    explanation?: string;
    links?: Array<string>;
    reviewed?: boolean;
    difficult?: 'easy' | 'medium' | 'hard';
    createdAt: Date;
    updatedAt: Date;
}
```

<br>

## Create a new quiz question

${\textsf{\color{orange}POST}}$ &nbsp; &nbsp; &nbsp; &nbsp;`https://{host}/quiz/question`

#### REQUEST BODY

```
{
    topic: string;
    subtopic?: string;
    text: string;
    code?: {
        text: string;
        language: 'typescript' | 'javascript' | 'html' | 'css';
    }
    options: Array<{
        text: string;
        isCorrect?: boolean;
    }>;
    explanation?: string;
    links?: Array<string>;
    reviewed?: boolean;
    difficult?: 'easy' | 'medium' | 'hard';
}
```

<br/>

## Update a quiz question

${\textsf{\color{blue}PUT}}$ &nbsp; &nbsp; &nbsp; &nbsp;`https://{host}/quiz/question`

#### REQUEST BODY

```
{
    _id: string;
    topic: string;
    subtopic?: string;
    text: string;
    code?: {
        text: string;
        language: 'typescript' | 'javascript' | 'html' | 'css';
    }
    options: Array<{
        text: string;
        isCorrect?: boolean;
    }>;
    explanation?: string;
    links?: Array<string>;
    reviewed?: boolean;
    difficult?: 'easy' | 'medium' | 'hard';
}
```

<br/>

## Delete a quiz question by id

${\textsf{\color{red}DELETE}}$ &nbsp; &nbsp; &nbsp; &nbsp;`https://{host}/quiz/question`

#### QUERY PARAMS

| Param | Type   | Required | Description           | Example                  |
| ----- | ------ | -------- | --------------------- | ------------------------ |
| id    | string | true     | Question ID to delete | 671438511204ca5ad9df5366 |

<br/>

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
        _id: string;
        topic: string;
        subtopic?: string;
        text: string;
        code?: {
            text: string;
            language: 'typescript' | 'javascript' | 'html' | 'css';
        }
        options: Array<{
            text: string;
            isCorrect?: boolean;
        }>;
        explanation?: string;
        links?: Array<string>;
        reviewed?: boolean;
        difficult?: 'easy' | 'medium' | 'hard';
        createdAt: Date;
        updatedAt: Date;
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

<br/>

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

<br/>

## Create new quiz questions

${\textsf{\color{orange}POST}}$ &nbsp; &nbsp; &nbsp; &nbsp;`https://{host}/quiz/questions`

#### REQUEST BODY

```
{
    questions: [
        {
            topic: string;
            subtopic?: string;
            text: string;
            code?: {
                text: string;
                language: 'typescript' | 'javascript' | 'html' | 'css';
            }
            options: Array<{
                text: string;
                isCorrect?: boolean;
            }>;
            explanation?: string;
            links?: Array<string>;
            reviewed?: boolean;
            difficult?: 'easy' | 'medium' | 'hard';
        }
    ]
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

Repository contains an app module (`src/_dev-only`) just for development purposes. Additionally:

- command `npm run build` is set to use this main module to develop the "Questions" module;
- the folder containing the main module will not be included in the npm package (see `.npmignore` file)

> [!NOTE]
> Using `npm link` command or `file://...` path in pacakge.json brings some bugs.

<br/>

# App TODO:

- TESTS
