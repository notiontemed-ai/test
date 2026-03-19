function addTestMenu_() {
  SpreadsheetApp.getUi()
    .createMenu('Тест')
    .addItem('Убрать объединенные ячейки', 'removeMergedCells')
    .addToUi();
}

function removeMergedCells() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getDataRange();

  if (range.getNumRows() === 0 || range.getNumColumns() === 0) {
    return;
  }

  range.breakApart();
}
