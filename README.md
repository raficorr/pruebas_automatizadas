## pruebas_automatizadas

# Entrega semana 7

# Integrantes

Rafael Rodriguez

Escenarios

| numero | Escenario                 | Tipo de Test |
|--------|---------------------------|--------------|
| 1      | Login                     | Positiva     |           
| 2      | Crear titulo Post         | Positiva     |            
| 3      | Crear post                | Positiva     |            
| 4      | Titulo Page               | Positiva     |            
| 5      | Crear page                | Positiva     |            
| 6      | Crear member name         | Positiva     |            
| 7      | Crear member name         | negativo     |            
| 8      | Crear member email        | Positiva     |            
| 9      | Correo member             | negativo     |            
| 10     | Crear nota member         | Positiva     |            
| 11     | Crear nota member         | negativo     |            
| 12     | Validar Fecha Post        | Positiva     |            
| 13     | Validar Fecha Post        | negativo     |            
| 14     | Validar hora Post         | Positiva     |            
| 15     | Validar hora Post         | negativo     |            
| 16     | Longitud campo except     | Positiva     |            
| 17     | Longitud campo except     | negativo     |            
| 18     | Name tag                  | Positiva     |            
| 19     | Name tag  maxima longitud | Positiva     |            
| 20     | Descripción tag valido    | Positiva     |            
| 21     | Descripción tag longitud  | Positiva     |            
| 22     | Tag color                 | Positiva     |            
| 23     | Tag color                 | negativo     |            
| 24     | Login suscribe name       | Positiva     |            
| 25     | View_mail                 | Positiva     |            
| 26     | View_mail                 | negativo     |            
| 27     | Name                      | negativo     |            
| 28     | Settings meta Description | Positiva     |            
| 29     | Settings meta Description | negativo     |            
| 30     | Settings staff web        | Positiva     |            
| 31     | Settings staff web        | positiva     |

# implementación:

Node Version: v16.14.2
Version de Ghost:Ghost version: 4.42.0

mkdir ghost - para crear el nuevo directorio;

cd ghost - para ejecutar comandos desde el directorio.

Ahora que su terminal está ubicada en el directorio deseado, ejecute el comando de instalación con las herramientas que recién descargó:

ghost install local

url: http://localhost:2368

Las pruebas se realizaron en playwright
