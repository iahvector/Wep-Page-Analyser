# Wep Page Analyser
ImmoScout24 NodeJS Engineer Challenge

### Usage
- To serve the app, run
```
docker-compose up
```
- You can access the app at http://localhost

- To run frontend development server, run
```
docker run --rm -it -v $PWD:/immoscout24 -w /immoscout24/client -p 3000:3000 node:8.7-alpine yarn start
```
- You can access the frontend development server at http://localhost:3000

### Assumptions and decisions:
- Internal links are considered any link that starts with the same domain as the url being tested or any anchor link.
- An anchor link is considered accessible if the page contains an element with an id matching the anchor.
- Full links are tested by GET requesting the link. The connection is termination before the request body is recieved to save time
and bandwidth. HEAD requests were considered first, but not all sites support them.

### Todo
- Find a better way to assess link accessibility as requesting the links takes too long.
- Write unit tests for the Analyser package.
- Write end to end tests for the REST API.
- Write unit tests for the React components.

### API Documentation
#### Path
/api/v1/analyse
#### Method
GET
#### Query Parameters
**url:** the url to analyse
#### Response
**Status:** 200

**Content type:** application/json

**Body:**
```json
{
  "htmlVersion": "HTML 5",
  "title": "Example title",
  "hasLoginForm": true,
  "headings": {
    "h1": 0,
    "h2": 1,
    "h3": 2,
    "h4": 3,
    "h5": 4,
    "h6": 6
  },
  "linksCount": {
    "all": 3,
    "internal": 1,
    "external": 2,
    "inaccessible": 2
  }
}
```
#### Errors
**Status:** 400

**Content type:** application/json

**Body:**
```
{
  "error": {
    "name": "InvalidUrlError",
    "message": "Invalid URL: invalid.com"
  }
}
```
```
{
  "error": {
    "name": "InvalidContentError",
    "message": "URL does not contain valid HTML: http://json.api"
  }
}
```
```
{
  "error": {
    "name": "UnreachableUrlError",
    "message": "The URL cannot be reached: http://inaccessible.com, Status: 403",
    "status": 403
  }
}
```
