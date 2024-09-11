import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'canapp';

  ngAfterViewInit(): void {
    document.querySelectorAll<HTMLElement>('details').forEach((el: HTMLElement) => {
      const summary: HTMLElement | null = el.querySelector<HTMLElement>('summary');
      const content: HTMLElement | null = el.querySelector<HTMLElement>('.content');

      if (summary && content) {
        summary.addEventListener('click', (e: MouseEvent) => {
          e.preventDefault();
          if ((el as HTMLDetailsElement).open) {
            this.slideUp(content, () => {
              (el as HTMLDetailsElement).open = false;
            });
          } else {
            (el as HTMLDetailsElement).open = true;
            this.slideDown(content);
          }
        });
      }
    });
  }

  private slideUp(element: HTMLElement, callback: () => void): void {
    const height = element.offsetHeight;
    element.style.height = height + 'px';
    element.offsetHeight; // Force reflow
    element.style.height = '0';

    element.addEventListener('transitionend', function handler() {
      element.removeEventListener('transitionend', handler);
      callback();
    });
  }

  private slideDown(element: HTMLElement): void {
    element.style.height = '0';
    element.offsetHeight; // Force reflow
    const height = element.scrollHeight;
    element.style.height = height + 'px';

    element.addEventListener('transitionend', function handler() {
      element.removeEventListener('transitionend', handler);
      element.style.height = 'auto';
    });
  }
}
