import { exportToCsv } from './ExportService';

describe('ExportService', () => {
  let createElementSpy, createObjectURLSpy, linkMock;

  beforeEach(() => {
    linkMock = {
      click: jest.fn(),
      set href(value) {},
      set download(value) {},
    };
    createElementSpy = jest.spyOn(document, 'createElement').mockReturnValue(linkMock);
    createObjectURLSpy = jest.spyOn(URL, 'createObjectURL').mockReturnValue('blob:url');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should create a CSV file from data and trigger download', () => {
    const rows = [
      { flightNumber: 'BOEING001', status: 'SCHEDULED' },
      { flightNumber: 'AIRBUS123', status: 'DELAY' }
    ];
    const fileName = 'flights';

    exportToCsv(rows, fileName);

    expect(createElementSpy).toHaveBeenCalledWith('a');
    expect(createObjectURLSpy).toHaveBeenCalled();
    expect(linkMock.download).toBe('flights.csv');
    expect(linkMock.click).toHaveBeenCalled();
  });

  it('should not trigger download if rows are empty', () => {
    const rows = [];
    const fileName = 'flights';

    exportToCsv(rows, fileName);

    expect(createElementSpy).not.toHaveBeenCalled();
    expect(createObjectURLSpy).not.toHaveBeenCalled();
    expect(linkMock.click).not.toHaveBeenCalled();
  });
});
