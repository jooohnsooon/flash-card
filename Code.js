function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getCards() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
                 .getSheetByName('Flashcards');
  const data = sheet.getDataRange().getValues();
  const cards = [];
  for (let i = 1; i < data.length; i++) {
    cards.push({
      question:    data[i][0],
      answer:      data[i][1],
      row:         i + 1,
      problem:     data[i][5],  // F列: 問題（追加項目）
      diagram:     data[i][6],  // G列: 図形
      choices:     data[i][7],  // H列: 選択肢
      correct:     data[i][8],  // I列: 正解
      explanation: data[i][9]   // J列: 解説
    });
  }
  return cards;
}

function setFlag(row, flag) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
                 .getSheetByName('Flashcards');
  sheet.getRange(row, 3).setValue(flag);
}