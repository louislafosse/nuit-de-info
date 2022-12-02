var Sentences = ["La fellation c'est bien mais avec préservatif c'est mieux",
"Se faire dépister! Pour profiter de la meilleure expérience sexuelle\nLes MST peuvent être transmises lors d’une fellation sans protection. Le VIH peut être transmis lorsque l’une des 2 personnes est séropositive et qu’une plaie ouverte est présente dans la bouche.",
"Les moustiques sont justes nuisibles\nContrairement à ce que l’on pense, les moustiques sont incapables de transmettre le VIH  puisque ce dernier ne peut pas se reproduire dans les glandes.",
"Sortir non couvert c'est s'assurer une mort fatale\nLes effets visibles du VIH ne le sont que lors de la phase terminale de la maladie et cette phase conduit à une mort certaine au bout d’un an. Évitez qu’il soit trop tard pour vous dépister.",
"Le dépistage ? C'est gratuit nan ?\nLe dépistage est gratuit dans tous les CEGIDD (Centre Gratuit d’Information, de Dépistage et de Diagnostic), les laboratoires d’analyses médicales et les TROD (locaux associatifs).",
"Pensez à vous avant votre partenaire\n",
"29% des personnes séropositives sont dépistées à un stade avancé de l'infection\n",
"Parlez à vos partenaires\n",
"protégez vos muqueuses\n",
"Vous n'êtes pas sûrs ? Contactez la ligne Azur\nLa ligne azur est un numéro que vous pouvez appeler si vous avez des questions ou si vous vous sentez mal, ils ne sont pas là pour vous juger mais pour vous écouter et vous conseiller. Joignez-les aux 0 810 20 30 40.",
"Le sang est la principale cause du Sida\n29% des personnes atteintes du VIH découvrent leur séropositivité à un stade avancé de l'infection ",
"À l'image du comcombre, sortez couverts\n",
"cuCUMber\nCUM"]

function gros_lol() {
    var i = Math.floor(Math.random() * 12);
    console.log(i)
    let sentence = Sentences[i];
    document.getElementById("lol").innerText = sentence
}
gros_lol()
setInterval(gros_lol, 8000)
