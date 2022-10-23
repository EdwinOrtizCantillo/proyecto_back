const Gallo = require("../models/gallos.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let gallo = new Gallo({
        placa: req.body.placa,
        pluma: req.body.pluma,
        nombre: req.body.nombre,
        nombre_p: req.body.nombre_p,
        nombre_m: req.body.nombre_m,
        edad: req.body.edad,
        peso: req.body.peso
    })

    gallo.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el gallo"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El gallo se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Gallo.find(function(err, gallos){
        res.json(gallos)
    })
}

exports.findOne = function(req,res){
    Gallo.findOne({_id: req.params.id},function(err, gallo){
        res.json(gallo)
    })
}

exports.update = function(req,res){
    let gallo = {
        placa: req.body.placa,
        pluma: req.body.pluma,
        nombre: req.body.nombre,
        nombre_p: req.body.nombre_p,
        nombre_m: req.body.nombre_m,
        edad: req.body.edad,
        peso: req.body.peso    
    }

    Gallo.findByIdAndUpdate(req.params.id, {$set: gallo}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el gallo"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El gallo modifico correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Gallo.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el gallo"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El gallo fue eliminado correctamente"
        res.json(response)
    })
}