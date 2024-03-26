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

const availableJobsTitle = ['Designer', 'Project Manager', 'Developer']
// console.log(availableJobsTitle.includes('Pizzaiolo'))
console.log(teams)

// PER OGNI membro del team
for (let i = 0; i < teams.length; i++) {
	const currentTeamMember = teams[i]
	// console.log(currentTeamMember)
	// recuperaimo nome
	//const name = currentTeamMember.name
	// recuperiamo job
	//const job = currentTeamMember.job
	// recuperiamo email
	//const email = currentTeamMember.email

	//console.log(name, job, email)

	appendTableHtml(currentTeamMember)
}

const form = document.getElementById('form-add-members')
console.log(form)
form.addEventListener('submit', aggiungiMembro)

//Funzione che accetta un parametro di tipo evento
function aggiungiMembro(e) {
	//Disabilitare la propagazione del submit
	console.log(e)
	e.preventDefault()
	//Recuperiamo i singoli input per recuperare il valore che viene inserito
	//alla compilazione del form
	const name = document.getElementById('name').value // string
	const job = document.getElementById('role').value // string
	const email = document.getElementById('email').value // string
	//con i valori si costruisce il nuovo membro

	const nuovoMembro = {
		name: name,
		job: job,
		email: email,
	}

	console.log(nuovoMembro)
	//Deve pushare il nuovo membro nell'array
	teams.push(nuovoMembro)

	console.log(teams)

	const isValid = validateMember(name, job, email)
	if (isValid) {
		appendTableHtml(nuovoMembro)
	}
}
//accetta come parametro un membro del team
function appendTableHtml(member) {
	const tBodyElement = document.getElementById('table-body')

	const trHTMLString = `
	<tr>
	  <td>${member.name}</td>
	  <td>${member.job}</td>
	  <td>${member.email}</td>
	</tr>
	`
	tBodyElement.innerHTML += trHTMLString
}

function validateMember(name, job, email) {
	console.log(name, typeof name)
	console.log(job, typeof job)
	console.log(email, typeof email)

	// // validation di name
	if (name === '') {
		console.log('il nome non è valido')
		return false
	}

	// // // validation di job
	if (availableJobsTitle.includes(job) === false) {
		console.log('il job selezionato non è valido')
		return false
	}
	// else if () {
	// 	console.log(job, 'non è un valore valido')
	// 	return false
	// }

	// // // validation di email
	if (email === '') {
		console.log('email non è valida')
		return false
	}

	// if (name === '' || job === '' || email === '') {
	// 	return false
	// }

	// return boolean
	return true
}
