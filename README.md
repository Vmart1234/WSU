[![Netlify Status](https://api.netlify.com/api/v1/badges/d05dc175-8a72-4c0a-965c-4896baa2e3dc/deploy-status)](https://app.netlify.com/sites/notelist4710/deploys)

https://notelist4710.netlify.app/ 

# Project 1: ToDo List Version 1

## Overview
Create a web application to store a to-do list.

## Basic Characteristics
1. No user identification needed.
2. The current user can see all the tasks.

## Data Structure
### Tasks
Each task consists of:
- **Task Description** (required)
- **Due Date** (required)
- **Task Category** (optional)
- **Priority Level** (optional) 
  - Values: 1-4, where 1 is the highest priority
- **Status** (active or completed)

_Note: "Optional" means the user does not have to provide that information, but the database must store it if provided._

### Categories
Each task category consists of:
- **Name**

## Functionalities
1. Current user can create tasks.
2. Current user can delete tasks.
3. Current user can mark a task as completed.
4. Current user can create categories.
5. Current user can delete categories.
6. When removing a category, all the tasks under this category will have no category.

## Views or Reports
1. **Default List View**:
   - Overdue tasks.
   - Due-today tasks, sorted by priority.
2. **Other Views**:
   - Due-today tasks, sorted by priority.
   - Due-tomorrow tasks, sorted by priority.
   - Due within the next 7 days, sorted by day and priority.
3. **Weekly Report**:
   - Shows the day and the number of tasks completed per day and in total for a specific week.

## SQL Queries
Document should clearly present a list of queries executed by each functionality (insert, delete, update) and views/reports (select).
