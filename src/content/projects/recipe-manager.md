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

- **Recipes:** create, organize, fork and save from other users
- **Social:** user profiles, group sharing, trending feed with custom algorithms
- **Planning:** calendar based meal planning with integrated shopping lists
- **Search:** find recipes by ingredient combinations, name, or tag
- **Import:** manual entry, web scraping with multiple parsing strategies, or free text and handwriting recognition via generative AI
- **Cook Mode:** interactive step-by-step cooking with the ability to invite friends to cook along in real time
- **Notifications:** push notifications for social activity and meal reminders

Go has quickly become one of my favorite languages -- I use it daily at work building microservices and internal tooling, and this app keeps me pushing further with it outside of working hours.

The code is in a private repo for now, but I'm happy to demo the live version or walk through specific technical decisions. It's been a good reminder that the best way to learn new tech is to build something you'll actually use.
