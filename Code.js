function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getCards() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
                 .getSheetByName('Flashcards');
  const data = sheet.getDataRange().getValues();
  const cards = [];
  // 1行目はヘッダーなので i=1 から
  for (let i = 1; i < data.length; i++) {
    cards.push({
      question: data[i][0],
      answer:   data[i][1],
      row:      i + 1 // スプレッドシートの実際の行番号
    });
  }
  return cards;
}

function setFlag(row, flag) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
                 .getSheetByName('Flashcards');
  // C 列に TRUE/FALSE を書き込む
  sheet.getRange(row, 3).setValue(flag);
}
