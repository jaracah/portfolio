---
title: Social Recipe Platform
summary: A full-stack, social recipe app, enhanced with AI features.
order: 1
tags: [Go, Swift, PostgreSQL, Terraform, GenAI, AWS]
images:
  - src: /images/recipe-manager/duo-recipe.png
    alt: Recipe detail with ingredient scaling and unit conversion on iPhone Duo
  - src: /images/recipe-manager/duo-cookmode.png
    alt:
      Step-by-step cook mode showing the ingredients for each step on iPhone Duo
  - src: /images/recipe-manager/iphone-feed.png
    alt: Home recipe feed on iPhone
  - src: /images/recipe-manager/phone-cookbook.png
    alt: Cookbook example on iPhone
  - src: /images/recipe-manager/duo-calendar.png
    alt: Weekly meal planning calendar on iPhone Duo
  - src: /images/recipe-manager/duo-lists.png
    alt: Shopping list with progress tracking on iPhone Duo
  - src: /images/recipe-manager/phone-profile.png
    alt: User profile with recipe posts on iPhone
links: []
---

A full-stack, social recipe management platform. The mobile app is built
natively in Swift for iOS, backed by a Go API structured with a layered
architecture for clean separation of concerns. Authentication is handled via
OAuth, and the data lives in PostgreSQL.

Features include:

- **Recipes:** create, organize, fork and save from other users
- **Social:** user profiles, group sharing, trending feed with custom algorithms
- **Planning:** calendar based meal planning with integrated shopping lists
- **Search:** find recipes by ingredient combinations, name, or tag
- **Import:** manual entry, web scraping with multiple parsing strategies, or
  free text and handwriting recognition via generative AI
- **Cook Mode:** interactive step-by-step cooking with the ability to invite
  friends to cook along in real time
- **Notifications:** push notifications for social activity and meal reminders

The backend is hosted on AWS, with infrastructure managed through Terraform. Go
has quickly become one of my favorite languages -- I use it daily at work
building microservices and internal tooling, and this app keeps me pushing
further with it outside of working hours.

Targeting a 2026 release. The code is in a private repo for now, but I'm happy
to demo the live version or walk through specific technical decisions.
