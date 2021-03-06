import { Component, OnInit, Input } from '@angular/core';
// animations
import { textSlideUpAppearAnimation } from '../../animations';

@Component({
  selector: 'app-animate-text',
  templateUrl: './animate-text.component.html',
  styleUrls: ['./animate-text.component.scss'],
  animations: [textSlideUpAppearAnimation],
})
export class AnimateTextComponent implements OnInit {
  textChars: string[] = [];
  @Input() text: string | undefined = '';

  ngOnInit(): void {
    this.textChars = this.text ? [...this.text] : [];
  }
}
