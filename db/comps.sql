-- DB comps

-- Alter Table
ALTER TABLE users
RENAME TO my_users;


-- many to many 
-- you would join on this table to do a many to many
CREATE TABLE orders (id SERIAL PRIMARY KEY, order_id INT, user_id INT references users(id), prod_id INT references products(prod_id));




-- Subqueries 
SELECT *
FROM customers
WHERE state_id IN(
	SELECT state_id
  from states
  where states.name = 'Utah'
);