function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getCards() {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Flashcards');
  const data = sheet.getDataRange().getValues();
  const cards = [];
  for (let i = 1; i < data.length; i++) {
    cards.push({ question: data[i][0], answer: data[i][1] });
  }
  return cards;
}
