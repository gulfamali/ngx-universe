/* eslint-disable @typescript-eslint/no-explicit-any */
import _ from 'lodash';

export function searchList(
  dataList: any[],
  searchText: string,
  options?: { searchKeys?: string[]; searchParams?: object }
) {
  searchText = searchText?.trim()?.toLowerCase() ?? '';
  if (searchText === '') return dataList;

  return dataList.filter((data) => {
    if (options?.searchParams && !_.isMatch(data, options?.searchParams)) return false;

    if (searchText === '') return true;

    const safeKeys = Object.keys(data).filter((k) => {
      return ['string', 'number'].includes(typeof data[k]);
    });

    let safeObject = _.pick(data, safeKeys);
    if (options?.searchKeys?.length) safeObject = _.pick(safeObject, options.searchKeys);

    const searchFound = Object.values(safeObject).filter((value: string | number) => {
      return value.toString().toLowerCase().includes(searchText);
    });

    return searchFound.length > 0;
  });
}

export function makeAddress(data: string[]) {
  return data.filter((d) => d && ['', 'NA', '-'].includes(d.trim())).join(', ');
}

export function isNullEmpty(val: any) {
  return val === null || val === undefined || val === '';
}

export function downloadBlob(data: Blob, type: string, fileName: string) {
  const blob = new Blob([data], { type });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

export function downloadExcel(records: any[], fileName = 'file.csv') {
  //const content = 'data:text/csv;charset=utf-8,';
  const data = _.cloneDeep(records);
  const keys = Object.keys(data[0]);
  const header = keys.join(',');

  // escape comma in data
  data.forEach((row) => {
    Object.keys(row).forEach((key) => {
      if (typeof row[key] === 'string' && row[key]?.includes(',')) {
        row[key] = row[key].replace(/"/g, '');
        row[key] = `"${row[key]}"`;
      }
    });
  });

  const rows = data.map((row) => keys.map((key) => row?.[key] ?? '').join(','));
  const csv = [header, ...rows].join('\n');

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = fileName;
  link.click();
}

export function isMathExpression(str: string) {
  try {
    const arithmeticRegex = /^[\d\s()+\-*/.]+$/;
    if (arithmeticRegex.test(str)) {
      const temp = window.eval(str);
      return temp && temp !== '' && !isNaN(temp);
    }
    return false;
  } catch (err) {
    return false;
  }
}

export function parseJson(json: string) {
  try {
    return JSON.parse(json);
  } catch (e: any) {
    console.error('Error parsing JSON', e.stack);
    return null;
  }
}

export function parseNumber(value: string | number): number {
  if (value === '') return 0;
  if (typeof value === 'number') return value;

  let isNegative = 1;
  if (value[0] === '-') isNegative = -1;

  value = value.replace(/[^0-9.]/g, '');
  return isNegative * Number(value);
}

export function formatNumberWithCommas(value?: string | number): string {
  if (!value) return '';

  value = value.toString();
  const isNegative = value.includes('-');
  value = value.replace(/[^0-9.]/g, '');

  const num = Number(value);

  const formattedNumber = Math.abs(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return isNegative ? `-${formattedNumber}` : formattedNumber;
}
