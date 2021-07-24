# General Information

1. Used create-react-app boilerplate to setup the skeleton.
2. Redux & Redux-Saga middleware have been setup from scratch, without using any boilerplate.
3. Axios has been used for XHR calls.
4. Wherever possible, Block, Elements, Modifier(BEM) methodology has been used to name CSS classes.




# Steps to run the application

1. Clone the repository locally.
2. Go to root folder and run **yarn start**. This will initiate webpack-dev-server.
3. Browser will automatically open up with application rendered.




# Corrupted/Incorrect data returned by API

Noticed a few key-result objects having corrputed parent_objective_id, example below:

```json
"parent_objective_id": " stock photos and illustrations)\""
```



# Filters

1. Filter selection will reset the list to show limited results.
2. Multiple filters can be selected.
3. Selecting all filters will render the entire data.




# Responsiveness

1. Upto width of 600px, filters and OKRs will be rendered in a stacked fashion.
2. Above 600px, filters and OKRs will be rendered adjacent.