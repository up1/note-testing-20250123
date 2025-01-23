# Demo with postman

## Shared data between collections in newman

```
$newman run demo01.postman_collection.json --export-globals workspace.postman_globals.json
$newman run demo02.postman_collection.json -g workspace.postman_globals.json
```