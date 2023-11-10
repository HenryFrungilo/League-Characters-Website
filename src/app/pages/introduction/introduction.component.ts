import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {

  constructor(private _router: Router){

  }

  animationKayn(){
    document.getElementById('kayn')!.style.transition = '0ms'
    document.getElementById('kayn')!.style.transform = 'rotate(0)'
    document.getElementById('kaynDiv')!.style.transition = '0ms'
    document.getElementById('kaynDiv')!.style.transform = 'rotate(0)'
    document.getElementById('kaynDiv')!.style.marginLeft = '3.5vw'
    document.getElementById('kaynDiv')!.style.marginRight = '0'
    document.getElementById('kaynDiv')!.style.transition = 'all 1000ms'
    document.getElementById('kaynDiv')!.style.width = '110vw'
    document.getElementById('kayn')!.style.filter = 'grayscale(0)'
    document.getElementById('kayn')!.style.marginLeft = '0%'
    document.getElementById('kayn')!.style.marginTop = '0%'
    document.getElementById('kayn')!.style.top = '4.5%'
    document.getElementById('kayn')!.style.width = '110vw'
    document.getElementById('camilleDiv')!.style.width = '0vw'
    document.getElementById('camilleDiv')!.style.opacity = '0'
    document.getElementById('camilleDiv')!.style.transition = '400ms'
    document.getElementById('zedDiv')!.style.width = '0vw'
    document.getElementById('zedDiv')!.style.transition = '400ms'
    document.getElementById('zedDiv')!.style.opacity = '0'
    document.getElementById('apheliosDiv')!.style.width = '0vw'
    document.getElementById('apheliosDiv')!.style.opacity = '0'
    document.getElementById('apheliosDiv')!.style.transition = '400ms'
    document.getElementById('leonaDiv')!.style.width = '0vw'
    document.getElementById('leonaDiv')!.style.opacity = '0'
    document.getElementById('leonaDiv')!.style.transition = '400ms'
    document.getElementById('jungleIcon')!.style.opacity = '0'
    document.getElementById('kayn')!.style.scale = '1'
    setTimeout(() => {
      this._router.navigate(['/Kayn']);
    }, 1000)
  }
  animationAphelios(){
    document.getElementById('aphelios')!.style.transition = '0ms'
    document.getElementById('aphelios')!.style.transform = 'rotate(0)'
    document.getElementById('apheliosDiv')!.style.transition = '0ms'
    document.getElementById('apheliosDiv')!.style.transform = 'rotate(0)'
    document.getElementById('apheliosDiv')!.style.marginLeft = '0vw'
    document.getElementById('apheliosDiv')!.style.marginRight = '0'
    document.getElementById('apheliosDiv')!.style.transition = 'all 1000ms'
    document.getElementById('apheliosDiv')!.style.width = '110vw'
    document.getElementById('aphelios')!.style.filter = 'grayscale(0)'
    document.getElementById('aphelios')!.style.marginLeft = '0%'
    document.getElementById('aphelios')!.style.marginTop = '0%'
    document.getElementById('aphelios')!.style.top = '4.5%'
    document.getElementById('aphelios')!.style.width = '110vw'
    document.getElementById('camilleDiv')!.style.width = '0vw'
    document.getElementById('camilleDiv')!.style.opacity = '0'
    document.getElementById('camilleDiv')!.style.transition = '400ms'
    document.getElementById('zedDiv')!.style.width = '0vw'
    document.getElementById('zedDiv')!.style.transition = '400ms'
    document.getElementById('zedDiv')!.style.opacity = '0'
    document.getElementById('kaynDiv')!.style.width = '0vw'
    document.getElementById('kaynDiv')!.style.opacity = '0'
    document.getElementById('kaynDiv')!.style.transition = '400ms'
    document.getElementById('leonaDiv')!.style.width = '0vw'
    document.getElementById('leonaDiv')!.style.opacity = '0'
    document.getElementById('leonaDiv')!.style.transition = '400ms'
    document.getElementById('ADCIcon')!.style.opacity = '0'
    document.getElementById('aphelios')!.style.scale = '1'
    setTimeout(() => {
      this._router.navigate(['Aphelios']);
    }, 1000)
  }
  animationZed(){
    document.getElementById('zed')!.style.transition = '0ms'
    document.getElementById('zed')!.style.transform = 'rotate(0)'
    document.getElementById('zedDiv')!.style.transition = '0ms'
    document.getElementById('zedDiv')!.style.transform = 'rotate(0)'
    document.getElementById('zedDiv')!.style.marginLeft = '3.5vw'
    document.getElementById('zedDiv')!.style.marginRight = '0'
    document.getElementById('zedDiv')!.style.transition = 'all 1000ms'
    document.getElementById('zedDiv')!.style.width = '110vw'
    document.getElementById('zed')!.style.filter = 'grayscale(0)'
    document.getElementById('zed')!.style.marginLeft = '-10%'
    document.getElementById('zed')!.style.marginTop = '0%'
    document.getElementById('zed')!.style.top = '4.5%'
    document.getElementById('zed')!.style.width = '110vw'
    document.getElementById('camilleDiv')!.style.width = '0vw'
    document.getElementById('camilleDiv')!.style.opacity = '0'
    document.getElementById('camilleDiv')!.style.transition = '400ms'
    document.getElementById('apheliosDiv')!.style.width = '0vw'
    document.getElementById('apheliosDiv')!.style.transition = '400ms'
    document.getElementById('apheliosDiv')!.style.opacity = '0'
    document.getElementById('kaynDiv')!.style.width = '0vw'
    document.getElementById('kaynDiv')!.style.opacity = '0'
    document.getElementById('kaynDiv')!.style.transition = '400ms'
    document.getElementById('leonaDiv')!.style.width = '0vw'
    document.getElementById('leonaDiv')!.style.opacity = '0'
    document.getElementById('leonaDiv')!.style.transition = '400ms'
    document.getElementById('midIcon')!.style.opacity = '0'
    document.getElementById('zed')!.style.scale = '1'
    setTimeout(() => {
      this._router.navigate(['Zed']);
    }, 1000)
  }
  animationCamille(){
    document.getElementById('camille')!.style.transition = '0ms'
    document.getElementById('camille')!.style.transform = 'rotate(0)'
    document.getElementById('camilleDiv')!.style.transition = '0ms'
    document.getElementById('camilleDiv')!.style.transform = 'rotate(0)'
    document.getElementById('camilleDiv')!.style.marginLeft = '7vw'
    document.getElementById('camilleDiv')!.style.marginRight = '0'
    document.getElementById('camilleDiv')!.style.transition = 'all 1000ms'
    document.getElementById('camilleDiv')!.style.width = '110vw'
    document.getElementById('camille')!.style.filter = 'grayscale(0)'
    document.getElementById('camille')!.style.marginLeft = '0%'
    document.getElementById('camille')!.style.marginTop = '0%'
    document.getElementById('camille')!.style.top = '4.5%'
    document.getElementById('camille')!.style.width = '110vw'
    document.getElementById('apheliosDiv')!.style.width = '0vw'
    document.getElementById('apheliosDiv')!.style.opacity = '0'
    document.getElementById('apheliosDiv')!.style.transition = '400ms'
    document.getElementById('zedDiv')!.style.width = '0vw'
    document.getElementById('zedDiv')!.style.transition = '400ms'
    document.getElementById('zedDiv')!.style.opacity = '0'
    document.getElementById('kaynDiv')!.style.width = '0vw'
    document.getElementById('kaynDiv')!.style.opacity = '0'
    document.getElementById('kaynDiv')!.style.transition = '400ms'
    document.getElementById('leonaDiv')!.style.width = '0vw'
    document.getElementById('leonaDiv')!.style.opacity = '0'
    document.getElementById('leonaDiv')!.style.transition = '400ms'
    document.getElementById('TopLane')!.style.opacity = '0'
    document.getElementById('camille')!.style.scale = '1'
    setTimeout(() => {
      this._router.navigate(['Camille']);
    }, 1000)
  }
  animationLeona(){
    document.getElementById('leona')!.style.transition = '0ms'
    document.getElementById('leona')!.style.transform = 'rotate(0)'
    document.getElementById('leonaDiv')!.style.transition = '0ms'
    document.getElementById('leonaDiv')!.style.transform = 'rotate(0)'
    document.getElementById('leonaDiv')!.style.marginLeft = '3.5vw'
    document.getElementById('leonaDiv')!.style.marginRight = '0'
    document.getElementById('leonaDiv')!.style.transition = 'all 1000ms'
    document.getElementById('leonaDiv')!.style.width = '110vw'
    document.getElementById('leonaDiv')!.style.marginLeft = '-3.5%'
    document.getElementById('leona')!.style.filter = 'grayscale(0)'
    document.getElementById('leona')!.style.marginLeft = '-0%'
    document.getElementById('leona')!.style.marginTop = '0%'
    document.getElementById('leona')!.style.top = '4.5%'
    document.getElementById('leona')!.style.width = '110vw'
    document.getElementById('camilleDiv')!.style.width = '0vw'
    document.getElementById('camilleDiv')!.style.opacity = '0'
    document.getElementById('camilleDiv')!.style.transition = '400ms'
    document.getElementById('zedDiv')!.style.width = '0vw'
    document.getElementById('zedDiv')!.style.transition = '400ms'
    document.getElementById('zedDiv')!.style.opacity = '0'
    document.getElementById('kaynDiv')!.style.width = '0vw'
    document.getElementById('kaynDiv')!.style.opacity = '0'
    document.getElementById('kaynDiv')!.style.transition = '400ms'
    document.getElementById('apheliosDiv')!.style.width = '0vw'
    document.getElementById('apheliosDiv')!.style.opacity = '0'
    document.getElementById('apheliosDiv')!.style.transition = '400ms'
    document.getElementById('SupportIcon')!.style.opacity = '0'
    document.getElementById('leona')!.style.scale = '1'
    setTimeout(() => {
      this._router.navigate(['Leona']);
    }, 1000)
  }
}
