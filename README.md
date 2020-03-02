# AppClearSand
Un aplicacion que te permite saber el estado de las playas nacionales, y asi poder crear eventos para poder limpiar las playas 
La finalidad de esta app es transmitir el estado de las playas y asi actuar, para poder seguir disfrutando de ellas

End points chart.

Method 	End-point	        Descripcion
GET	    /	                Se muestran los eventos mas proximos
GET	    /search?	        Se puede buscar las playas
GET	    /signup	            Pantalla para registrarte
POST	/signup	            Recibir informacion por un formulario y se guarda en BBDD
GET	    /login	            Muestra la pantalla para logearse
POST	/login	            Recibe la informcion del formulario y la compara con la que esa ta la BBDD
GET	    /profile	        Muestra la inforcacion proporcionada por el usuario, y los eventos en los que particip y en los que crea
GET	    /profile/edit/:id	Muestra la pantalla donde se puede editar su perfil
POST	/profile/edit/:id	Recoge la informacion que quieres actualizar el usuario y la cambia en la BBDD
GET 	/beach	            Se muestra la playa donde aparecen sus eventos
GET	    /events/new-event	Se muestra un formulario para crear un envento de limpieza de playas
POST	/events/new-event	Se guarda en evento en la BBDD
GET 	/events/id      	Se muestra la informacion del evento
POST	/events/id	        Se crea el comentario
