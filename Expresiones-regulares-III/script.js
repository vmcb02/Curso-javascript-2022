/*
Delimitadores:
^ Antes de este símbolo no puede haber nada
$ Después de éste simbolo no puede haber nada
^hola$

Cantidad:
-llaves: Lo que está antes tiene que aparecer la cantidad exacta de veces. hay tres combinaciones posibles.
{n} Se tiene que repetir n veces
{n,m} Se tiene que repetir entre n y m veces, ambas incluidas.
{n,} Se tiene que repetir como mínimo n veces y sin máximo 
^[a-zA-Z]{1,3}@{1}$

-asterisco: Lo que está antes del asterisco puede estar, puede no estar y se puede repetir. .*@.*\..*

-interrogación: Lo que está antes de la interrogación puede no estar, pero si está solo puede aparecer una vez
^[ae]?$

-operador más: Lo que está antes del + tiene que estár una vez como mínimo
A-[0-9]+

*/