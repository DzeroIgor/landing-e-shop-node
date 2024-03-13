CREATE TABLE products (
    id int PRIMARY KEY,
    name varchar(200) not null,
    image varchar(100) not null,
    description varchar(1000),
    price_standard_amount int not null,
    price_standard_currency varchar(4) not null,
    price_discount_amount int not null,
    price_discount_currency varchar(4) not null

);

ALTER TABLE products
ADD COLUMN price_discount int not null;

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    product_id int not null,
    quantity int not null,
    client_id int not null,
    placed_on timestamptz,
    completed_on timestamptz,
    const_standard_amount int not null,
    const_standard_currency varchar(4) not null,
    const_discount_amount int, 
    const_discount_currency varchar(4) not null, 
    CONSTRAINT fk_order_product FOREIGN KEY (product_id) REFERENCES products (id),
    CONSTRAINT fk_order_client FOREIGN KEY (client_id) REFERENCES clients (id)
);
CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    full_name varchar(60) not null,
    email varchar(100) not null,
    phone varchar(20) not null
);
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    remote_id varchar(200),
    client_id int not null,
    order_id int not null,
    complete_on timestamptz,
    state varchar(10) not null,
    bill_amount int not null,
    bill_currency varchar(4) not null,
    CONSTRAINT fk_payment_order FOREIGN KEY (order_id) REFERENCES orders (id),
    CONSTRAINT fk_payment_client FOREIGN KEY (client_id) REFERENCES clients (id)
);