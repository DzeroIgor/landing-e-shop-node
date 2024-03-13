








# JS advanced / node / e-shop LANDING




index page
+----------------------------------------------+
|                                              |
|                                              |
|     +--------------------------+             |
|     |                          |             |
|     |                          |             |
|     |    PRODUCT INFO          |             |
|     |                          |             |
|     |                          |             |
|     +--------------------------+             |
|                                              |
|     +--------------------------+             |
|     |                          |             |
|     |    ORDER ACTION          |             |
|     |                          |             |
|     +--------------------------+             |
|                                              |
|                                              |
|                                              |
+----------------------------------------------+


 app.mjs   <------> console
    ^
    |
connector ( driver: pg, pg-promise )
    ^
    |
docker container
    ^
    |
database ( postgres )





+-------------------+
|                   |
|                   | <--------- pull "postgres" image from docker hub <---------------- [DOCKER HUB]
|                   |
|                   | <--- UPDATE THE IMAGE (based on configs) 
|                   |
+-------------------+
   |
   |
   |
   V
container
+----------------------------+
|                            |
|                   5432  <------------ ports -----------> 6032
|                    |       |
|  [postgresql] -----+       +----------- db: 356mb max memory (based on configs)
|  server                    |
|   |  |                     |                      LANDING-E-SHOP-NODE
|   V                        |                              |
| /var/lib/postgresql/data  <------- volumes -------->   ./data
|                            |
+----------------------------+


HW:

0. Upgrade the table products using ALTER TABLE (sql) adding the column for price discount
1. Add a class named Product in a separate module named Product.mjs
2. Refactor SQL query - so you get only the product with theID = 1
3. Wrap the result in an object from the Product object class


## HW2: get to this point and draw the table diagram
## HW3: add the Order.mjs, Client.mjs and Payment.mjs - for the corresponding classes

## HW4: add the function "addClient()": will create a client object in the memory, will save the client into the db and will return corresponding object









rename a column in the table 
-- ALTER TABLE products RENAME price_currency TO price_standard_currency;






# Mini  http server

                              +----------------------------------------+   
                              |                                        |
  client (browser)            |               server (nodejs)          |
+-----------------+           |             +--------------------+     |
|                 |           |             | handler  +------------------+ 
|                 |           |             |+->(req, res) => {  |     |  |
|                 |   HTTP    |             ||                   |     |  |
|                 | ------->  x localhost   ||                   |     |  |
|                 |   req     |    |        ||   }               |     |  |
|                 |           |    + 3000 ---+                   |     |  |
+-----------------+           |    +        +--------------------+     |  |
             ^                     + .                                    |
             |        res          + .                                    |
             +------------------------------------------------------------+
                                   + .
                                   + .      +-----------------+
                                   + 6032 ---> postgresql     |
                                                              |