INSERT INTO products VALUES (
    1,
    'Test Product 1',
    '1.jpg',
    '',
    100,     -- 100/100 -> 1.00 USD
    'USD',
    80,
    'USD'
);


-- SELECT * FROM products;   
-- SELECT * FROM clients;
-- ALTER TABLE products ADD COLUMN const_standard_amount int not null;
-- DELETE FROM clients WHERE id = 1;

-- ALTER TABLE orders DROP COLUMN cost_amount;
-- ALTER TABLE orders DROP COLUMN cost_currency;
-- ALTER TABLE orders ADD COLUMN const_standard_amount int not null;
-- ALTER TABLE orders ADD COLUMN const_standard_currency varchar(4) not null;
-- ALTER TABLE orders ADD COLUMN const_discount_amount int;
-- ALTER TABLE orders ADD COLUMN const_discount_currency varchar(4) not null;

-- ALTER TABLE products ADD COLUMN price_discount_amount int not null;
-- ALTER TABLE products ADD COLUMN price_discount_currency varchar(4) not null;