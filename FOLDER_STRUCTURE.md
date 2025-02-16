## Overview

This project is a web application that allows users to manage their projects and tasks.

## Folder Structure

```
src/
├── app/
├── components/
├── config/
├── db/
├── admin/ (optional, in case of /admin included in the project)
│   ├── users
│   │   ├── ui
│   │   ├── api
│   ├── projects
│   │   ├── ui
│   │   ├── api
│   ├── tasks
│   │   ├── ui
│   │   ├── api
│   ├── settings
│   │   ├── ui
│   │   ├── api
├── features/ (required)
│   ├── auth/
│   │   ├── ui/
│   │   ├── api/
│   │   ├── components/
│   │   ├── lib/
│   │   └── hooks/
│   ├── projects/
│   │   ├── ui/
│   │   ├── api/
│   │   ├── components/
│   │   ├── lib/
│   │   └── hooks/
│   ├── tasks/
│   │   ├── ui/
│   │   ├── api/
│   │   ├── components/
│   │   ├── lib/
│   │   └── hooks/
│   ├── settings/
│   │   ├── ui/
│   │   ├── api/
│   │   ├── components/
│   │   ├── lib/
│   │   └── hooks/
├── hooks/
├── i18n/
├── lib/
└── middleware.ts
```
