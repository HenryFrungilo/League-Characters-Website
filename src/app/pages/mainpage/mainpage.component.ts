import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  botaoSelecionado: boolean = false;
  imagemArma: string = '';
  corArma: string = '';
  animateImage: boolean = false;

  mouseCalibrum() {
    var mudarNome = document.getElementById("nomeArma")!;
    mudarNome.innerHTML = "Calibrum";
    document.getElementById("nomeArma")!.style.opacity = '1';
    document.getElementById("nomeArma")!.style.color = '#07ccc9fd'
    document.getElementById("nomeArma")!.style.filter = 'drop-shadow(0 0 0.75rem #194c79)'
  }
  mouseSeverum() {
    var mudarNome = document.getElementById("nomeArma")!;
    mudarNome.innerHTML = "Severum";
    document.getElementById("nomeArma")!.style.opacity = '1';
    document.getElementById("nomeArma")!.style.color = '#cf0079be'
    document.getElementById("nomeArma")!.style.filter = 'drop-shadow(0 0 0.75rem #e6e6e6)'
  }
  mouseGravitum() {
    var mudarNome = document.getElementById("nomeArma")!;
    mudarNome.innerHTML = "Gravitum";
    document.getElementById("nomeArma")!.style.opacity = '1';
    document.getElementById("nomeArma")!.style.color = '#C331ED'
    document.getElementById("nomeArma")!.style.filter = 'drop-shadow(0 0 0.75rem #07fefa98)'
  }
  mouseInfernum() {
    var mudarNome = document.getElementById("nomeArma")!;
    mudarNome.innerHTML = "Infernum";
    document.getElementById("nomeArma")!.style.opacity = '1';
    document.getElementById("nomeArma")!.style.color = '#3098F6'
    document.getElementById("nomeArma")!.style.filter = 'drop-shadow(0 0 0.75rem #07fefa98)'
  }
  mouseCrescendum() {
    var mudarNome = document.getElementById("nomeArma")!;
    mudarNome.innerHTML = "Crescendum";
    document.getElementById("nomeArma")!.style.opacity = '1';
    document.getElementById("nomeArma")!.style.color = '#e6e6e6'
    document.getElementById("nomeArma")!.style.filter = 'drop-shadow(0 0 0.75rem #cf0079be)'
  }
  saidaDoMouse() {
    document.getElementById("nomeArma")!.style.opacity = '0';

  }

  calibrumSelect() {
    if (this.imagemArma != 'Calibrum') {
      var audioArma = new Audio('assets/aud/Calibrum.ogg');
      audioArma.play();
      this.corArma = '#07ccc9fd'
      document.getElementById("imagemArma")!.style.opacity = "0";
      document.getElementById("nomeArmaSelecionada")!.style.opacity = "0";
      this.botaoSelecionado = true;
      setTimeout(() => {
        document.getElementById("nomeArmaSelecionada")!.style.opacity = "1";
        document.getElementById("nomeArmaSelecionada")!.style.color = "#07ccc9fd";
        document.getElementById("videoBackground")!.style.filter = "blur(4px)"
        this.imagemArma = 'Calibrum';
        document.getElementById("imagemArma")!.style.opacity = "1";
      }, 600)
    }
  }

  severumSelect() {
    if (this.imagemArma != 'Severum') {
      var audioArma = new Audio('assets/aud/Severum.ogg');
      audioArma.volume = 0.2
      audioArma.play();
      this.corArma = '#cf0079'
      document.getElementById("imagemArma")!.style.opacity = "0";
      document.getElementById("nomeArmaSelecionada")!.style.opacity = "0";
      this.botaoSelecionado = true;
      setTimeout(() => {
        document.getElementById("nomeArmaSelecionada")!.style.color = "#cf0079"
        document.getElementById("nomeArmaSelecionada")!.style.opacity = "1";
        this.imagemArma = 'Severum';
        document.getElementById("videoBackground")!.style.filter = "blur(4px)"
        document.getElementById("imagemArma")!.style.opacity = "1";
      }, 600)
    }
  }

  gravitumSelect() {
    if (this.imagemArma != 'Gravitum') {
      var audioArma = new Audio('assets/aud/Gravitum.ogg');
      audioArma.play();
      this.corArma = '#C331ED'
      document.getElementById("imagemArma")!.style.opacity = "0";
      document.getElementById("nomeArmaSelecionada")!.style.opacity = "0";
      this.botaoSelecionado = true;
      setTimeout(() => {
        document.getElementById("nomeArmaSelecionada")!.style.opacity = "1";
        document.getElementById("nomeArmaSelecionada")!.style.color = "#C331ED";
        document.getElementById("videoBackground")!.style.filter = "blur(4px)"
        this.imagemArma = 'Gravitum';
        document.getElementById("imagemArma")!.style.opacity = "1";
      }, 600)
    }
  }

  infernumSelect() {
    if (this.imagemArma != 'Infernum') {
      var audioArma = new Audio('assets/aud/Infernum.ogg');
      audioArma.play();
      this.corArma = '#3098F6'
      document.getElementById("imagemArma")!.style.opacity = "0"
      document.getElementById("nomeArmaSelecionada")!.style.opacity = "0";
      this.botaoSelecionado = true;
      document.getElementById("videoBackground")!.style.filter = "blur(4px)"
      setTimeout(() => {
        document.getElementById("nomeArmaSelecionada")!.style.color = "#3098F6";
        document.getElementById("nomeArmaSelecionada")!.style.opacity = "1";
        this.imagemArma = 'Infernum';
        document.getElementById("imagemArma")!.style.opacity = "1";
      }, 600)
    }
  }

  crescendumSelect() {
    if (this.imagemArma != 'Crescendum') {
      var audioArma = new Audio('assets/aud/Crescendum.ogg');
      audioArma.play();
      this.corArma = '#e6e6e6'
      document.getElementById("imagemArma")!.style.opacity = "0";
      document.getElementById("nomeArmaSelecionada")!.style.opacity = "0";
      this.corArma
      this.botaoSelecionado = true;
      document.getElementById("videoBackground")!.style.filter = "blur(4px)"
      setTimeout(() => {
        document.getElementById("nomeArmaSelecionada")!.style.color = "#e6e6e6";
        document.getElementById("nomeArmaSelecionada")!.style.opacity = "1";
        this.imagemArma = 'Crescendum';
        document.getElementById("imagemArma")!.style.opacity = "1";
      }, 600)
    }
  }

  shadowBoxArma() {
    document.getElementById("imagemArma")!.style.filter = `drop-shadow(0 0 1rem ${this.corArma})`
  }
  shadowBoxArmaLeave() {
    document.getElementById("imagemArma")!.style.filter = `drop-shadow(0 0 0rem #00000000)`
  }
}
