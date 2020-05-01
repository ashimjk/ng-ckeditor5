/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Placeholder from "./placeholder/placeholder";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";

import Context from '@ckeditor/ckeditor5-core/src/context';
import ContextWatchdog from '@ckeditor/ckeditor5-watchdog/src/contextwatchdog';

class ClassicEditor extends ClassicEditorBase {
}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Essentials,
  Autoformat,
  Bold,
  Italic,
  Indent,
  List,
  Paragraph,
  PasteFromOffice,
  Placeholder,
  FontFamily,
  FontSize,
  FontColor,
  Alignment
];

// Editor configuration.
ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      'fontFamily', 'fontSize', 'fontColor',
      '|', 'alignment:left', 'alignment:center', 'alignment:right', 'alignment:justify',
      '|', 'bold', 'italic',
      '|', 'indent', 'outdent',
      '|', 'bulletedList', 'numberedList',
      '|', 'placeholder'
    ]
  },
  fontSize: {
    options: [
      8,
      10,
      12,
      14,
      16,
      18
    ]
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en'
};

export default {
  ClassicEditor,
  Context,
  ContextWatchdog
};
