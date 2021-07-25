# General Information
1. Used create-react-app boilerplate to setup the skeleton.
2. Application will work on **Google Chrome & Firefox** as it uses ES6 without transpilation to ES5.
3. Redux & Redux-Saga middleware have been setup from scratch, without using any boilerplate.
4. Axios has been used for XHR calls.
5. **Roboto** font has been used.
6. Wherever possible, Block, Elements, Modifier(BEM) methodology has been used to name CSS classes.




# Steps to run the application
1. Clone the repository locally.
2. Run **npm install** under root folder(where package.json is placed).
3. Go to root folder and run **yarn start**. This will initiate webpack-dev-server.
4. Browser will automatically open up with application rendered on **localhost:3000/ally/home**.



# Routes
1. There is just one application route called **/ally/home**.
2. Any invalid route would render a no-match view.




# Corrupted/Incorrect data returned by API
Noticed a few key-result objects having corrputed parent_objective_id, example below:

```json
"parent_objective_id": " stock photos and illustrations)\""
```



# Filters
1. Filter selection will render the list to show limited results.
2. Multiple filters can be selected.
3. Complete selection/unselection will render the entire data.




# Expand and Collapse
1. Expand/Collapse would work on clicking on **arrows only**. This has been done to keep toggle and show-details behavior separate.
2. **Persistent Behavior:** Toggle state is persisted even on selection/unselection of filters.




# Responsiveness
1. Mobile friendly.
2. Upto width of **768px**, filters and OKRs will be rendered in a stacked fashion.
3. Above **768px**, filters and OKRs will be rendered adjacent.
4. Category pills will only render above 1000px.



# Things added for visual ease
1. **Category Pills:** Added a pill adjacent to Objective title to make it easy to validate filter behavior.
2. **API Delay:** Added a **deliberate delay of 2s** in service in order to render loader for a moment.
3. **Expand/Collpase:** Simple effect as been added.
4. Added count of rendered records in the heading of OKRs section.
5. Color of objective and key-results title is kept as a shade of blue. This would clearly indicate that they are clickable.
6. **Scroll to Top** has been added for operational ease.
7. If any objective doesn't have any key-result, we'll show "No key results to display" message.





# Things not covered
1. Avatar images are not there.
2. Error Boundaries are not used. Instead have used a connected container component called **GlobalErrorHandler**.
