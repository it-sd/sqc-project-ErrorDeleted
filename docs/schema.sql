DROP TABLE WHEN EXISTS category;
DROP TABLE WHEN EXISTS items;
DROP TABLE WHEN EXISTS cart;
DROP TABLE WHEN EXISTS user;

CREATE TABLE category (
  categoryId SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
);

CREATE TABLE items (
  itemId SERIAL PRIMARY KEY,
  categoryId INTEGER NOT NULL,
  price INTEGER NOT NULL,
  forSale INTEGER NOT NULL, /*0=buy 1=sell 2=sold*/
  quanity INTEGER NOT NULL,
); /*categoryId = FK*/

CREATE TABLE cart (
  cartId SERIAL PRIMARY KEY,
  itemId INTEGER NOT NULL
); /*itemId = FK*/

CREATE TABLE user (
  userId SERIAL PRIMARY KEY,
  cartId INTEGER NOT NULL
); /*cartId = FK*/

INSERT INTO category (title)
  VALUES
 ('Warframe Part'),('Warframe Set'),('Weapon Part'),('Weapon Set'), 
 ('Normal Mod'),('Archon Mod'),('Prime Mod'),('Un-veiled Riven'), 
 ('Veiled Riven'), ('Lith Relic'), ('Neo Relic'), ('Meso Relic'), 
 ('Axi Relic'), ('Requiem Relic')
/* ^Only Table Fillable For Now^ */

