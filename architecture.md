# Application architecture

- [Application architecture](#application-architecture)
  - [Design Patterns](#design-patterns)
    - [Singleton](#singleton)
    - [Factory](#factory)
    - [Abstract Factory Pattern](#abstract-factory-pattern)
    - [Builder Pattern](#builder-pattern)
    - [Prototype Pattern](#prototype-pattern)
  - [Design Solutions](#design-solutions)
    - [Fast key:value storage](#fast-keyvalue-storage)
      - [Local development/prototyping](#local-developmentprototyping)
  
[Return Home](/basics)

Patterns, practices, and suggestions.

## Design Patterns 

### Singleton

When you invoke a class with the `new ClassName` statement, you are creating a specific instance of a class, which is has unique properties and methods to any other instance. The singleton pattern only allows a single instance of a class to be created. This is useful when you have to access services or databases which only allow allow single connections.

**[`^        back to top        ^`](#application-architecture)**

### Factory

Provides an interface for creating objects that can be modified after creation. The cool thing about this is that the logic for creating our objects is centralized in a single place, simplifying and better organizing our code.

**[`^        back to top        ^`](#application-architecture)**

### Abstract Factory Pattern

Allows us to produce families of related objects without specifying concrete classes. It's useful in situations where we need to create objects that share only some properties and methods.

The way it works is by presenting an abstract factory the client interacts with. That abstract factory calls the corresponding concrete factory given the corresponding logic. And that concrete factory is the one that returns the end object.

**[`^        back to top        ^`](#application-architecture)**

### Builder Pattern

Is used to create objects in "steps". Normally we will have functions or methods that add certain properties or methods to our object.

The cool thing about this pattern is that we separate the creation of properties and methods into different entities.

**[`^        back to top        ^`](#application-architecture)**

### Prototype Pattern

The Prototype pattern allows you to create an object using another object as a blueprint, inheriting its properties and methods.

**[`^        back to top        ^`](#application-architecture)**

## Design Solutions

### Fast key:value storage

- **Prototyping:** Use `new Map()` for fast in-memory key:value storage
- **Small/Medium scale:** Use a local (Docker) `Redis case` for fast and free storage
- **High scale:** Use a cloud version `Azure Redis case` or `AWS ElistiCache`

**[`^        back to top        ^`](#application-architecture)**

#### Local development/prototyping

**[`^        back to top        ^`](#application-architecture)**
