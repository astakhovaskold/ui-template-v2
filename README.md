# Documentation

This is a template for front-end apps based on React.

The project uses:

- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [React Query](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/en/main)
- [Ant Design](https://ant.design/) as UI library
- Eslint & Prettier

## Key features:

1. Bound Redux Toolkit with Redux Saga works with authorization processes.
2. React Query works as a query manager and caching tool.
3. Template includes the `RouteGuard` React component to manage access of different routes on client side.

Fake API, used in the template for auth REST API as JWT: https://fakeapi.platzi.com/en/rest/auth-jwt

This template could be improved. First of all I see a necessity to remove Redux at all (including Redux Saga) and use
only React Query for all project requests. 
