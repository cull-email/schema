# schema for [cull](https://cull.email)

Data models for cull.

## Installation

```sh
npm install cull-email-schema
```

## Usage

This library is mostly useful in the typescript context to leverage the declared types.

```js
import { Message, Organization, Sender } from 'cull-email-schema';

let m = new Message({...});
```

## Models

- [Organization](#organization)
- [Sender](#sender)
- [Message](#message)

### Organization

A company, club or other organized body that sends _Messages_.

```json
{
  "id":          "adb06a6a-7163-4435-b4c5-f903aefd213e",
  "ignore":      false,
  "feature":     false,
  "domains":     ["example.com"],
  "url":         "https://www.example.com",
  "name":        "Example Organization",
  "description": "This is an example of an organization",
  "image":       "https://www.example.com/img/logo.png",
  "tags":        ["foo"]
}
```

### Sender

A sub-organization, department or individual that sends _Messages_ on behalf of an _Organization_.

```json
{
  "id":           "adb06eee-1219-483a-a66c-cefa5723e60d",
  "organization": "adb06a6a-7163-4435-b4c5-f903aefd213e",
  "addresses":    ["sender@example.com"],
  "ignore":       false,
  "feature":      false,
  "image":        null,
  "tags":         ["bar"]
}
```

### Message

An email message.

```json
{
  "id":             "adb06d28-7cf0-4bf4-91f5-aa667bf51834",
  "organizationId": "adb06a6a-7163-4435-b4c5-f903aefd213e",
  "senderId":       "adb06eee-1219-483a-a66c-cefa5723e60d",
  "seen":           false,
  "flagged":        false,
  "image":          null,
  "tags":           ["foo","bar","baz"],
  "date":           "2006-01-02T15:04:05Z07:00",
  "from":           ["Jaclyn <jaclyn@example.org>"],
  "subject":        "An example of an email",
  "body":           "..."
}
```

## Development

[`makefile`](makefile) codifies directives for building, testing, linting and other development oriented tasks.