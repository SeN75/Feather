import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as express from 'express';
import * as bdyParser from 'body-parser';

let app = express();
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin , X-Requested-With, Content-Typr, Accept');
    next();
});
app.use(bdyParser.urlencoded({ extended: false })); 
app.use(bdyParser.json()); 

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();

app.get('/api/getCities', function(request, response) {
    db.collection('config').doc('cities').get().then(function(data) {
        if(!data.exists) {
            response.status(404).end();
        }
        return response.json(data.data().names);
    });
});

app.get('/api/getCats', function(request, response) {
    db.collection('config').doc('cats').get().then(function(data) {
        if(!data.exists) {
            response.status(404).end();
        }
        return response.json(data.data().names);
    });
});

app.get('/api/activity', function(request, response) {
    db.collection('requested_activity').where('target_date', '>', new Date()).get().then(function(data) {
        let pushedList = [];
        data.forEach(function(item) {
            pushedList.push(item.data());
        });
        response.json(pushedList);
    });
});

app.post('/api/activity', function(request, response) {
    if( request.body.fields && 
        request.body.target_date &&
        request.body.count_of_events &&
        request.body.target_city &&
        request.body.start_time &&
        request.body.end_time &&
        request.body.people_count)
        {
            console.log(request.body);
            var copyInstance = request.body;
            var cEvents = request.body.count_of_events;
            delete copyInstance.count_of_events;
            copyInstance.target_date = new Date(copyInstance.target_date);
            if(cEvents < 1) {
                cEvents = 1;
            }
            for (let index = 0; index < cEvents; index++) {
                copyInstance.price = getRandomPrice() * 100;
                copyInstance.captin_name = getRandomName();
                copyInstance.captin_trip_note = getRandomTrip();
                db.collection('requested_activity').add(copyInstance);
                copyInstance.target_date.setDate(copyInstance.target_date.getDate() + 1);
            }
            response.status(201).json({status: "ok"});
        }
        else {
            response.status(400).json({status: "error"});
        }
});

function getRandomPrice() {
    return Math.floor(Math.random() * 6) + 1;
}

function getRandomName() {
    var num = Math.random();
    if(num < 0.001) {
        return "Mohammed Ali";
    }
    else if(num > 0 && num <0.51) {
        return "Khaled Ahmed";
    }
    else {
        return "Yousef ahmed";
    }
}

function getRandomTrip() {
    var num = Math.random();
    if(num < 0.001) {
        return "Mohammed Ali";
    }
    else if(num > 0 && num <0.51) {
        return "Khaled Ahmed";
    }
    else {
        return "Yousef ahmed";
    }
}

export const ExpertFrom = functions.https.onRequest(app);
