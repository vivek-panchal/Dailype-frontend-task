function formatDate(inputDate) {
    const date = new Date(inputDate);
    const options = { day: 'numeric', month: 'short', year: '2-digit' };
    const formattedDate = date.toLocaleDateString('en-GB', options);
    
    return formattedDate.replace(',', "'").replace(/\s+/g, ' ');
}

export default formatDate