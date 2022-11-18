import { Component, OnInit } from '@angular/core';
import { ISection } from 'src/app/models/interfaces';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {



  public filmsInfo: ISection[] = [

    {
      section: "Comedia",
      films: [
        {
          title: "Casi 300",
          image: {
            src: "../../../assets/images/Comedia/casi300.webp",
            alt: "299 digo"
          },
        },
        {
          title: "Casi 300",
          image: {
            src: "../../../assets/images/Comedia/casi300.webp",
            alt: "299 digo"
          },
        },
        {
          title: "Cazafantasmas",
          image: {
            src: "../../../assets/images/Comedia/cazafantasmas.webp",
            alt: "Hola que ase fantasmilla"
          },
        },
        {
          title: "Ted",
          image: {
            src: "../../../assets/images/Comedia/ted.webp",
            alt: "299 digo"
          },
        },
        {
          title: "Juerga",
          image: {
            src: "../../../assets/images/Comedia/juerga.webp",
            alt: "299 digo"
          },
        },]
    },



    {
      section: "Accion",
      films: [
        {
          title: "Equalizer2",
          image: {
            src: "../../../assets/images/Accion/equalizer2.webp",
            alt: "299 digo"
          },
        },
        {
          title: "Worl War Z",
          image: {
            src: "../../../assets/images/Accion/worldwarz.webp",
            alt: "299 digo"
          },
        },
        {
          title: "Renacido",
          image: {
            src: "../../../assets/images/Comedia/renacido.webp",
            alt: "299 digo"
          },
        },
        {
          title: "John Wick 2",
          image: {
            src: "../../../assets/images/Accion/johnwick2.webp",
            alt: "299 digo"
          },
        },]
    },

    {
      section: "Anime",
      films: [
        {
          title: "Ajin",
          image: {
            src: "../../../assets/images/Anime/ajin.webp",
            alt: "299 digo"
          },
        },

        {
          title: "Porco Rosso",
          image: {
            src: "../../../assets/images/Anime/porcorosso.webp",
            alt: "299 digo"
          },
        },
        {
          title: "Chihiro",
          image: {
            src: "../../../assets/images/Anime/chihiro.webp",
            alt: "299 digo"
          },
        },
        {
          title: "Ninokuni",
          image: {
            src: "../../../assets/images/Anime/ninokuni.webp",
            alt: "299 digo"
          },
        },]
    },





  ]




  constructor() {

  }

  ngOnInit(): void {

  }

}
