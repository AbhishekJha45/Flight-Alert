const EXCEL_EXTENSION = '.xlsx';
const CSV_EXTENSION = '.csv';
const CSV_TYPE = 'text/csv;charset=utf-8';

/**
 * Creates an array of data to csv. It will automatically generate title row based on object keys.
 *
 * @param {Array} rows - array of data to be converted to CSV.
 * @param {string} fileName - filename to save as.
 * @param {Array} [columns] - array of object properties to convert to CSV. If skipped, then all object properties will be used for CSV.
 */
export function exportToCsv(rows, fileName, columns) {
  if (!rows || !rows.length) {
    return;
  }

  const separator = ',';
  const keys = Object.keys(rows[0]).filter(k => {
    if (columns?.length) {
      return columns.includes(k);
    } else {
      return true;
    }
  });

  const csvContent =
    keys.join(separator) +
    '\n' +
    rows.map(row => {
      return keys.map(k => {
        let cell = row[k] === null || row[k] === undefined ? '' : row[k];
        cell = cell instanceof Date
          ? cell.toLocaleString()
          : cell.toString().replace(/"/g, '""');
        if (cell.search(/("|,|\n)/g) >= 0) {
          cell = `"${cell}"`;
        }
        return cell;
      }).join(separator);
    }).join('\n');

  saveAsFile(csvContent, `${fileName}${CSV_EXTENSION}`, CSV_TYPE);
}

function saveAsFile(content, fileName, fileType) {
  const blob = new Blob([content], { type: fileType });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
}

