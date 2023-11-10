import { Settings } from '../js/Settings';

let settings;

beforeEach(() => {
  settings = new Settings();
});

test('Должен правильно установить пользовательские настройки', () => {
  settings.setUserSettings('theme', 'light');
  expect(settings.userSettings.get('theme')).toBe('light');
});

test('Должен правильно объединить настройки по умолчанию и пользовательские настройки', () => {
  settings.setUserSettings('difficulty', 'hard');

  const mergedSettings = settings.settings;
  expect(mergedSettings.get('theme')).toBe('dark');
  expect(mergedSettings.get('music')).toBe('trance');
  expect(mergedSettings.get('difficulty')).toBe('hard');
});

test('Должны быть настройки по умолчанию, если пользовательские настройки не установлены', () => {
  const mergedSettings = settings.settings;
  expect(mergedSettings.get('theme')).toBe('dark');
  expect(mergedSettings.get('music')).toBe('trance');
  expect(mergedSettings.get('difficulty')).toBe('easy');
});

test('Должен возвращать правильные настройки после нескольких вызовов setUserSettings', () => {
  settings.setUserSettings('theme', 'light');
  settings.setUserSettings('music', 'rock');
  settings.setUserSettings('difficulty', 'medium');

  const mergedSettings = settings.settings;
  expect(mergedSettings.get('theme')).toBe('light');
  expect(mergedSettings.get('music')).toBe('rock');
  expect(mergedSettings.get('difficulty')).toBe('medium');
});

test('Должен инициализироваться с настройками по умолчанию и пустой userSettings map', () => {
  expect(settings.defaultSettings.get('theme')).toBe('dark');
  expect(settings.defaultSettings.get('music')).toBe('trance');
  expect(settings.defaultSettings.get('difficulty')).toBe('easy');
  expect(settings.userSettings.size).toBe(0);
});
