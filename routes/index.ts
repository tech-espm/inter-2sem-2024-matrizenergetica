import app = require("teem");
import Usuario = require("../models/usuario");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		res.render("index/index");
	}

	public async sobre(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Sobre"
		};

		res.render("index/sobre", opcoes);
	}
	
	public async login(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Login"
		};

		res.render("index/login", opcoes);
	}
	public async ajudar(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Como Ajudar"
		};

		res.render("index/ajudar", opcoes);
	}
	public async faq(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "FAQ"
		};

		res.render("index/faq", opcoes);
	}
	public async mapa(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Mapa"
		};

		res.render("index/mapa", opcoes);
	}


	
	public async posts(req, res) {
        let opcoes = {
            titulo: "posts"
        };
        res.render("index/posts", opcoes);
    }
	public async forum(req, res) {
        let opcoes = {
            titulo: "forum"
        };
        res.render("index/forum", opcoes);
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
