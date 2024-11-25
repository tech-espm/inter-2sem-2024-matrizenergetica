import app = require("teem");

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


	public async produtos(req: app.Request, res: app.Response) {
		let produtoA = {
			id: 1,
			nome: "Produto A",
			valor: 25
		};

		let produtoB = {
			id: 2,
			nome: "Produto B",
			valor: 15
		};

		let produtoC = {
			id: 3,
			nome: "Produto C",
			valor: 100
		};

		let produtosVindosDoBanco = [ produtoA, produtoB, produtoC ];

		let opcoes = {
			titulo: "Listagem de Produtos",
			produtos: produtosVindosDoBanco
		};

		res.render("index/produtos", opcoes);
	}
	async posts(req, res) {
        let opcoes = {
            titulo: "posts"
        };
        res.render("index/posts", opcoes);
    }
	async forum(req, res) {
        let opcoes = {
            titulo: "forum"
        };
        res.render("index/forum", opcoes);
    }
}

export = IndexRoute;
