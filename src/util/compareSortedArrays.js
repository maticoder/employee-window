export default function (arrayA, arrayB) {
    const sortedArrayA = [...arrayA].sort();
    const sortedArrayB = [...arrayB].sort();

    if (sortedArrayA.every((val, index) => val === sortedArrayB[index])) {
        return true;
    } else {
        return false;
    }
}
