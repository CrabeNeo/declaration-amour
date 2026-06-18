// ❤️ Personnalise tout ton site ici, sans toucher au reste du code.

export const config = {
  // Le prénom de la personne aimée
  prenom: 'Mon ange',

  // Ton prénom (signature)
  deTaPart: 'Néo ton petit chat',

  // Section d'accueil
  accueil: {
    titre: 'Pour toi',
    sousTitre: 'Quelques mots que je n’ai jamais vraiment su te dire…',
  },

  // Les raisons pour lesquelles tu l'aimes (ajoute-en autant que tu veux)
  raisons: [
    {
      icone: 'eye',
      titre: 'Tes yeux',
      texte: 'Je pourrais m’y perdre des heures ; ils racontent tout ce que les mots ne disent pas.',
    },
    {
      icone: 'smile',
      titre: 'Ton sourire',
      texte: 'Il illumine mes journées les plus grises et me rappelle pourquoi je suis heureux.',
    },
    {
      icone: 'star',
      titre: 'Ton physique',
      texte: 'Ta beauté me fait chavirer à chaque fois que mon regard se pose sur toi.',
    },
    {
      icone: 'heart',
      titre: 'Ta gentillesse',
      texte: 'Ta douceur envers les autres me touche et me donne envie d’être meilleur.',
    },
    {
      icone: 'lightbulb',
      titre: 'Ton intelligence',
      texte: 'Ta façon de penser et de voir le monde m’émerveille et m’inspire sans cesse.',
    },
    {
      icone: 'mountain',
      titre: 'Ta persévérance',
      texte: 'Ta force et ta détermination face à tout font de toi une personne admirable.',
    },
    {
      icone: 'users',
      titre: 'Tes câlins',
      texte: 'Me blottir contre toi, là où je me sens le plus en sécurité au monde.',
    },
    {
      icone: 'gem',
      titre: 'Ton authenticité',
      texte: 'Tu es vraie, fidèle à toi-même, et c’est ce qui te rend si précieuse à mes yeux.',
    },
    {
      icone: 'moon',
      titre: 'Ta présence',
      texte: 'À tes côtés, le temps s’arrête et le monde devient plus doux.',
    },
  ],

  // Vos souvenirs / moments marquants
  souvenirs: [
    {
      date: 'La salle de sport',
      texte: 'Là où nos chemins se sont croisés pour la toute première fois.',
    },
    {
      date: 'Le soir de Baki vs Doumbé',
      texte: 'On s’ajoute sur Instagram pendant le combat… et on parle jusqu’à 3h du matin.',
    },
    {
      date: 'Notre premier rendez-vous',
      texte: 'Peu de temps après : chez moi, devant un film, autour de sushis. Une soirée parfaite.',
    },
    {
      date: 'Notre premier baiser',
      texte: 'Quelques jours plus tard, ce moment suspendu qu’on n’oublie jamais.',
    },
    {
      date: 'On se met ensemble',
      texte: 'Un événement majeur vient tout bousculer… et nous rapproche pour de bon.',
    },
    {
      date: 'Des vacances avec mes parents',
      texte: 'Mes parents partent en vacances, et elle nous accompagne. Un beau pas en avant.',
    },
    {
      date: 'Son anniversaire',
      texte: 'Célébrer sa journée à elle, tout simplement à ses côtés.',
    },
    {
      date: 'Notre premier Noël',
      texte: 'Les fêtes ensemble pour la première fois, et la magie en plus.',
    },
    {
      date: 'Notre premier Nouvel An',
      texte: 'Minuit, un baiser, et mille promesses pour la nouvelle année.',
    },
    {
      date: 'Nos 1 an',
      texte: 'Une première année d’amour déjà derrière nous, et tellement d’autres devant.',
    },
    {
      date: 'Encore des vacances',
      texte: 'De nouveaux souvenirs et de nouveaux horizons, ensemble.',
    },
    {
      date: 'Une période compliquée',
      texte: 'Des épreuves traversées à deux, qui nous ont rendus plus forts et plus soudés.',
    },
    {
      date: 'Une surprise à Noël',
      texte: 'Un Noël pas comme les autres, avec une jolie surprise à la clé.',
    },
    {
      date: 'Nos 2 ans',
      texte: 'Deux années à tes côtés, et un amour qui ne cesse de grandir.',
    },
    {
      date: 'Aujourd’hui',
      texte: 'On envisage d’emménager ensemble, et nos premières vraies vacances à deux approchent à grands pas.',
    },
  ],

  // ===== Les galeries photos =====
  // Pour chaque photo : remplace le fichier dans public/photos/ par ta vraie image
  // (même nom), ou change le chemin "src". Tu peux aussi modifier/supprimer "legende".

  // Section beauté / physique
  beaute: {
    titre: 'Sa beauté',
    sousTitre: 'Une femme des plus magnifiques, à m’en couper le souffle.',
    colonnes: 3,
    anim: 'zoom',
    photos: [
      { src: '/photos/beaute/1.jpg', legende: '' },
      { src: '/photos/beaute/2.jpg', legende: '' },
      { src: '/photos/beaute/3.jpg', legende: '' },
      { src: '/photos/beaute/4.jpg', legende: '' },
      { src: '/photos/beaute/5.jpg', legende: '' },
      { src: '/photos/beaute/6.jpg', legende: '' },
    ],
  },

  // Section sport
  sport: {
    titre: 'Une sportive acharnée',
    sousTitre: 'Un physique des plus impressionnants et sexy.',
    colonnes: 3,
    anim: 'lift',
    photos: [
      { src: '/photos/sport/1.jpg', legende: '' },
      { src: '/photos/sport/2.jpg', legende: '' },
      { src: '/photos/sport/3.jpg', legende: '' },
      { src: '/photos/sport/4.jpg', legende: '' },
      { src: '/photos/sport/5.jpg', legende: '' },
      { src: '/photos/sport/6.jpg', legende: '' },
    ],
  },

  // Section humour (donne-moi les légendes drôles quand tu veux)
  humour: {
    titre: 'Mais surtout…',
    sousTitre: '',
    colonnes: 2,
    photos: [
      { src: '/photos/humour/1.jpg', legende: 'Une joie de vivre' },
      { src: '/photos/humour/2.jpg', legende: 'Une pensive née' },
      { src: '/photos/humour/3.jpg', legende: 'Un sourire à couper le souffle' },
      { src: '/photos/humour/4.jpg', legende: 'Des yeux remplis d’amour' },
    ],
  },

  // La grande déclaration finale
  declaration: {
    titre: 'Je t’aime',
    texte:
      'Aucune autre femme ne pourrait me combler plus que toi. Et je ne te changerai pour rien au monde.',
    question: 'Veux-tu voir la fin de ta surprise ?',
    bouton: 'Oui',
    // Message affiché dans la popup après le clic sur « Oui ».
    // Utilise des retours à la ligne (\n) pour aérer ton texte.
    messageTitre: 'Mon ange',
    message:
      'Mon ange, je sais qu’en ce moment c’est compliqué et qu’on est loin l’un de l’autre. Mais si j’ai fait ce petit travail, c’est pour te dire à quel point je t’aime, à quel point je suis fier de toi, de l’avancement de ton travail et de la façon dont tu restes forte, même quand ça va mal.\n\n' +
      'Sache que pour moi tu es la plus belle du monde. Physiquement, je suis fou de toi : de tes yeux, de tes lèvres, de tes cheveux, de ton corps. Je pourrais craquer pour toi mille fois. Si je perdais la mémoire, ce serait une chance, parce que je pourrais réellement retomber amoureux de toi.\n\n' +
      'Tu es la plus belle rencontre que j’aie faite, la meilleure chose que Rodez m’ait apportée. Et je ne changerais jamais rien au passé, car finir avec toi est la seule chose que je veux.\n\n' +
      'Je t’aime,\nNéo ton petit chat',
  },
}
