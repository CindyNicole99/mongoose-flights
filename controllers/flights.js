import { Flight } from "../models/flight.js"

function index(req, res) {
    Flight.find({})
    .then(flights => {
        res.render("flights/index", {
            flights: flights,
            title: "All Flights"
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newFlight(req, res) {
    res.render('flights/new', {
        title: "Add Flight"
    })
    .catch(error => {
        console.log(error)
        res.redirect('/')
  })
}

function create(req, res) {
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res){
    Flight.findById(req.params.id)
    .then(flight => {
        res.render('flights/show', {
            title: "Flight Details",
            flight: flight
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function edit(req, res) {
    Flight.findById(req.params.id)
    .then(flight => {
        res.render('flights/edit', {
            flight: flight,
            title: "Edit Flight"
        })
    })
    .catch(error => {
        console.log(error)
        res.redirect('/')
  })
}

function update(req, res) {
  Flight.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(flight => {
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index,
  newFlight as new,
  create,
  show,
  edit,
  update,
  deleteFlight as delete
}