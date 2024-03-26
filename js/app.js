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

	appendTableHtml(currentTeamMember);
}

const form = document.getElementById("form-add-members");
console.log(form);
form.addEventListener('submit', aggiungiMembro);

//Funzione che accetta un parametro di tipo evento
function aggiungiMembro(e) {
	//Disabilitare la propagazione del submit
	console.log(e);
	e.preventDefault();
	//Recuperiamo i singoli input per recuperare il valore che viene inserito 
	//alla compilazione del form 
	const name = document.getElementById("name").value;
	const job = document.getElementById("role").value;
	const email = document.getElementById("email").value;
	//con i valori si costruisce il nuovo membro

	const nuovoMembro = {
		name: name,
		job: job,
		email: email
	};

	console.log(nuovoMembro);
	//Deve pushare il nuovo membro nell'array
	teams.push(nuovoMembro);

	console.log(teams);

	appendTableHtml(nuovoMembro);
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