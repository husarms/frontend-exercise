export function localizeDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}
