const enLang = [
    [
        { code: 'Key_Backtick', name: '`', shiftName: '~', class: 'shortkey', }, 
        { code: 'Key_1', name: '1', shiftName: '!', class: 'shortkey', }, 
        { code: 'Key_2', name: '2', shiftName: '@', class: 'shortkey', }, 
        { code: 'Key_3', name: '3', shiftName: '#', class: 'shortkey', }, 
        { code: 'Key_4', name: '4', shiftName: '$', class: 'shortkey', }, 
        { code: 'Key_5', name: '5', shiftName: '%', class: 'shortkey', }, 
        { code: 'Key_6', name: '6', shiftName: '6', class: 'shortkey', }, 
        { code: 'Key_7', name: '7', shiftName: '&', class: 'shortkey', }, 
        { code: 'Key_8', name: '8', shiftName: '*', class: 'shortkey', }, 
        { code: 'Key_9', name: '9', shiftName: '(', class: 'shortkey', }, 
        { code: 'Key_0', name: '0', shiftName: ')', class: 'shortkey', }, 
        { code: 'Key_Minus', name: '-', shiftName: '_', class: 'shortkey', }, 
        { code: 'Key_Equal', name: '=', shiftName: '+', class: 'shortkey', }, 
        { code: 'Key_Backspace', name: 'Backspace', shiftName: 'Backspace', class: 'longkey large', }, 
    ],
    [
        { code: 'Key_Tab', name: 'Tab', shiftName: 'Tab', class: 'longkey small', }, 
        { code: 'Key_Q', name: 'q', shiftName: 'Q', class: 'shortkey', }, 
        { code: 'Key_W', name: 'w', shiftName: 'W', class: 'shortkey', }, 
        { code: 'Key_E', name: 'e', shiftName: 'E', class: 'shortkey', }, 
        { code: 'Key_R', name: 'r', shiftName: 'R', class: 'shortkey', }, 
        { code: 'Key_T', name: 't', shiftName: 'T', class: 'shortkey', }, 
        { code: 'Key_Y', name: 'y', shiftName: 'Y', class: 'shortkey', }, 
        { code: 'Key_U', name: 'u', shiftName: 'U', class: 'shortkey', }, 
        { code: 'Key_I', name: 'i', shiftName: 'I', class: 'shortkey', }, 
        { code: 'Key_O', name: 'o', shiftName: 'O', class: 'shortkey', }, 
        { code: 'Key_P', name: 'p', shiftName: 'P', class: 'shortkey', }, 
        { code: 'Key_Bracket_Left', name: '[', shiftName: '{', class: 'shortkey', }, 
        { code: 'Key_Bracket_Right', name: ']', shiftName: '}', class: 'shortkey', }, 
        { code: 'Key_Backslash', name: '\\', shiftName: '|', class: 'shortkey', }, 
        { code: 'Key_Delete', name: 'Del', shiftName: 'Del', class: 'longkey small', },
    ],
    [
        { code: 'Key_Caps', name: 'Caps', shiftName: 'Caps', class: 'longkey small', }, 
        { code: 'Key_A', name: 'a', shiftName: 'A', class: 'shortkey', }, 
        { code: 'Key_S', name: 's', shiftName: 'S', class: 'shortkey', }, 
        { code: 'Key_D', name: 'd', shiftName: 'D', class: 'shortkey', }, 
        { code: 'Key_F', name: 'f', shiftName: 'F', class: 'shortkey', }, 
        { code: 'Key_G', name: 'g', shiftName: 'G', class: 'shortkey', }, 
        { code: 'Key_H', name: 'h', shiftName: 'H', class: 'shortkey', }, 
        { code: 'Key_J', name: 'j', shiftName: 'J', class: 'shortkey', }, 
        { code: 'Key_K', name: 'k', shiftName: 'K', class: 'shortkey', }, 
        { code: 'Key_L', name: 'l', shiftName: 'L', class: 'shortkey', }, 
        { code: 'Key_Semicolon', name: ';', shiftName: ':', class: 'shortkey', }, 
        { code: 'Key_Quote', name: ' ', shiftName: '', class: 'shortkey', }, 
        { code: 'Key_Enter', name: 'Enter', shiftName: 'Enter', class: 'longkey large', },
    ],
    [
        { code: 'Key_Shift_Left', name: 'Shift', shiftName: 'Shift', class: 'longkey medium', }, 
        { code: 'Key_Z', name: 'z', shiftName: 'Z', class: 'shortkey', }, 
        { code: 'Key_X', name: 'x', shiftName: 'X', class: 'shortkey', }, 
        { code: 'Key_C', name: 'c', shiftName: 'C', class: 'shortkey', }, 
        { code: 'Key_V', name: 'v', shiftName: 'V', class: 'shortkey', }, 
        { code: 'Key_B', name: 'b', shiftName: 'B', class: 'shortkey', }, 
        { code: 'Key_N', name: 'n', shiftName: 'N', class: 'shortkey', }, 
        { code: 'Key_M', name: 'm', shiftName: 'M', class: 'shortkey', }, 
        { code: 'Key_Comma', name: ',', shiftName: '<', class: 'shortkey', }, 
        { code: 'Key_Dot', name: '.', shiftName: '>', class: 'shortkey', }, 
        { code: 'Key_Slash', name: '/', shiftName: '?', class: 'shortkey', }, 
        { code: 'Key_Up', name: '▲', shiftName: '▲', class: 'shortkey', }, 
        { code: 'Key_Shift_Right', name: 'Shift', shiftName: 'Shift', class: 'longkey medium', }, 
    ],
    [
        { code: 'Key_Ctrl_Left', name: 'Ctrl', shiftName: 'Ctrl', class: 'longkey small', }, 
        { code: 'Key_Win', name: 'Win', shiftName: 'Win', class: 'longkey small', }, 
        { code: 'Key_Alt_Left', name: 'Alt', shiftName: 'Alt', class: 'longkey small', }, 
        { code: 'Key_Space', name: ' ', shiftName: ' ', class: 'longkey space', }, 
        { code: 'Key_Alt_Right', name: 'Alt', shiftName: 'Alt', class: 'longkey small', }, 
        { code: 'Key_Left', name: '◄', shiftName: '◄', class: 'shortkey', }, 
        { code: 'Key_Down', name: '▼', shiftName: '▼', class: 'shortkey', }, 
        { code: 'Key_Right', name: '►', shiftName: '►', class: 'shortkey', }, 
        { code: 'Key_Ctrl_Right', name: 'Ctrl', shiftName: 'Ctrl', class: 'longkey small', }, 
    ],
];

export default enLang;