#! /usr/bin/env node

// const yargs = require("yargs");
// const {argv} = yargs(process.argv)

const inquirer = require("inquirer");



const printFiveMoves = async(pokemonName) => {
const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
const pokemon = await res.json();
const moves = pokemon.moves.map(({move}) => move.name);
console.log(moves);
}

const prompt = inquirer.createPromptModule()
prompt([{
    type: "input",
    name: "pokemon",
    message: "What is the name of the pokemon?"
}]).then((answers)=>{
    const pokemon = answers.pokemon
    printFiveMoves(pokemon)
})

