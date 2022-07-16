import React from "react";

function Posts() {
    return (
        <div class="posts">
            <>
                {componentePosts}
            </>

        </div>
    )
};
const posts = [

    {
        topo: {
            usuario: {
                imagem: "../assets/img/meowed.svg",
                usuario: 'meowed',
            },
            acoes: <ion-icon name="ellipsis-horizontal"></ion-icon>
        },
        conteudo: {
            imagem_post: "../assets/img/gato-telefone.svg"
        },
        fundo: {
            acoes: [
                [<ion-icon onClick={() => alert("Clicou")} name="heart-outline"></ion-icon>, <ion-icon name="chatbubble-outline"></ion-icon>, <ion-icon name="paper-plane-outline"></ion-icon>],
                [<ion-icon name="bookmark-outline"></ion-icon>]
            ],
            curtidas: {
                imagem: "../assets/img/respondeai.svg",
                texto: ['Curtido por', <strong> respondeai </strong>, 'e', <strong> outras 101.523 pessoas </strong>]
            }
        }
    },
    {
        topo: {
            usuario: {
                imagem: "../assets/img/barked.svg",
                usuario: 'barked',
            },
            acoes: <ion-icon name="ellipsis-horizontal"></ion-icon>
        },
        conteudo: {
            imagem_post: "../assets/img/dog.svg"
        },
        fundo: {
            acoes: [
                [<ion-icon onClick={() => alert("Clicou")} name="heart-outline"></ion-icon>, <ion-icon name="chatbubble-outline"></ion-icon>, <ion-icon name="paper-plane-outline"></ion-icon>],
                [<ion-icon name="bookmark-outline"></ion-icon>]
            ],
            curtidas: {
                imagem: "../assets/img/adorable_animals.svg",
                texto: ['Curtido por', <strong> adorable_animals </strong>, 'e', <strong> outras 99.159 pessoas</strong>]
            }
        }
    }

];
const componentePosts = posts.map((e) => renderPost(e));
function renderPost(post) {
    return (
        <div class="post">
            {renderTopo(post.topo)}
            {renderConteudo(post.conteudo)}
            {renderFundo(post.fundo)}
        </div>
    )
};
function renderTopo(topo) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={topo.usuario.imagem} alt="" />
                {topo.usuario.usuario}
            </div>
            <div class="acoes">
                {topo.acoes}
            </div>
        </div>
    );
};
function renderConteudo(conteudo) {
    return (
        <div class="conteudo">
            <img src={conteudo.imagem_post} alt="" />
        </div>
    );
};
function renderFundo(fundo) {
    return (
        <div class="fundo">
            <div class="acoes">
                <div>
                    {fundo.acoes[0][0]}
                    {fundo.acoes[0][1]}
                    {fundo.acoes[0][2]}
                </div>
                <div>
                    {fundo.acoes[1][0]}
                </div>
            </div>

            <div class="curtidas">
                <img src={fundo.curtidas.imagem} alt="" />
                <div class="texto">
                    {fundo.curtidas.texto}
                </div>
            </div>
        </div>
    );
};

export default Posts;