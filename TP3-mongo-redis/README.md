# TP3: MONGODB + Morphia / Redis
### Rappels:
* Les "tables" d'une base de données relationnelle (BDR) correspondent à des "collections" en BDOD.
* Une collection peut accueillir plusieurs structures de données différentes (une entrée = un "document").
    
###  les limites d’une base données orientées document (BDOD) 
Avec une BDR classique, une fois la structure créée, il est seulement possible d'ajouter des données qui correspondent à la structure de la base.
</br>
Avec une BDOD, le programmeur peut facilement insérer n'importe quel type de données dans n'importe quelle collection, ce qui implique un gros risque d'avoir des structures de documents inconsistentes ou obsolètes avec de nombreuses mises à jour. 

###  les types de données stockés dans Redis
Redis est une base de données open source de type clefs-valeurs mono-threadée. </br>
Elle accueille les données structurées suivantes : des chaînes de caractères, des listes, des hashs, des sets, des sets triés, des bitmaps, des coordonnées GPS.

###  types de requêtes 
Chaque structure de données gérée possède des caractéristiques uniques et commandes uniques.
Il est impossible de requêter les valeurs comme on le fait habituellement avec un WHERE dans une BDR, une valeur en table **n'est accessible que via une clé**.
Alors qu'une clé est stockée comme un tableau de bytes, on utilise essentiellement une string come clé.</br>
#### Exemples de requêtes selon la structure de données:
 Strings
 Hashes
 Lists
 get the 10 newest users
 multi get the actual 10 user objects
 Sets
 Sorted sets

