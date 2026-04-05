# Application architecture

Patterns, practices, and suggestions.

- [Application architecture](#application-architecture)
  - [Fast key:value storage](#fast-keyvalue-storage)
  - [When to throttle](#when-to-throttle)
  - [When to debounce](#when-to-debounce)
  
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