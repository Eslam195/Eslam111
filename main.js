import express from 'express';
//or const express = require('express')

import { engine } from 'express-handlebars';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.listen(7000);

const students = [
    {
        id: 1,
        name: "Ahmed",
        city: 'melig'
    },
    {
        id: 2,
        name: "Ismail",
        city: 'shipeeen el kom'
    }, {
        id: 3,
        name: "Mohamed",
        city: 'Cairo'
    }, {
        id: 4,
        name: "Saeed",
        city: 'alexanderia'
    }, {
        id: 5,
        name: "Eslam",
        city: 'Tanta'
    }
];

const get_students = (request, response) => {

    response.render("students", { layout: false, students:students});
};

app.get('/students', get_students)

app.get("/students/:id", (req, res) => {
    const id = req.params.id;
    const student = students.find((item) => {
        return item.id == id;
    });
    res.render("student", { layout: false, student: student });
});



