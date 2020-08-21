migration -> seed -> model -> server -> frontend

NAMING CONVENTIONS
database Schema "entry_field"

setup basic tbl.("types")
create model
setup basic router
-middleware validation on notNull constraints
-setup CRUD routes in new router
-add route to api-router
-test all endpoints w/ POSTMAN
--create new folder for route in collection
--change url path and body for each request
--\*hint you can copy the body from the seeds
--validate POST/PUT/DELETE by checking database

- lowercase, separate words with \_
