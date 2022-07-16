const appendix = {
    links: 'Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma',
    copyright: '© 2021 INSTAGRAM DO FACEBOOK'
}

const usuario = {
    imagem: "../assets/img/catanacomics.svg",
    texto_domain: <strong>catanacomics</strong>,
    texto_user: 'Catana'
}

const sugestoes = {
    titulo: {
        texto_generico: "Sugestões para você",
        texto_expand: <div>Ver tudo</div>
    },
    sugestoes: [
        [{
            usuario: {
                imagem: "../assets/img/bad.vibes.memes.svg",
                usuario: "bad.vibes.memes",
                status: "Segue você"
            }
        }, {
            seguir: "Seguir"
        }],
        [{
            usuario: {
                imagem: "../assets/img/chibirdart.svg",
                usuario: "chibirdart",
                status: "Segue você"
            }
        }, {
            seguir: "Seguir"
        }],
        [{
            usuario: {
                imagem: "../assets/img/razoesparaacreditar.svg",
                usuario: "razoesparaacreditar",
                status: "Novo no Instagram"
            }
        }, {
            seguir: "Seguir"
        }],
        [{
            usuario: {
                imagem: "../assets/img/adorable_animals.svg",
                usuario: "adorable_animals",
                status: "Segue você"
            }
        }, {
            seguir: "Seguir"
        }],
    ]
}

function renderizaUsuario(usuario) {
    return (
        <div class="usuario">
            <img src={usuario.imagem} alt="" />
            <div class="texto">
                {usuario.texto_domain}
                {usuario.texto_user}
            </div>
        </div>
    );
}

function renderizaSugestoes(sugestoes) {
    return (
        <div class="sugestoes">
            {renderTitulo(sugestoes.titulo)}
            {sugestoes.sugestoes.map(e => renderSugestoes_lista(e))}
        </div>
    );
}

function renderTitulo(titulo) {
    return (
        <div class="titulo">
            {titulo.texto_generico}
            {titulo.texto_expand}
        </div>
    );
}

function renderSugestoes_lista(lista) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={lista[0].usuario.imagem} alt="" />
                <div class="texto">
                    <div class="nome">{lista[0].usuario.usuario}</div>
                    <div class="razao">{lista[0].usuario.status}</div>
                </div>
            </div>

            <div class="seguir">{lista[1].seguir}</div>
        </div>
    );
}

function renderizaLinks(links) {
    return (
        <div class="links">
            {links}
        </div>
    )
}

function renderizaCopyright(copyright) {
    return (
        <div class="copyright">
            {copyright}
        </div>
    )
}

function renderizaSidebar() {
    return (
        <div class="sidebar">
            {renderUsuario}
            {renderSugestoes}
            {renderLinks}
            {renderCopyright}
        </div>
    )
}

const renderUsuario = renderizaUsuario(usuario);
const renderSugestoes = renderizaSugestoes(sugestoes);
const renderLinks = renderizaLinks(appendix.links);
const renderCopyright = renderizaCopyright(appendix.copyright);
const renderSidebar = renderizaSidebar();

function Sidebar() {
    return (
        <>
            {renderSidebar}
        </>
    );
}




export default Sidebar;

