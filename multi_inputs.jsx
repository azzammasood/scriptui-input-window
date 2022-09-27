// Control Types and Creation Parameters are on this link: https://extendscript.docsforadobe.dev/user-interface-tools/control-objects.html#control-object-constructors
// Types of Controls are on this link: https://extendscript.docsforadobe.dev/user-interface-tools/types-of-controls.html
// Example codes for ScriptUI: https://extendscript.docsforadobe.dev/user-interface-tools/code-examples-for-scriptui.html

/** 
 * Types of controls that can be added are:
 * panel: A container for other types of controls, with an optional frame. Properties are (bounds, text). Creation properties are (name, borderstyle, sunken, subPanelCoordinates)
 * button: Used to initiate some action from a window when a user clicks the button. Calls the onClick callback if the control is clicked or if its notify() method is called. Properties are (bounds, text). Creation properties are (name).
 * checkbox: A dual-state control showing a box with a checkmark when value is true, empty when value is false. Calls the onClick callback if the control is clicked. Properties are (bounds, text). Creation properties are (name).
 * iconbutton: A button that displays an icon, with or without a text label. Like a text button, typically initiates an action in response to a click. Properties are (image, text). Calls the onClick callback.
 * edittext: An editable text field that the user can change. Calls the onChange callback if the text is changed and the user types ENTER or the control loses focus, or if its notify() method is called. Properties are (bounds, text). Creation properties are (name, readonly, noecho, enterKeySignalsOnChange, borderless, multiline, scrollable)
 * radiobutton: A dual-state control, grouped with other radiobuttons, of which only one can be in the selected state. Properties are (bounds, text). Creation properties are (name).
 * slider: A slider with a moveable position indicatior. Properties are (bounds, value, minvalue, maxvalue). Creation properties are (name).
 */

windowAndCreatedElements = createInputWindow('Window', ['button,button1', 'button,button2', 'edittext,text1', 'radiobutton,radio1', 'radiobutton,radio2', 'slider,0,150,slider1', 'checkbox,checkbox1', 'checkbox,checkbox2'])
window = windowAndCreatedElements[0]
createdElements = windowAndCreatedElements[1]
window.show()
alert(createdElements[0].text)

/**
 * Single function to create a window and add panels for different element types.
 * If same elements are present in the array sequentially, they are placed in the same panel.
 * @param titleOfWindow The title of the window
 * @param createdElements A list in which each element is the control type and its text, separated by a comma. However, for controls such as slider, each element has more values separated by commas.
 * @param panelAlignment Align the created panels vertically or horizontally. Values are 'row', 'column' or 'stack'.
 * @param controlAlignment Align the controls
 * @return Created window and array of created elements
 */
function createInputWindow(titleOfWindow, listOfElementsWithNames, panelAlignment, controlAlignment)
{
    panelAlignment = (panelAlignment != undefined) ? panelAlignment : 'column';
    controlAlignment = (controlAlignment != undefined) ? controlAlignment : 'row';
    // Get element types and their names
    combinedList = getArrayOfElements(listOfElementsWithNames);
    listOfElements = combinedList[0];
    listOfElementNames = combinedList[1];
    if (combinedList[2] != undefined) 
    {
        minimumValue = combinedList[2][0];
        maximumValue = combinedList[2][1];
    }

    // Array of created elements
    createdElements = new Array();

    // Create dialog window
    var dlg = new Window('dialog', titleOfWindow);
    dlg.orientation = panelAlignment

    // Loop through elements to create and their names
    for (var j = 0; j < listOfElements.length; j++)
    {
        // Check for same element
        if ((j > 0) && (listOfElements[j] == listOfElements[j-1]))
        {
            createdElements[j] = panel.add(listOfElements[j], undefined, listOfElementNames[j], {name:'ok'});
        }
        else
        {
            panel = dlg.add('panel', undefined, String(listOfElements[j]+'s panel'), {subPanelCoordinates: true})
            panel.orientation = controlAlignment
            if (listOfElements[j] == 'slider')
            {
                createdElements[j] = panel.add(listOfElements[j], undefined, value = 0, minValue = minimumValue, maxValue = maximumValue, listOfElementNames[j], {name:'cancel'});
            }
            else
            {
                createdElements[j] = panel.add(listOfElements[j], undefined, listOfElementNames[j], {name:'cancel'});
            }
            
        }
    }

    return [dlg, createdElements]
}

function getArrayOfElements(list)
{
    listOfElements = new Array();
    listOfElementNames = new Array();

    for (var i = 0; i < list.length; i++)
    {
        listOfElements[i] = list[i].split(',')[0];
        if (listOfElements[i] == 'slider') 
        {
            minValue = list[i].split(',')[1];
            maxValue = list[i].split(',')[2];
            listOfElementNames[i] = list[i].split(',')[3];
            listOfExtraOptions = [minValue, maxValue];
        }
        else
        {
            listOfElementNames[i] = list[i].split(',')[1];
        }
    }

    return [listOfElements, listOfElementNames, listOfExtraOptions]
}

