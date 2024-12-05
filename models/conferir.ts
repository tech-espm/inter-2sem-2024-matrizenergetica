import app = require("teem");
import Usuario = require("./usuario");

const cookieLogin = "ecosenseuser";

export async function conferirCookie(req: app.Request): Promise<Usuario | null> {
	let cookie = req.cookies[cookieLogin];
	if (!cookie)
		return null;

	let idUsu = JSON.parse(cookie);
	if (!idUsu.idUsu["idUsu"])
		return null;

	let usuario: Usuario = null;

	await app.sql.connect(async (sql) => {
		console.log("Conectando")
		let lista: Usuario[] = await sql.query("select idUsu, usuNome, usuMail, usuPass, usuNasc from usuario where idUsu = ?", [idUsu.idUsu["idUsu"]],);
		console.log("Finalizada", lista)
		if (lista.length) {
			usuario = lista[0];
		}
	});

	return usuario;
}
