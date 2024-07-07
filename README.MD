* SCATCH - A E-commerce platform for Premium Bags
----------------------------------------------------------------------------------------------------------

Stack Used
--------------------------------------------------------
>Ejs template
>TailwindCSS
>Javascript
>NodeJS
>ExpressJS
>Mongoose
>MongoDB(Database)



MODELS:-
--------------------------------------------------------
UserModel:-
------------------------------------
* username
* fullname
* email
* password
* cart
* orders
* contact
* picture



Product model
------------------------------------
* image
* name
* price
* discount
* bgcolor
* panelcolor
* textcolor


Owner Model
------------------------------------
* fullname
* email
* password
* products
* picture
* gstin


Routes
--------------------------------------------------------
* /                        ->Register User and Login
* /shop                    ->Display of products
* /cart                    ->Added products to buy
* /addtocart/product_id    ->to add products to cart

* /users/register          -> To register new User
* /users/login             -> To Login for existing user
* /users/logout            -> To Logout

* /owners/create           ->To create Owner (seller)
* /owners/admin            ->To add products to available for users

* /products/create         ->To able Owners to add Products













