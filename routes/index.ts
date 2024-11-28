import app = require("teem");
import Usuario = require("../models/usuario");
import { conferirCookie } from "../models/conferir";

const cookieLogin = "ecosenseuser";

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		
		let usuario = await conferirCookie(req);
		/* if (!usuario) {
			res.redirect("/login");
			return;
		} */
		
		let opcoes = {
			titulo: "",
			usuario: usuario 
		};

		res.render("index/index" , opcoes);
	}

	public async sobre(req: app.Request, res: app.Response) {
		
		let usuario = await conferirCookie(req);
		/* if (!usuario) {
			res.redirect("/login");
			return;
		} */
		

		let opcoes = {
			titulo: "Sobre",
			usuario: usuario 
		};

		res.render("index/sobre", opcoes);
	}
	
	public async login(req: app.Request, res: app.Response) {
		
		let usuario = await conferirCookie(req);
		/* if (!usuario) {
			res.redirect("/login");
			return;
		} */
		

		let opcoes = {
			titulo: "Login",
			usuario: usuario 
		};

		res.render("index/login", opcoes);
	}
	public async ajudar(req: app.Request, res: app.Response) {
		
		let usuario = await conferirCookie(req);
		/* if (!usuario) {
			res.redirect("/login");
			return;
		} */
		
		let opcoes = {
			titulo: "Como Ajudar",
			usuario: usuario
		};

		res.render("index/ajudar", opcoes);
	}
	public async faq(req: app.Request, res: app.Response) {
		let usuario = await conferirCookie(req);
		/* if (!usuario) {
			res.redirect("/login");
			return;
		} */
		

		let opcoes = {
			titulo: "FAQ",
			usuario: usuario
		};

		res.render("index/faq", opcoes);
	}
	public async mapa(req: app.Request, res: app.Response) {
		let usuario = await conferirCookie(req);
		/* if (!usuario) {
			res.redirect("/login");
			return;
		} */

		let opcoes = {
			titulo: "Mapa",
			usuario: usuario
		};

		res.render("index/mapa", opcoes);
	}


	
	public async posts(req: app.Request, res: app.Response) {
		let usuario = await conferirCookie(req);

		let opcoes = {
            titulo: "posts",
			usuario: usuario
        };
        res.render("index/posts", opcoes);
    }
	public async forum(req: app.Request, res: app.Response) {
		let usuario = await conferirCookie(req);
		
		let opcoes = {
            titulo: "forum",
			usuario: usuario
        };
        res.render("index/forum", opcoes);
    }

	@app.http.post()
	public async efetuarLogin(req: app.Request, res: app.Response) {
		let usuario: Usuario = req.body;

		if (!usuario){
			res.status(400);
			res.json("Dados inválidos");
			return;
		}

		if (!usuario.usuMail){
			res.status(400);
			res.json("E-mail inválido");
			return;
		}

		if (!usuario.usuPass){
			res.status(400);
			res.json("Senha inválida");
			return;
		}

		let idUsu = 0;
		let usuNome = "";

		await app.sql.connect(async (sql) =>{

			let lista: any[] = await sql.query("select idUsu from usuario where usuMail = ? and usuPass = ?", [usuario.usuMail, usuario.usuPass]);

			if (lista.length) {
				idUsu = lista[0].idUsu;
			}

		});

		if (!idUsu) {
			res.status(400).json("Usuário ou senha inválido");
			return;
		}

		res.cookie(cookieLogin, idUsu.toString(), {
			secure: false,
			maxAge: 365 * 24 * 60 * 60,
			sameSite: "strict"
		});

		res.json(true);

	}

	@app.http.post()
	public async criarUsuario(req: app.Request, res: app.Response) {
		let usuario: Usuario = req.body;

		if (!usuario){
			res.status(400);
			res.json("Dados inválidos");
			return;
		}

		if (!usuario.usuNome){
			res.status(400);
			res.json("Nome inválido");
			return;
		}

		await app.sql.connect(async (sql) =>{

			await sql.query("insert into usuario (usuNome, usuMail, usuPass, usuNasc) values (?, ?, ?, ?)", [usuario.usuNome, usuario.usuMail, usuario.usuPass, usuario.usuNasc]);

		});

		res.json(true);

	}
}

export = IndexRoute;
