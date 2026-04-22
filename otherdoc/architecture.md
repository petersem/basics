# Application architecture

Patterns, practices, and suggestions.

- [Application architecture](#application-architecture)
  - [Fast key:value storage](#fast-keyvalue-storage)
  - [When to throttle](#when-to-throttle)
  - [When to debounce](#when-to-debounce)
  - [Scaling](#scaling)
    - [Horizontal scaling](#horizontal-scaling)
    - [Load balancing](#load-balancing)
    - [DB Sharding](#db-sharding)
    - [Caching](#caching)
    - [Queues](#queues)
    - [Content Delivery Networks (CDN)](#content-delivery-networks-cdn)
  
[Return Home](/basics)

## Fast key:value storage

- **Prototyping:** Use `new Map()` for fast in-memory key:value storage
- **Small/Medium scale:** Use a local (Docker) `Redis case` for fast and free storage
- **High scale:** Use a cloud version `Azure Redis case` or `AWS ElistiCache`

**[`^        back to top        ^`](#application-architecture)**

## When to throttle

Throttling limits how often a function can run, regardless of how often it is called.

Examples of when to throttle are:

- Scroll position updates
- Infinite scrolling
- Tracking mouse movement
- Resizing a window while updating a layout
- Anything where you want continuous but controlled execution

**[`^        back to top        ^`](#application-architecture)**

## When to debounce

Runs a function only after the event has been quiet for a set period.

Examples of when to debounce are:

- Search-as-you-type (wait until typing stops)
- Auto-saving form data
- Validating input
- Resizing a window and doing something after the resize ends
- Anything where you want the final, settled actio

**[`^        back to top        ^`](#application-architecture)**

## Scaling

Things to consider, when wishing to improve scale.

### Horizontal scaling

Recreating multiple instances of your services.

**[`^        back to top        ^`](#application-architecture)**

### Load balancing

To distribute traffic to you services, you require a load balancer which will distribute traffic according to the load on your services. 

**[`^        back to top        ^`](#application-architecture)**

### DB Sharding

The database is a single point of failure and also a performance bottleneck. Database sharding is partitioning your database across multiple databases.

**[`^        back to top        ^`](#application-architecture)**

### Caching

Latency is a factor, so implementation of caching will reduce this. Cache is a temporary memory of data for similar requests. 

**[`^        back to top        ^`](#application-architecture)**

### Queues

Too many requests are then hitting your system, so queues can buffer requests as they come in.

**[`^        back to top        ^`](#application-architecture)**

### Content Delivery Networks (CDN)

Static content is then put on a CDN which is closest to the user, hence loading fast. 

**[`^        back to top        ^`](#application-architecture)**
