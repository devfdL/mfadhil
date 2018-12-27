'use strict';
const {h, Text} = require('ink'); // eslint-disable-line no-unused-vars
const SelectInput = require('ink-select-input'); // eslint-disable-line no-unused-vars
const open = require('opn');



const handleSelect = item => {
	if (item.value) {
		open(item.value);
    }


	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Instagram',
		value: 'https://www.instagram.com/m.fadhil09/'
    },
    {
		label: 'Github',
		value: 'https://github.com/devfdL'
	},
	{
		label: 'E-mail',
		value: 'mailto:mfadhil099@gmail.com'
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<div>
		<SelectInput items={items} onSelect={handleSelect}/>
		</div>
	</div>
);

