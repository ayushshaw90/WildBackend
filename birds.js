const birds=[{
     name:'Budgerigar',
    characteristics:['gentle', 'docile', 'easy to tame'],
    //diet
    diet:[
        //protein requirements in percentage
       'Good quality, pellet budgie food as their (base) diet',
       'Fresh vegetables',
       'Mineral supplements.' 
    ],
     //fact
    best:'Water should be available at all times',
    notBest:'Stopping your budgie putting on too much weight',
    //image
    image:'./budgerigar.jpeg'
},{
     name:'Cockatiel',
    characteristics:['gentle', 'affectionate', 'often like to be petted and held'],
    //diet
    diet:[
        //protein requirements in percentage
       'Fruits, vegetables and greens should account for approximately 20 - 25% of the daily diet',
       'Pale vegetables, with a high water composition (i.e. Iceberg or Head lettuce, celery) offer very little nutritional value',
       'Avocado is reported to be potentially toxic.' 
    ],
     //fact
    best:'Treat your bird like a small child; offer a small piece of a variety of food items daily and never stop trying. A well balanced diet must be maintained at all times.',
    notBest:'It is common sense that junk food, chocolate, products containing caffeine and alcoholic beverages be avoided.',
    //image
    image:'./cockatiel.png'
},{
    name:'Canary',
    characteristics:['cheerful,sweet,playful'],
    //diet
    diet:[
        //protein requirements in percentage
       'A canarys diet is largely made up of seeds. There are ready-prepared mixtures of various types of seeds: canary grass seeds, Venetian red rape, white millet, hulled oats, flaxseed, cardoon and perilla',
       'Pale vegetables, with a high water composition (i.e. Iceberg or Head lettuce, celery) offer very little nutritional value',
       'Avocado is reported to be potentially toxic.' 
    ],
     //fact
    best:'Apple is one of their favourite fruits hey are greedy for leafy vegetables like radicchio, chicory, lettuce, Belgian endive and spinach and they appreciate grated carrots',
    notBest:' It is wise to remove any leftovers from the cage at the end of the day, to prevent bacteria from developing.There are moments during the year when a canary is more stressed – these are the moment of reproduction and the change of season, which coincides with the change of plumage. To help him through this moment, it is a good idea to provide him with dietary supplements, vitamin products and mineral salts.',
    //image
    image:'./canary.png'
}]

module.exports = {birds}