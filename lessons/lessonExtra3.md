# Formación adicional 3 - Conceptos básicos de Domain Driven Design

Domain Driven Design es un paradigma de diseño de software que parte del modelado del espacio problema mediante la identificación de conceptos y procesos clave y su representación en un modelo a través de la colaboración entre los así llamados **expertos del dominio** y los desarrolladores.

El DDD comienza con la adquisición masiva de conocimiento sobre el dominio, a fin de poder modelarlo y generar un modelo que lo represente correctamente.

### El dominio

El dominio es en esencia de lo que trata el negocio, y por lo tanto de lo que trata la aplicación. Forman parte del dominio los conceptos que se manejan, su relaciones y los procesos que operan en el. El objetivo es representar el dominio en un modelo que después vamos a implementar en software.

En este sentido, el dominio de una empresa no será igual que el de otra empresa. A pesar que hayan elementos en común, pueden tener tantas diferencias como para no poder ser intercambiables.

Los expertos de dominio son las personas que trabajan día a día en ese negocio, lo conocen, manejan los conceptos, los entienden y saben explicar como se relacionan.

### El lenguaje ubicuo

El lenguaje ubicuo es el lenguaje que utilizan los expertos de dominio para referirse a los conceptos que usan en el día a día, y que por lo tanto, se requiere que en código quede expresado.

Este lenguaje se requiere que se use y esté presente en todas partes, en las conversaciones, en la documentación, en los diagramas y en el código. De esta manera, un experto de dominio puede ver el código e incluso hacerse una idea de lo que está expresado en el.

Por ejemplo, en un colegio sería necesario dedicar un tiempo a representar los conceptos relacionados a la palabra curso, como año académico, grupo de clase, etc.

Una de las cosas importantes a tratar en estas conversaciones son los llamados eventos de dominio, que podrían ser la calificación que recibe un alumno, la materia o curso, el período de evaluación, etc. Estos eventos indican que han ocurrido eventos anteriores, como que el alumno se ha matriculado, que el profesor ha hecho una actividad evaluable, y muchos otros conceptos implicados.

### Core Domain

Dentro del dominio, siempre hay un tema central que le da el sentido, a esto lo llamamos el Core Domain. Es lo que hace único e irremplazable al negocio. 

Para el caso del colegio, el core domain es el aprendizaje. La formación de los estudiantes es la que lo hace todo posible, el resto son solo estructuras necesarias para dar soporte a ese nucleo central.

### Subdominios

Ahora bien, dentro del dominio se podrían indentificar subdominios. Los subdominios están formados por conceptos que están relacionados entre sí, y suelen corresponder a divisiones de la empresa que están aisladas entre sí, pero igual participan todas dentro del dominio. Dentro de Selectra, en la parte de energía podemos encontrar el subdominio de productos, y el subdominio del bono social, por ejemplo.

### Bounded contexts

Uno de los primeros pasos para atajar la complejidad del dominio está en identificar los Bounded Contexts. Un bounded context es una parte de un dominio en la que viven conceptos y procesos propios, que no participan en las demás partes, y en las que algún concepto general pueda tener un significado distinto. 

Por ejemplo, en el dominio de Selectra, un producto en el area de energía no es lo mismo que un producto en el area de telecom, por lo tanto definimos un bounded context para energía, y uno para telecom. Dentro de los cuales, los productos tienen diferentes propiedades y características. 

Es importante mantener la frontera entre ellos, un bounded context no se debe comunicar con otro bounded context.

### Entidades

Cada concepto que identifiquemos que tiene una identidad, y conserva su individualidad a lo largo de su ciclo de vida a pesar de los cambios que pueda sufrir en sus propiedades, lo denominamos una entidad. En el contexto de Selectra, un lead sigue siendo un lead, a pesar de que pase por diversos productos, o seleccione diferentes opciones en los funnels.

### Value Objects

Son objetos que se caracterizan por sus propiedades, no nos preocupa su identidad y no cambian a lo largo de su ciclo de vida, podría ser el tipo de un usuario (admin, user, guest), el precio de un producto, etc.

### Agregados

A medida que aprendemos sobre el dominio nos vamos dando cuenta que ciertas entidades y value objects viven tan estrechamente relacionadas que mantienen una relación de dependencia. Un ejemplo sería el precio de un producto, que no tiene sentido ni identidad por si solo sino siempre con relación al producto. Este tipo de relación la denominamos Agregado.

Por lo tanto un agregado es un conjunto de entidades y value objects y se maneja a travez de una de las entidades, llamada la raíz del agregado.

### Servicios

Un servicio de dominio es una operación sin estado que encapsula lógica de dominio u operaciones que naturalmente no entran dentro de los límites de una entidad o un value object. Son servicios que simplemente ejecutan acciones o proveen funcionalidad específica que no pertenece a una sola entidad.

Por ejemplo, para calcular el coste total de un producto están involucrados diferentes reglas del negocio, como podrían ser descuentos, impuestos, etc. En lugar de estar esparciendo esta lógica por diferentes entidades, se puede crear un servicio de dominio que sea una calculadora de precios, que encapsule toda la lógica asociada, haciendo que sea mas sencillo de mantener y de testear.

### Repositorios

Un repositorio es aquello que mapea la data que recibe de la base de datos y la convierte en una estructura, y provee una interfaz a la cual pueden acceder los agregados.

### Arquitectura Hexagonal

La arquitectura hexagonal es un patrón que apunta a separar nuestra aplicación en distintas capas con su propia responsabilidad. Con esto logramos que los componentes sean intercambiables en cualquier nivel, permitiendo que evolucionen de manera aislada.

Gracias a esto, podemos testear estas capas sin que intervengan otras externas, falseando el comportamiento con fixtures y mocks, por ejemplo.

Con esta arquitectura apuntamos a que la lógica de negocio no se vea afectada por la fuente de datos. Cambiar de un MySQL a un mongo o a un google sheet no debería de ser un problema siguiendo este patrón.

En GO podemos encontrar las siguientes capas:

- Dominio: representa la data y los conceptos de negocio de la aplicación, y es responsable de manejar las reglas del negocio.
- Aplicación: Contiene la lógica de negocio de la aplicación, incluyendo las reglas y procesos que gobiernan el comportamiento de la aplicación.
- Infrastructura: La capa mas externa, que conecta la aplicación con la base de datos, peticiones de red, etc.

Otra capa que se suele definir sería la capa de presentación, encargada de mostrar la UI, pero hemos tomado la decisión de incluir esta capa dentro de la capa de infrastructura, ya que también conecta la aplicación con el input del usuario, actuando como una fuente de datos.