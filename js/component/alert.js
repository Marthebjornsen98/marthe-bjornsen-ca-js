function showAlert(
    message = 'This is a default message',
    alertClass = 'default'
) {
    return `<div class="${alertClass}">${message}</div>`;
}
