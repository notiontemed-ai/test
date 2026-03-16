function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Генератор случайных чисел')
    .addItem('Сгенерировать 10 чисел', 'generateRandomNumbers')
    .addToUi();
}

function generateRandomNumbers() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheetName = 'Случайные числа';
  var sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  } else {
    sheet.clearContents();
    sheet.getRange(1, 1, 10, 1).setBackground(null);
  }

  var values = [];
  var backgrounds = [];

  for (var i = 0; i < 10; i++) {
    var randomInt = Math.floor(Math.random() * 100) + 1;
    values.push([randomInt]);
    backgrounds.push([randomInt % 2 !== 0 ? '#00ff00' : null]);
  }

  var range = sheet.getRange(1, 1, values.length, 1);
  range.setValues(values);
  range.setBackgrounds(backgrounds);
}
