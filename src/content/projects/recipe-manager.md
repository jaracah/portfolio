---
title: Social Recipe Manager
summary: A full-stack recipe app built with Go, Swift, and a passion for good food.
order: 1
tags: [Go, Swift, PostgreSQL, Terraform, GenAI, Google Cloud Platform]
images:
  - src: /images/recipe-manager/feed-1.png
    alt: Recipe feed
  - src: /images/recipe-manager/recipe-detail-1.png
    alt: Recipe detail view
  - src: /images/recipe-manager/profile-1.png
    alt: User profile and collections
links: []
---

A full-stack, social recipe management platform. The mobile app is built natively in Swift for iOS, backed by a Go API structured with a layered architecture for clean separation of concerns. Authentication is handled via OAuth, and the data lives in PostgreSQL.

Features include:

- Recipe CRUD with user profiles and group sharing
- Ingredient-based search
- Social feed with custom trending algorithms
- Fork and remix other users' recipes
- Calendar-based meal planning
- Shopping lists integrated with recipes
- Recipe importing via manual entry, web scraping with multiple parsing strategies, or free text and handwriting recognition using generative AI.
Go has quickly become one of my favorite languages -- I use it daily at work building microservices and internal tooling, and this app keeps me pushing further with it outside of working hours.

The code is in a private repo for now, but I'm happy to demo the live version or walk through specific technical decisions. It's been a good reminder that the best way to learn new tech is to build something you'll actually use.
