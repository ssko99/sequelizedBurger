# sequelizedBurger
Demo at https://fast-beyond-84253.herokuapp.com/


Use Sequelize to interface with MySQL queries.


* Replacing your MySQL `Burger` model with a Sequelized equivalent.
* Eedit the model and initial migration file to make the burger's devoured field carry a default value of false -- otherwise you might encounter bugs.		

* Edit your new `config.json` file to include your database configurations. Place your JawsDB details in the `production` property of your json file; the details of your local database go in the `developer` property.

* Remove your old ORM file, as well as any references to it in `burgers_controller.js`. Replace those references with Sequelize's ORM methods.
