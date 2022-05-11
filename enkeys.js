const enLang = [
    [
        { code: 'Key_Backtick', name: '`', shiftName: '~', property: 'printable' },
        { code: 'Key_1', name: '1', shiftName: '!', property: 'printable' },
        { code: 'Key_2', name: '2', shiftName: '@', property: 'printable' },
        { code: 'Key_3', name: '3', shiftName: '#', property: 'printable' },
        { code: 'Key_4', name: '4', shiftName: '$', property: 'printable' },
        { code: 'Key_5', name: '5', shiftName: '%', property: 'printable' },
        { code: 'Key_6', name: '6', shiftName: '6', property: 'printable' },
        { code: 'Key_7', name: '7', shiftName: '&', property: 'printable' },
        { code: 'Key_8', name: '8', shiftName: '*', property: 'printable' },
        { code: 'Key_9', name: '9', shiftName: '(', property: 'printable' },
        { code: 'Key_0', name: '0', shiftName: ')', property: 'printable' },
        { code: 'Key_Minus', name: '-', shiftName: '_', property: 'printable' },
        { code: 'Key_Equal', name: '=', shiftName: '+', property: 'printable' },
        { code: 'Key_Backspace', name: 'Backspace', shiftName: 'Backspace', property: 'nonprintable' }
    ],
    [
        { code: 'Key_Tab', name: 'Tab', shiftName: 'Tab', property: 'nonprintable' },
        { code: 'Key_Q', name: 'q', shiftName: 'Q', property: 'printable' },
        { code: 'Key_W', name: 'w', shiftName: 'W', property: 'printable' },
        { code: 'Key_E', name: 'e', shiftName: 'E', property: 'printable' },
        { code: 'Key_R', name: 'r', shiftName: 'R', property: 'printable' },
        { code: 'Key_T', name: 't', shiftName: 'T', property: 'printable' },
        { code: 'Key_Y', name: 'y', shiftName: 'Y', property: 'printable' },
        { code: 'Key_U', name: 'u', shiftName: 'U', property: 'printable' },
        { code: 'Key_I', name: 'i', shiftName: 'I', property: 'printable' },
        { code: 'Key_O', name: 'o', shiftName: 'O', property: 'printable' },
        { code: 'Key_P', name: 'p', shiftName: 'P', property: 'printable' },
        { code: 'Key_Bracket_Left', name: '[', shiftName: '{', property: 'printable' },
        { code: 'Key_Bracket_Right', name: ']', shiftName: '}', property: 'printable' },
        { code: 'Key_Backslash', name: '\\', shiftName: '|', property: 'printable' }, 
        { code: 'Key_Delete', name: 'Delete', shiftName: 'Delete', property: 'nonprintable' }     
    ],
    [
        { code: 'Key_Caps', name: 'Caps', shiftName: 'Caps', property: 'nonprintable' },
        { code: 'Key_A', name: 'a', shiftName: 'A', property: 'printable' },
        { code: 'Key_S', name: 's', shiftName: 'S', property: 'printable' },
        { code: 'Key_D', name: 'd', shiftName: 'D', property: 'printable' },
        { code: 'Key_F', name: 'f', shiftName: 'F', property: 'printable' },
        { code: 'Key_G', name: 'g', shiftName: 'G', property: 'printable' },
        { code: 'Key_H', name: 'h', shiftName: 'H', property: 'printable' },
        { code: 'Key_J', name: 'j', shiftName: 'J', property: 'printable' },
        { code: 'Key_K', name: 'k', shiftName: 'K', property: 'printable' },
        { code: 'Key_L', name: 'l', shiftName: 'L', property: 'printable' },
        { code: 'Key_Semicolon', name: ';', shiftName: ':', property: 'printable' },
        { code: 'Key_Quote', name: '\'', shiftName: '\"', property: 'printable' }.
        { code: 'Key_Enter', name: 'Enter', shiftName: 'Enter', property: 'nonprintable' }
    ],
    [
        { code: 'Key_Shift_Left', name: 'Shift', shiftName: 'Shift', property: 'nonprintable' },
        { code: 'Key_Z', name: 'z', shiftName: 'Z', property: 'printable' },
        { code: 'Key_X', name: 'x', shiftName: 'X', property: 'printable' },
        { code: 'Key_C', name: 'c', shiftName: 'C', property: 'printable' },
        { code: 'Key_V', name: 'v', shiftName: 'V', property: 'printable' },
        { code: 'Key_B', name: 'b', shiftName: 'B', property: 'printable' },
        { code: 'Key_N', name: 'n', shiftName: 'N', property: 'printable' },
        { code: 'Key_M', name: 'm', shiftName: 'M', property: 'printable' },
        { code: 'Key_Comma', name: ',', shiftName: '<', property: 'printable' },
        { code: 'Key_Dot', name: '.', shiftName: '>', property: 'printable' },
        { code: 'Key_Slash', name: '/', shiftName: '?', property: 'printable' },    
        { code: 'Key_Up', name: '▲', shiftName: '▲', property: 'printable' },
        { code: 'Key_Shift_Right', name: 'Shift', shiftName: 'Shift', property: 'nonprintable' }
    ],
    [
        { code: 'Key_Ctrl_Left', name: 'Ctrl', shiftName: 'Ctrl', property: 'nonprintable' },
        { code: 'Key_Fn', name: 'Fn', shiftName: 'Fn', property: 'nonprintable' },
        { code: 'Key_Win', name: 'Win', shiftName: 'Win', property: 'nonprintable' },
        { code: 'Key_Alt_Left', name: 'Alt', shiftName: 'Alt', property: 'nonprintable' },
        { code: 'Key_Space', name: 'Space', shiftName: 'Space', property: 'nonprintable' },
        { code: 'Key_Alt_Right', name: 'Alt', shiftName: 'Alt', property: 'nonprintable' },
        { code: 'Key_Ctrl_Right', name: 'Ctrl', shiftName: 'Ctrl', property: 'nonprintable' },
        { code: 'Key_Left', name: '◄', shiftName: '◄', property: 'printable' },
        { code: 'Key_Down', name: '▼', shiftName: '▼', property: 'printable' },
        { code: 'Key_Right', name: '►', shiftName: '►', property: 'printable' }
    ],
];

export default enLang;