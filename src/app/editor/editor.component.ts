import {Component, OnInit} from '@angular/core';

import * as CKSource from '../../../ckeditor/build/cksource';

const ClassicEditor = CKSource.ClassicEditor;

@Component({
  selector: 'app-editor',
  template: `
    ckeditor

    <br>

    <ckeditor
      [editor]="Editor"
      [config]="config"
      id="classic-editor"
    >
    </ckeditor>

  `,
  styles: []
})
export class EditorComponent implements OnInit {

  public Editor = ClassicEditor;

  config = {
    // toolbar: ['heading', '|', 'bold', 'italic', 'placeholder'],
    placeholderConfig: {
      name: 'Insert Variable',
      types: ['firstName', 'surname', 'lastName']
    }
  };

  constructor() {
  }

  ngOnInit() {
  }

}
