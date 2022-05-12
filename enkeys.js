const enLang = [
    [{key: '`', name: '`', nameShift: '~', keyCode: 192, code: 'Backquote', location: 0, description: 'Backtick / grave accent / ñ / æ / ö', class: 'size1', property: 'printable', }, {key: '1', name: '1', nameShift: '!', keyCode: 49, code: 'Digit1', location: 0, description: '1 Key', unicode: '①', class: 'size1', property: 'printable', }, {key: '2', name: '2', nameShift: '@', keyCode: 50, code: 'Digit2', location: 0, description: '2 Key', unicode: '②', class: 'size1', property: 'printable', }, {key: '3', name: '3', nameShift: '#', keyCode: 51, code: 'Digit3', location: 0, description: '3 Key', unicode: '③', class: 'size1', property: 'printable', }, {key: '4', name: '4', nameShift: '$', keyCode: 52, code: 'Digit4', location: 0, description: '4 Key', unicode: '④', class: 'size1', property: 'printable', }, {key: '5', name: '5', nameShift: '%', keyCode: 53, code: 'Digit5', location: 0, description: '5 Key', unicode: '⑤', class: 'size1', property: 'printable', }, {key: '6', name: '6', nameShift: '^', keyCode: 54, code: 'Digit6', location: 0, description: '6 Key', unicode: '⑥', class: 'size1', property: 'printable', }, {key: '7', name: '7', nameShift: '&', keyCode: 55, code: 'Digit7', location: 0, description: '7 Key', unicode: '⑦', class: 'size1', property: 'printable', }, {key: '8', name: '8', nameShift: '*', keyCode: 56, code: 'Digit8', location: 0, description: '8 Key', unicode: '⑧', class: 'size1', property: 'printable', }, {key: '9', name: '9', nameShift: '(', keyCode: 57, code: 'Digit9', location: 0, description: '9 Key', unicode: '⑨', class: 'size1', property: 'printable', }, {key: '0', name: '0', nameShift: ')', keyCode: 48, code: 'Digit0', location: 0, description: '0', unicode: '⓪', class: 'size1', property: 'printable', }, {key: '-', name: '-', nameShift: '_', keyCode: 109, code: 'NumpadSubtract', location: 3, description: 'subtract', class: 'size1', property: 'printable', }, {key: '=', name: '=', nameShift: '+', keyCode: 61, code: 'Equal', location: 0, description: 'equals (firefox)', class: 'size1', property: 'printable', }, {key: 'Backspace', name: 'Backspace', nameShift: 'Backspace', keyCode: 8, code: 'Backspace', location: 0, description: 'backspace / delete', unicode: '⌫', class: 'size4 dark', property: 'nonprintable', }, ], 
    [{key: 'Tab', name: 'Tab', nameShift: 'Tab', keyCode: 9, code: 'Tab', location: 0, description: 'tab', unicode: '↹', class: 'size3 dark', property: 'nonprintable', }, {key: 'q', name: 'q', nameShift: 'Q', keyCode: 81, code: 'KeyQ', location: 0, description: 'q', class: 'size1', property: 'printable', }, {key: 'w', name: 'w', nameShift: 'W', keyCode: 87, code: 'KeyW', location: 0, description: 'w', class: 'size1', property: 'printable', }, {key: 'e', name: 'e', nameShift: 'E', keyCode: 69, code: 'KeyE', location: 0, description: 'e', class: 'size1', property: 'printable', }, {key: 'r', name: 'r', nameShift: 'R', keyCode: 82, code: 'KeyR', location: 0, description: 'r', class: 'size1', property: 'printable', }, {key: 't', name: 't', nameShift: 'T', keyCode: 84, code: 'KeyT', location: 0, description: 't', class: 'size1', property: 'printable', }, {key: 'y', name: 'y', nameShift: 'Y', keyCode: 89, code: 'KeyY', location: 0, description: 'y', class: 'size1', property: 'printable', }, {key: 'u', name: 'u', nameShift: 'U', keyCode: 85, code: 'KeyU', location: 0, description: 'u', class: 'size1', property: 'printable', }, {key: 'i', name: 'i', nameShift: 'I', keyCode: 73, code: 'KeyI', location: 0, description: 'i', class: 'size1', property: 'printable', }, {key: 'o', name: 'o', nameShift: 'O', keyCode: 79, code: 'KeyO', location: 0, description: 'o', class: 'size1', property: 'printable', }, {key: 'p', name: 'p', nameShift: 'P', keyCode: 80, code: 'KeyP', location: 0, description: 'p', class: 'size1', property: 'printable', }, {key: '[', name: '[', nameShift: '{', keyCode: 160, code: 'BracketLeft', location: 0, altKey: false, ctrlKey: false, metaKey: false, shiftKey: false, description: '^', class: 'size1', property: 'printable', }, {key: ']', name: ']', nameShift: '}', keyCode: 221, code: 'BracketRight', location: 0, description: 'close bracket / å', class: 'size1', property: 'printable', }, {key: '\\', name: '\\', nameShift: '|', keyCode: 220, code: 'Backslash', location: 0, description: 'back slash', class: 'size1', property: 'printable', }, {key: 'Delete', name: 'Del', nameShift: 'Del', keyCode: 46, code: 'Delete', location: 3, altKey: false, ctrlKey: false, metaKey: false, shiftKey: false, description: 'delete', unicode: '⌦', class: 'size2 dark', property: 'nonprintable', }, ], 
    [{key: 'CapsLock', name: 'CapsLock', nameShift: 'CapsLock', keyCode: 20, code: 'CapsLock', location: 0, description: 'caps lock', unicode: '⇪', class: 'size4 dark', property: 'nonprintable', }, {key: 'a', name: 'a', nameShift: 'A', keyCode: 65, code: 'KeyA', location: 0, description: 'a', class: 'size1', property: 'printable', }, {key: 's', name: 's', nameShift: 'S', keyCode: 83, code: 'KeyS', location: 0, description: 's', class: 'size1', property: 'printable', }, {key: 'd', name: 'd', nameShift: 'D', keyCode: 68, code: 'KeyD', location: 0, description: 'd', class: 'size1', property: 'printable', }, {key: 'f', name: 'f', nameShift: 'F', keyCode: 70, code: 'KeyF', location: 0, description: 'f', class: 'size1', property: 'printable', }, {key: 'g', name: 'g', nameShift: 'G', keyCode: 71, code: 'KeyG', location: 0, description: 'g', class: 'size1', property: 'printable', }, {key: 'h', name: 'h', nameShift: 'H', keyCode: 72, code: 'KeyH', location: 0, description: 'h', class: 'size1', property: 'printable', }, {key: 'j', name: 'j', nameShift: 'J', keyCode: 74, code: 'KeyJ', location: 0, description: 'j', class: 'size1', property: 'printable', }, {key: 'k', name: 'k', nameShift: 'K', keyCode: 75, code: 'KeyK', location: 0, altKey: true, ctrlKey: false, metaKey: true, shiftKey: false, description: 'k', class: 'size1', property: 'printable', }, {key: 'l', name: 'l', nameShift: 'L', keyCode: 76, code: 'KeyL', location: 0, altKey: true, ctrlKey: false, metaKey: true, shiftKey: false, description: 'l', class: 'size1', property: 'printable', }, {key: ';', name: ';', nameShift: ':', keyCode: 59, code: 'Semicolon', location: 0, description: 'semicolon (firefox),  equals', class: 'size1', property: 'printable', }, {key: "'", name: "'", nameShift: '', keyCode: 222, code: 'Quote', location: 0, description: 'single quote / ø / ä', class: 'size1', property: 'printable', }, {key: 'Enter', name: 'Enter', nameShift: 'Enter', keyCode: 13, code: 'Enter', location: 0, description: 'Enter / Return', unicode: '↵', class: 'size5 dark', property: 'nonprintable', }, ], 
    [{key: 'Shift', name: 'Shift', nameShift: 'Shift', keyCode: 16, code: 'ShiftLeft', location: 1, description: 'shift', unicode: '⇧', class: 'size4 dark', property: 'nonprintable', }, {key: 'z', name: 'z', nameShift: 'Z', keyCode: 90, code: 'KeyZ', location: 0, description: 'z', class: 'size1', property: 'printable', }, {key: 'x', name: 'x', nameShift: 'X', keyCode: 88, code: 'KeyX', location: 0, description: 'x', class: 'size1', property: 'printable', }, {key: 'c', name: 'c', nameShift: 'C', keyCode: 67, code: 'KeyC', location: 0, description: 'c', class: 'size1', property: 'printable', }, {key: 'v', name: 'v', nameShift: 'V', keyCode: 86, code: 'KeyV', location: 0, description: 'v', class: 'size1', property: 'printable', }, {key: 'b', name: 'b', nameShift: 'B', keyCode: 66, code: 'KeyB', location: 0, description: 'b', class: 'size1', property: 'printable', }, {key: 'n', name: 'n', nameShift: 'N', keyCode: 78, code: 'KeyN', location: 0, description: 'n', class: 'size1', property: 'printable', }, {key: 'm', name: 'm', nameShift: 'M', keyCode: 77, code: 'KeyM', location: 0, description: 'm', class: 'size1', property: 'printable', }, {key: ',', name: ',', nameShift: '<', keyCode: 108, code: 'Comma', location: 3, altKey: false, ctrlKey: false, metaKey: false, shiftKey: false, description: 'numpad period (firefox)', class: 'size1', property: 'printable', }, {key: '.', name: '.', nameShift: '>', keyCode: 190, code: 'Period', location: 0, description: 'period', class: 'size1', property: 'printable', }, {key: '/', name: '/', nameShift: '?', keyCode: 191, code: 'Slash', location: 0, description: 'forward slash / ç', class: 'size1', property: 'printable', }, {key: 'ArrowUp', name: '▲', nameShift: '▲', keyCode: 38, code: 'ArrowUp', location: 0, altKey: false, ctrlKey: false, metaKey: false, shiftKey: false, repeat: false, class: 'size2 dark', property: 'printable', }, {key: 'Shift', name: 'Shift', nameShift: 'Shift', keyCode: 16, code: 'ShiftRight', location: 1, description: 'shift', unicode: '⇧', class: 'size5 dark', property: 'nonprintable', }, ], 
    [{key: 'Control', name: 'Ctrl', nameShift: 'Ctrl', keyCode: 17, code: 'ControlLeft', location: 1, altKey: true, ctrlKey: false, metaKey: true, shiftKey: true, description: 'ctrl', unicode: '^', class: 'size2 dark', property: 'nonprintable', }, {key: 'Meta', name: 'Win', nameShift: 'Win', keyCode: 91, code: 'MetaLeft', location: 1, altKey: false, ctrlKey: false, metaKey: true, shiftKey: false, description: 'Windows Key / Left ⌘ / Chromebook Search key', unicode: '⌘ ⊞', class: 'size2 dark', property: 'nonprintable', }, {key: 'Alt', name: 'Alt', nameShift: 'Alt', keyCode: 18, code: 'AltLeft', location: 1, altKey: true, ctrlKey: false, metaKey: true, shiftKey: false, description: 'Alt / Option', unicode: '⎇ / ⌥', class: 'size2 dark', property: 'nonprintable', }, {key: ' ', name: ' ', nameShift: ' ', keyCode: 32, code: 'Space', location: 0, altKey: false, ctrlKey: false, metaKey: false, shiftKey: false, repeat: false, class: 'size6', property: 'nonprintable', }, {key: 'Alt', name: 'Alt', nameShift: 'Alt', keyCode: 18, code: 'AltRight', location: 1, altKey: true, ctrlKey: false, metaKey: true, shiftKey: false, description: 'Alt / Option', unicode: '⎇ / ⌥', class: 'size2 dark', property: 'nonprintable', }, {key: 'ArrowLeft', name: '◄', nameShift: '◄', keyCode: 37, code: 'ArrowLeft', location: 0, altKey: false, ctrlKey: false, metaKey: false, shiftKey: false, repeat: false, class: 'size2 dark', property: 'printable', }, {key: 'ArrowDown', name: '▼', nameShift: '▼', keyCode: 40, code: 'ArrowDown', location: 0, altKey: false, ctrlKey: false, metaKey: false, shiftKey: false, repeat: false, class: 'size2 dark', property: 'printable', }, {key: 'ArrowRight', name: '►', nameShift: '►', keyCode: 39, code: 'ArrowRight', location: 0, altKey: false, ctrlKey: false, metaKey: false, shiftKey: false, repeat: false, class: 'size2 dark', property: 'printable', }, {key: 'Control', name: 'Ctrl', nameShift: 'Ctrl', keyCode: 17, code: 'ControlRight', location: 1, altKey: true, ctrlKey: false, metaKey: true, shiftKey: true, description: 'ctrl', unicode: '^', class: 'size2 dark', property: 'nonprintable', }, ], ];
export default enLang;
  