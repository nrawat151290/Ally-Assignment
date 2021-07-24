# Steps to run the application

1. Clone the repository locally.
2. Go to root folder and run **yarn start**. This will initiate webpack-dev-server.
3. Browser will automatically open up with application opened.



# Corrupted/Incorrect data returned by API

Noticed a few key-result objects having corrputed parent_objective_id, example below:

```json
"parent_objective_id": " stock photos and illustrations)\""
```



# Filters

1. Filter selection will reset the list to show limited results.
2. Multiple filters can be selected.
3. Selecting all filters will render the entire data.
