# Classe virtuelle

## Lancer l'application

L'application a été créé avec create-react-app. Voici les quelques instructions pour la lancer:

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

En raison du contexte de test technique, j'ai voulu n'utiliser aucune librairie de style pour éviter simplement l'utilisation de classes déjà toutes faites.  
Concernant l'application, j'ai utilisé l'encapsulation avec les modules CSS.

## Axes d'amélioration:

- effectuer de nombreux tests sur les différents composants et la gestion du state
- le responsive: gérer l'affichage en mode mobile
- homogénéiser le nom des classnames dans l'application
- meilleure UX pour Edition/Ajout/Suppression de participants. Dans l'état actuel c'est laborieux.
- améliorer l'accessibilité (a11y)
- reprendre l'organisation et le découpage des composants (entre /student et /room notamment)
- Bonus: trouver des plus jolis rideaux et image de la professeure, car c'est esthétiquement pas optimal

## Temps passé

Lors de cet exercice, le temps passé est évalué à environ 1 journée 1/3.
Environ 2-3h pour initialiser le projet, organiser les principaux composants et overmind.
Et une journée de bureau environ pour ajouter les fonctionnalités et tenter de trouver des interactions intéressantes (UX) et une belle esthétique (UI).
