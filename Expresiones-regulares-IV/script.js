/*
Carácteres:

\s: Coincide con un carácter de espacio, entre ellas incluidas espacio, tab, salto de página, salto de línea y retorno de carro. ^[a-zA-Z]+\s[a-zA-Z]+$

\S: Coincide con todo menos con carácteres de espacio. ^\S{5}$

\d: Coincide con un carácter de número. Equivalente a [0-9] ^\d{5}$

\D: Coincide con cualquier carácter no númerico. ^\D{5}$

\w: Coincide con culaquier carácter alfanumérico, incluyendo el guión bajo. Equivalente [A-Za-z0-9_] ^\w+@$

\W: Coincide con todo menos con caracteres de palabra. ^\W+$
*/