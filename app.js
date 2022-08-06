const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")

const dbURI = "mongodb+srv://animal:animal-hacks@mflix.b27hn.mongodb.net/animal-hacks?retryWrites=true&w=majority"


//data



//models and schema
const Schema = mongoose.Schema;
const DogSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    diet: [{ type: String }],
    characteristics: [{ type: String }],
    best: {
        type: String,
        required: true
    },
    notBest: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    }
},
{
    statics:{
      findByName(dogname){
        return this.find({ name: dogname});
      }
    }
})

const Dog = mongoose.model('Dog', DogSchema);

const CatSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    diet: [{ type: String }],
    characteristics: [{ type: String }],
    best: {
        type: String,
        required: true
    },
    notBest: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    }
},
{
    statics:{
      findByName(catname){
        return this.find({ name: catname});
      }
    }
})

const Cat = mongoose.model('Cat', CatSchema);

const BirdSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    diet: [{ type: String }],
    characteristics: [{ type: String }],
    best: {
        type: String,
        required: true
    },
    notBest: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    }
},
{
    statics:{
      findByName(birdname){
        return this.find({ name: birdname});
      }
    }
})

const Bird = mongoose.model('Bird', BirdSchema);

const FishSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    diet: [{ type: String }],
    characteristics: [{ type: String }],
    best: {
        type: String,
        required: true
    },
    notBest: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    }
},
{
    statics:{
      findByName(fishname){
        return this.find({ name: fishname});
      }
    }
})

const Fish = mongoose.model('Fish', FishSchema);


const app = express()
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST']
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const port = 80

//routes

app.post('/getdog', async (req, res) => {
    console.log(req.body)
    let dogname = req.body.name;
    let found = await Dog.findByName(dogname);
    console.log("Dog");
    console.log(found);
    res.json({responce: found});
})
app.post('/getcat', async (req, res) => {
    let catname = req.body.name;
    let found = await Cat.findByName(catname);
    console.log("Cat");
    console.log(found);
    res.json({responce: found});
})

app.post('/getbird', async (req, res) => {
    let birdname = req.body.name;
    let found = await Bird.findByName(birdname);
    console.log("Bird");
    console.log(found);
    res.json({responce: found});
})

app.post('/getfish', async (req, res) => {
    let fishname = req.body.name;
    let found = await Fish.findByName(fishname);
    console.log("Fish");
    console.log(found);
    res.json({responce: found});
})


/*
const dogsdata = require("./dogs.js").dogs
app.get('/add-dog',async  (req, res) => {
    // const dog = new Dog({
    //     name: "Labrador Retriever",
    //     diet: ["protein#20g", "calcium#20mg"],
    //     characteristics: ["just a dog", "good dog"],
    //     best: "Best dog",
    //     notBest: "Not the best dog",
    //     image: "labrador.jpg"
    // })
    dogsdata.forEach(async (item)=>{
        const obj = new Dog({
            name: item.name,
            diet: item.diet,
            characteristics: item.characteristics,
            best: item.best,
            notBest: item.notBest,
            image: item.image
        })
        await obj.save()
    })

    // dog.save()
    //     .then((result) => {
    //         res.send(result)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
})
*/
/*
const catsdata = require('./cats.js').cats;
app.get('/add-cat', (req, res) => {
    // const cat = new Cat({
    //     name: "Labrador Retriever",
    //     diet: ["protein#20g", "calcium#20mg"],
    //     characteristics: ["just a dog", "good dog"],
    //     best: "Best dog",
    //     notBest: "Not the best dog",
    //     image: "labrador.jpg"
    // })
    // cat.save()
    //     .then((result) => {
    //         res.send(result)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    catsdata.forEach(async (item)=>{
        const ca = new Cat({
            name: item.name,
            diet: item.diet,
            characteristics: item.characteristics,
            best: item.best,
            notBest: item.notBest,
            image: item.image
        })
        await ca.save()
    })
    res.send("Success")
})

*/
/*
const birdsdata = require('./birds.js').birds

app.get('/add-bird', (req, res) => {
    // const bird = new Bird({
    //     name: "Labrador Retriever",
    //     diet: ["protein#20g", "calcium#20mg"],
    //     characteristics: ["just a dog", "good dog"],
    //     best: "Best dog",
    //     notBest: "Not the best dog",
    //     image: "labrador.jpg"
    // })
    // bird.save()
    //     .then((result) => {
    //         res.send(result)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    birdsdata.forEach(async (item)=>{
        const bird = new Bird({
            name: item.name,
            diet: item.diet,
            characteristics: item.characteristics,
            best: item.best,
            notBest: item.notBest,
            image: item.image
        })
        await bird.save()
    })
    res.send("success")
})

*/

/*
const fishdata = require('./fish.js').fish

app.get('/add-fish', (req, res) => {
    // const fish = new Fish({
    //     name: "Labrador Retriever",
    //     diet: ["protein#20g", "calcium#20mg"],
    //     characteristics: ["just a dog", "good dog"],
    //     best: "Best dog",
    //     notBest: "Not the best dog",
    //     image: "labrador.jpg"
    // })
    // fish.save()
    //     .then((result) => {
    //         res.send(result)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    fishdata.forEach(async (item)=>{
        const bird = new Fish({
            name: item.name,
            diet: item.diet,
            characteristics: item.characteristics,
            best: item.best,
            notBest: item.notBest,
            image: item.image
        })
        await bird.save()
    })
    res.send("success")
})
*/

app.get('/', (req, res) => {
    res.send('Hello World!')
})

mongoose.connect(dbURI)
    .then((result) => {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })


