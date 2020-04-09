const {Button, TextInput, TextView, contentView, localStorage} = require('tabris');

const KEY = 'snippet-value';

let valueLabel = new TextView({
  left: 32, top: 32,
  text: 'Value:'
}).appendTo(contentView);

let valueField = new TextInput({
  left: 'prev() 12', baseline: valueLabel, right: 32,
  text: localStorage.getItem(KEY) || 'Hello world!'
}).appendTo(contentView);

new Button({
  left: 24, right: '66%', top: [valueLabel, 24],
  text: 'Set'
}).on('select', () => {
  localStorage.setItem(KEY, valueField.text);
  valueField.text = '';
}).appendTo(contentView);

new Button({
  left: '33% 12', right: '33% 12', top: [valueLabel, 24],
  text: 'Get'
}).on('select', () => {
  valueField.text = localStorage.getItem(KEY) || '';
}).appendTo(contentView);

new Button({
  left: '66%', right: 24, top: [valueLabel, 24],
  text: 'Remove'
}).on('select', () => {
  localStorage.removeItem(KEY);
  valueField.text = '';
}).appendTo(contentView);
