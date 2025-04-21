$(document).ready(() => {
    let content = '';
    content += verse1.replaceAll('\n', '</br>');
    content += verse2.replaceAll('\n', '</br>');
    content += verse3.replaceAll('\n', '</br>');
    content += verse4.replaceAll('\n', '</br>');
    content += verse5.replaceAll('\n', '</br>');
    content += verse6.replaceAll('\n', '</br>');

    $('#root').html(content);
})