import app = require("teem");
import Usuario = require("../models/usuario");
import Post = require("../models/post");
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

	public async pesquisa(req: app.Request, res: app.Response) {
		
		let usuario = await conferirCookie(req);
		/* if (!usuario) {
			res.redirect("/login");
			return;
		} */
		

		let opcoes = {
			titulo: "Pesquisa",
			usuario: usuario 
		};

		res.render("index/pesquisa", opcoes);
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


	
	public async noticias(req: app.Request, res: app.Response) {
		let usuario = await conferirCookie(req);
		console.log("Usuario enviado", usuario)

		let opcoes = {
            titulo: "noticias",
			usuario: usuario
        };
        res.render("index/noticias", opcoes);
    }
	public async forum(req: app.Request, res: app.Response) {
		let usuario = await conferirCookie(req);
		let todos = []
		await app.sql.connect(async (sql) =>{

			todos = await sql.query("select posTitu, posCont, posView, posData, usuNome from Post p inner join usuario u on p.idUsu = u.idUsu where p.exclusao is null;");
			
			
		});
		
		let opcoes = {
            titulo: "forum",
			usuario: usuario,
			postados: todos
        };
		console.log(opcoes.postados)
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
				idUsu = lista[0];
			}

		});

		if (!idUsu) {
			res.status(400).json("Usuário ou senha inválido");
			return;
		}

		res.cookie(cookieLogin, JSON.stringify({ idUsu }), {
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

		if (!usuario.usuMail){
			res.status(400);
			res.json("E-mail está inválido");
			return;
		}

		if (!usuario.usuPass){
			res.status(400);
			res.json("Senha inválida");
			return;
		}

		if (!usuario.usuNasc){
			res.status(400);
			res.json("Data de nascimento inválida");
			return;
		}

		await app.sql.connect(async (sql) =>{

			await sql.query("insert into usuario (usuNome, usuMail, usuPass, usuNasc) values (?, ?, ?, ?)", [usuario.usuNome, usuario.usuMail, usuario.usuPass, usuario.usuNasc]);

		});

		res.json(true);

	}
	@app.http.post()
	public async criarPost(req: app.Request, res: app.Response) {
		let usuario = await conferirCookie(req);
		let post: Post = req.body;
		post.idUsu = usuario.idUsu;

		if (!post){
			res.status(400);
			res.json("Dados inválidos");
			return;
		}

		if (!post.posTitu){
			res.status(400);
			res.json("Titulo inválido");
			return;
		}

		if (!post.posCont){
			res.status(400);
			res.json("Conteudo inválido");
			return;
		}

		if (!post.idUsu){
			res.status(400);
			res.json("ID inválida");
			return;
		}

		await app.sql.connect(async (sql) =>{

			await sql.query("insert into post (posTitu, posCont, posView, posData, idUsu) values (?, ?, ?, now(), ?)", [post.posTitu, post.posCont, post.posView, post.idUsu]);

		});

		res.json(true);

	}
}

export = IndexRoute;
