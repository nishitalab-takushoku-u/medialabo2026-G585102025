let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};
let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];
function showCampusInfo() {
	const addrHeading = document.querySelector('h2#addr');
	if (addrHeading) {
		const existingAddress = document.querySelector('p#campus-address');
		if (existingAddress) {
			existingAddress.remove();
		}
		const addressPara = document.createElement('p');
		addressPara.id = 'campus-address';
		addressPara.textContent = campus.address;
		addrHeading.insertAdjacentElement('afterend', addressPara);
	}
	const deptHeading = document.querySelector('h2#dept');
	if (deptHeading) {
		const existingList = document.querySelector('ul#dept-list');
		if (existingList) {
			existingList.remove();
		}
		const deptList = document.createElement('ul');
		deptList.id = 'dept-list';
		for (const item of gakka) {
			const deptItem = document.createElement('li');
			deptItem.textContent = item.name;
			deptList.appendChild(deptItem);
		}
		deptHeading.insertAdjacentElement('afterend', deptList);
	}
}
const showButton = document.getElementById('show');
if (showButton) {
	showButton.addEventListener('click', showCampusInfo);
}

