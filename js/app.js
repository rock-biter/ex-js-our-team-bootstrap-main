console.log('our team')

const teams = [
	{
		name: 'Ludovica Massimino',
		job: 'Developer',
		email: 'ludo@gmail.com',
	},
	{
		name: 'Alessandro Leanza',
		job: 'Project Manager',
		email: 'ale.lea@gmail.com',
	},
	{
		name: 'Davide Muto',
		job: 'Designer',
		email: 'dadde@gmail.com',
	},
	{
		name: 'Andrea Giacometti',
		job: 'Developer',
		email: 'andre@gmail.com',
	},
	{
		name: 'antonietta Brenga',
		job: 'Designer',
		email: 'antobre@gmail.com',
	},
	{
		name: 'RosaCielo Pistolesi',
		job: 'Project Manager',
		email: 'rosa@gmail.com',
	},
	{
		name: 'Gabriele Tosto',
		job: 'Designer',
		email: 'tostissimo@gmail.com',
	},
]

console.log(teams)

const tBodyElement = document.getElementById('table-body')
console.log(tBodyElement)

// PER OGNI membro del team
for (let i = 0; i < teams.length; i++) {
	const currentTeamMember = teams[i]
	// console.log(currentTeamMember)
	// recuperaimo nome
	const name = currentTeamMember.name
	// recuperiamo job
	const job = currentTeamMember.job
	// recuperiamo email
	const email = currentTeamMember.email

	console.log(name, job, email)

	const trHTMLString = `
	<tr>
	  <td>${name}</td>
	  <td>${job}</td>
	  <td>${email}</td>
	</tr>
	`
	// console.log(trHTMLString)
	// const trHTMLString =
	// 	'<tr>' +
	// 	'<td>' +
	// 	name +
	// 	'</td>' +
	// 	'<td>' +
	// 	job +
	// 	'</td>' +
	// 	'<td>' +
	// 	email +
	// 	'</td>' +
	// 	'</tr>'
	// creare il tag html del tr:

	// aggiungiamo il tag nel tbody della tabella
	tBodyElement.innerHTML += trHTMLString
}
