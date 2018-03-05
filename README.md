# Práctica final curso Docker

## Autor: Pedro Manuel Ramos Rodríguez

Repositorio utilizado para la entrega final del curso de Docker. En la misma, se puede encontrar un fichero `Dockerfile` y `docker-compose.yml` para crear un stack utilizando **Django**, **VueJs** y un componente de Vue para utilizar **ChartJs** como visualización de datos.

El objetivo de este Stack, es poder realizar una aplicación web moderna para visualizar los datos mediante una serie de gráficas. Django se utilizaría como lado servidor para gestionar las rutas y poder realizar un tratamiento de datos específico. Gracias a la potencia del lenguaje de programación **Python** que permite realizar este tratamiento de una manera más sencila, sería posible enviar estos datos al lado cliente. VueJs se utilizará como framework web de lado cliente para la demostración de los datos y poder usar un componente de Vue (*Chartkick*) para poder visualizar las gráficas generadas por los datos enviados desde el servidor.

En esta ocasión, no se ha utilizado Django para el envío de los datos sino que se generan datos aleatorios desde el lado cliente y se muestran directamente. Pero el objetivo de este stack es el definido anteriormente.


### Ejecución del compose

Para realizar la ejecución del docker-compose y se genere el stack, sólo hay que ejecutar la siguiente instrucción:

```shell
docker-compose up
```

Una vez se instalan todos los paquetes y se genera el contenedor, para visitar la página creada visitar `localhost:8000` ó `0.0.0.0:8000`
