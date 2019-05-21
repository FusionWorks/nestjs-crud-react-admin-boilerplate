
# NestJS + Crud + React, Admin boilerplate

<p align="center">
  <i><a href="README.md">Overview</a></i>
  &nbsp;&nbsp;&nbsp;
	<a href="frontend/README.md">Frontend</a>
  &nbsp;&nbsp;&nbsp;
	<a href="backend/README.md">Backend</a>
  &nbsp;&nbsp;&nbsp;
</p>

## Overview

NestJS + Crud + ReactAdmin boilerplate is a full-stack Admin application solution, and starter project. It is intended for developers who are looking to fast-track building a strongly typed, enterprise-grade, modern NodeJs application, with supporting tooling.

This implementation uses the [BFF](https://samnewman.io/patterns/architectural/bff/) pattern, leveraging [NestJS](https://nestjs.com/) as the primary framework for the backend. The frontend example is in [React](https://reactjs.org/).

## Installation & Usage

This is a Mono-repo project containing a [Backend](backend/README.md), [Frontend](frontend/README.md). Follow the README navigation links for details on each of these.

## Key Features

**~~strikethrough text~~** means **TO DO**
- **Strongly Typed** backend, leveraging the power of [TypeScript](https://www.typescriptlang.org/), [NestJS](https://nestjs.com/) and [Express](https://expressjs.com/)
- **DDD style layered architecture** with Application Services and composable Domain objects
- ~~**Comprehensive authentication and authorization system** in-the-box~~
- ~~**JWT Authentication** for robust and flexible security~~
- ~~**Social Login** with Facebook (complete), Google, and Twitter (under development), using the more secure [Authorization Code Grant](https://www.oauth.com/oauth2-servers/server-side-apps/authorization-code/) flow~~
- ~~**Secured-by-default** with 'allow list' approach~~
- ~~**Flexible Caching** leveraging the powerful [cache-manager](https://www.npmjs.com/package/cache-manager) library~~
- ~~**Console Logger Service** in-the-box~~
- ~~**e2e Testing** pattern leveraging [Jest](https://jestjs.io/)~~

## Structure

- Frontend **Frontend Layer** example, built with React
- Backend **Backend Layer** for handle REST API requests

## Architecture Overview

![NestJS-BFF Architecture Overview](docs/images/NestJS-BFF-ArchitectureOverview.png 'NestJS-BFF Architecture Overview')

## Background

[NestJS](https://nestjs.com/) is a fantastic project, and a pleasure to develop with. However, it is a framework by design, and not a complete production-ready web-application solution. Features such as logging, configuration management, data-base migrations, and even authentication need to be learned, assembled, and configured before they can be used.

This project aims to provide an enterprise-ready web-application skeleton, out-of-the-box, and built on top of the nest-js framework.

# Notes
- The Frontend can run independently, but requires the Backend to be running to complete requests

## Readme Navigation

Further details on each of the systems contained in this project can be found via the following links:

- _[Overview](README.md)_
- [Frontend](frontend/README.md)
- [Backend](backend/README.md)