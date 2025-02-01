/**
 * This function will return the TextView content from the selector.
 * @param el - selected element.
*/
export const getTextViewContent = (el: any) => {
    return el.$('//android.widget.TextView')
}