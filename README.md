# heroes
Full-stack GraphQL app based on Node, Express, React, Relay, MongoDB

## Now we have two models:

### Hero
### Skill

First, we can create a *Hero*, then add some *skills*. We can create the *Hero* withowt *skills*, and then update him, adding one or more *skills*, and removing the same.

*We cannot create skill without a Hero.* 

When we remove the *Hero*, all it's *skills* shoild be removed automatically. *Hero* model has the *skills* field with array of IDs.

At this stage, "Heroes" project has two models with *create*, *read*, *update* and *delete* functionality and with *relation* between that models.
