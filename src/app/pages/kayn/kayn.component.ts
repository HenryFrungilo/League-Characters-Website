import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-kayn',
  templateUrl: './kayn.component.html',
  styleUrls: ['./kayn.component.css']
})
export class KaynComponent {
  backgroundVideo: string = 'animatedKayn.mp4';
  loopVideo: string = 'unloop';
  formaSelecionada: boolean = false;

  constructor() {
    this.backgroundVideo = 'animatedKayn.mp4';
  }

  hoverDarkin() {
    if (!this.formaSelecionada) {
      document.getElementById('videoBackground')!.style.width = '140vw';
      document.getElementById('videoBackground')!.style.height = '140vh';
    }
  }
  hoverOutDarkin() {
    if (!this.formaSelecionada) {
      document.getElementById('videoBackground')!.style.width = '100vw';
      document.getElementById('videoBackground')!.style.height = '100vh';
      document.getElementById('videoBackground')!.style.marginLeft = '0';
      document.getElementById('championName')!.style.opacity = '1';
      document.getElementById('championTitle')!.style.opacity = '1';
      document.getElementById('shadowContent')!.style.left = '-30%'
    }
  }
  hoverShadow() {
    if (!this.formaSelecionada) {
      document.getElementById('videoBackground')!.style.width = '140vw';
      document.getElementById('videoBackground')!.style.height = '140vh';
      document.getElementById('videoBackground')!.style.marginLeft = '-40%';
    }
  }

  clickDarkin() {
    const newspaperSpinning = [
      { opacity: "1" },
      { opacity: "0" }
    ];
    const opacidade = [
      { opacity: "0" },
      { opacity: "1" }
    ];

    this.formaSelecionada = true;
    if (this.formaSelecionada = true) {
      setTimeout(() => {
        document.getElementById('championName')!.animate(newspaperSpinning, 400);
        document.getElementById('championName')!.style.opacity = '0';
      }, 700);
      setTimeout(() => {
        document.getElementById('championTitle')!.animate(newspaperSpinning, 400);
        document.getElementById('championTitle')!.style.opacity = '0';
      }, 400)
      setTimeout(() => {
        document.getElementById('regionInfo')!.animate(newspaperSpinning, 300)
        document.getElementById('regionInfo')!.style.opacity = '0';
      },100)
      document.getElementById('videoBackground')!.style.width = '160vw';
      document.getElementById('videoBackground')!.style.height = '160vh';
      setTimeout(() => {
        document.getElementById('darkinContent')!.style.right = '0%'
        document.getElementById('darkinContent')!.animate(opacidade, 300)
      }, 300)
      document.getElementById('darkinDiv')!.style.width = '0%'
      document.getElementById('darkinDiv')!.style.height = '0%'
    }
  }
  clickShadow() {
    const newspaperSpinning = [
      { opacity: "1" },
      { opacity: "0" }
    ];
    const opacidade = [
      { opacity: "0" },
      { opacity: "1" }
    ];

    this.formaSelecionada = true;
    if (this.formaSelecionada = true) {
      setTimeout(() => {
        document.getElementById('championName')!.animate(newspaperSpinning, 400);
        document.getElementById('championName')!.style.opacity = '0';
      }, 700);
      setTimeout(() => {
        document.getElementById('championTitle')!.animate(newspaperSpinning, 400);
        document.getElementById('championTitle')!.style.opacity = '0';
      }, 400)
      setTimeout(() => {
        document.getElementById('regionInfo')!.animate(newspaperSpinning, 300)
        document.getElementById('regionInfo')!.style.opacity = '0';
      },100)
      document.getElementById('videoBackground')!.style.width = '160vw';
      document.getElementById('videoBackground')!.style.height = '160vh';
      document.getElementById('videoBackground')!.style.marginLeft = '-60%';
      setTimeout(() => {
        document.getElementById('shadowContent')!.style.left = '0%'
        document.getElementById('shadowContent')!.animate(opacidade, 300)
      }, 300)
      document.getElementById('darkinDiv')!.style.width = '0%'
      document.getElementById('darkinDiv')!.style.height = '0%'
      document.getElementById('shadowDiv')!.style.width = '0%'
      document.getElementById('shadowDiv')!.style.height = '0%'
    }
  }

  exitSelection() {
    this.formaSelecionada = false
    document.getElementById('darkinDiv')!.style.width = '13vw'
    document.getElementById('darkinDiv')!.style.height = '25vw'
    document.getElementById('shadowDiv')!.style.width = '13vw'
    document.getElementById('shadowDiv')!.style.height = '25vw'
    document.getElementById('videoBackground')!.style.width = '100vw';
    document.getElementById('videoBackground')!.style.height = '100vh';
    document.getElementById('videoBackground')!.style.width = '100vw';
    document.getElementById('videoBackground')!.style.height = '100vh';
    document.getElementById('videoBackground')!.style.marginLeft = '0';
    document.getElementById('videoBackground')!.style.marginRight = '0';
    document.getElementById('championName')!.style.opacity = '1';
    document.getElementById('championTitle')!.style.opacity = '1';
    document.getElementById('regionInfo')!.style.opacity = '1';
    document.getElementById('shadowContent')!.style.left = '-30%'
    document.getElementById('darkinContent')!.style.right = '-30%'
  }

  scrollToStory() {
    document.getElementById("secondParagraph")!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
