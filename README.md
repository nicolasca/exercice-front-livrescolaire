# Classe virtuelle

## Lancer l'application

L'application a été créée avec create-react-app. Voici les quelques instructions pour la lancer:

```
git clone https://github.com/nicolasca/exercice-front-livrescolaire.git
cd exercice-front-livre-scolaire
npm install
npm start
```

Et voilà !

## Les choix techniques

### Gestion du state

Pour un petit projet comme celui-ci, je voulais essayer **overmind** dont j'avais entendu du bien, qui est moins lourd que redux. Je l'ai trouvé pratique, je le réutiliserai à l'avenir.

### Style

En raison du contexte de test technique, j'ai voulu prendre aucune librairie de style pour éviter simplement l'utilisation de classes déjà toutes faites.  
Concernant l'application, j'ai mis en place l'encapsulation de classes avec les modules CSS.

## Axes d'amélioration:

- effectuer de nombreux tests sur les différents composants et la gestion du state
- le responsive: gérer l'affichage en mode mobile
- homogénéiser le nom des classnames dans l'application
- meilleure UX pour Edition/Ajout/Suppression de participants. Dans l'état actuel c'est laborieux.
- améliorer l'accessibilité (a11y)
- reprendre l'organisation et le découpage des composants (entre /student et /room notamment)
- Bonus: trouver des plus jolis rideaux et image de la professeure, car c'est esthétiquement pas optimal

## Temps passé

Lors de cet exercice, le temps passé est évalué à environ 1 journée 1/4.
2h pour initialiser le projet, organiser les principaux composants et overmind.
Et une journée de bureau pour ajouter les fonctionnalités et tenter d'améliorer la mise en page (UX/UI).

# Exercice d'architecture

## Temps passé

Environ 1/2 journée

### a/ Diagramme d'entité

![alt diagramme d'entité](/public/assets/exo-architecture/livre-scolaire-entites.png "Diagramme d'entité")

### b/ Choix techniques

Je vais être transparent dès le départ: mes connaissances en infrastructure et en cloud sont quasiment inexistantes. J'ai lu quelques articles sur les [différences multi-instance et multi-tenant](https://blog.scaleway.com/fr/saas-architecture-multi-tenant-vs-multi-instance/), ou sur l'organisation par exemple dans [le monde du jeu avec Google](https://cloud.google.com/solutions/gaming/cloud-game-infrastructure?hl=fr) (qui nécessite une session et des pics de connexions).
Je dois avouer que j'aurais des difficultés, avec si peu de temps, à pouvoir répondre à ces questions de manière mesurée.

### c/ Diagramme d'architecture

### d/ Comment aborder le problème de l'algorithme ?

Pour réaliser la conception de cet algorithme, je ferais tout d'abord un peu de recherche bibliographique pour me renseigner sur l'état de l'art.
Cette problématique de génération de question est étudiée depuis longtemps, et dans le domaine de l'informatique il devrait y avoir eu quelques travaux.

En faisant quelques recherches, j'ai pu trouver ce papier: [Automatic On-line Generation of Student's Exercises
in Teaching Programming](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.679.7627&rep=rep1&type=pdf) de l'Université de Zagreb.
A partir de ce moment, le travail de recherche peu réellement démarrer car cela me donne accès à de nombreux autres références et aux mots clés du domaine, eg _automatic assessment_, _online compilers_.
De plus ce papier propose une méthode de génération dans la partie 4 avec un système de templating.
Si cette méthode me semble claire et suffisante pour effecter un POC, alors je commencerais à faire quelques tests.
Si ce n'est pas le cas, je continuerais à rechercher des travaux plus récents dans le domaine, des projets open source s'ils existent.

En conclusion, avant de me plonger dans une réflexion conceptuelle et algorithmique, je prendrais du temps pour effectuer un travail de recherche sur le sujet.
