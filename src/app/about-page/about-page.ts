import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css'
})
export class AboutPage {
  phrases: string[] = ['ATHLETES*'];
  displayedText: string = '';
  phraseIndex = 0;
  letterIndex = 0;
  isDeleting = false;

  ngOnInit(): void {
    this.startTyping();
  }

  startTyping(): void {
    const currentPhrase = this.phrases[this.phraseIndex];
    const rawText = this.isDeleting
      ? currentPhrase.substring(0, this.letterIndex--)
      : currentPhrase.substring(0, this.letterIndex++);

    // Replace * with span for superscript styling
    this.displayedText = rawText.replace(
      '*',
      `<span class="align-super text-4xl md:text-5xl">*</span>`
    );

    const delay = this.isDeleting ? 50 : 120;

    if (!this.isDeleting && this.letterIndex === currentPhrase.length) {
      this.isDeleting = true;
      setTimeout(() => this.startTyping(), 1000); // pause before delete
    } else if (this.isDeleting && this.letterIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      setTimeout(() => this.startTyping(), 350); // pause before next
    } else {
      setTimeout(() => this.startTyping(), delay);
    }
  }

}
