export default function (selected, label, max) {
    if (selected.length === 0) {
        return label;
    } else if (selected.length <= max) {
        let output = "";
        output += selected[0];
        for (let i = 1; i < selected.length; i++) {
            output += ", " + selected[i];
        }
        return output;
    } else {
        let output = "";
        output += selected[0];
        for (let i = 1; i < max; i++) {
            output += ", " + selected[i];
        }
        output += " +" + (selected.length - max).toString();
        return output;
    }
}
