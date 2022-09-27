# scriptui-input-window
Modular code to seamlessly create a window and add input elements in it. The created window as its AutomaticLayout property enabled, who auto adjusts the layout of its objects, so the origin points and area of the controls need not be defined.

Useful Links:

1. Control Types and Creation Parameters are on this link: https://extendscript.docsforadobe.dev/user-interface-tools/control-objects.html#control-object-constructors
2. Types of Controls are on this link: https://extendscript.docsforadobe.dev/user-interface-tools/types-of-controls.html
3. Example codes for ScriptUI: https://extendscript.docsforadobe.dev/user-interface-tools/code-examples-for-scriptui.html


Types of controls that can be added are:
1. panel: A container for other types of controls, with an optional frame. Properties are (bounds, text). Creation properties are (name, borderstyle, sunken, subPanelCoordinates)
2. button: Used to initiate some action from a window when a user clicks the button. Calls the onClick callback if the control is clicked or if its notify() method is called. Properties are (bounds, text). Creation properties are (name).
3. checkbox: A dual-state control showing a box with a checkmark when value is true, empty when value is false. Calls the onClick callback if the control is clicked. Properties are (bounds, text). Creation properties are (name).
4. iconbutton: A button that displays an icon, with or without a text label. Like a text button, typically initiates an action in response to a click. Properties are (image, text). Calls the onClick callback.
5. edittext: An editable text field that the user can change. Calls the onChange callback if the text is changed and the user types ENTER or the control loses focus, or if its notify() method is called. Properties are (bounds, text). Creation properties are (name, readonly, noecho, enterKeySignalsOnChange, borderless, multiline, scrollable)
6. radiobutton: A dual-state control, grouped with other radiobuttons, of which only one can be in the selected state. Properties are (bounds, text). Creation properties are (name).
7. slider: A slider with a moveable position indicatior. Properties are (bounds, value, minvalue, maxvalue). Creation properties are (name).
