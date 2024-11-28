import app = require("teem");
import Usuario = require("./usuario");

const cookieLogin = "ecosenseuser";

export async function conferirCookie(req: app.Request): Promise<Usuario | null> {
	let cookie = req.cookies[cookieLogin];
	if (!cookie)
		return null;

	let idUsu = parseInt(cookie);
	if (!idUsu)
		return null;

	let usuario: Usuario = null;

	await app.sql.connect(async (sql) => {
		let lista: Usuario[] = await sql.query("select idUsu from usuario where idUsu = ?", [idUsu,]);
		if (lista.length) {
			usuario = lista[0];
		}
	});

	return usuario;
}
