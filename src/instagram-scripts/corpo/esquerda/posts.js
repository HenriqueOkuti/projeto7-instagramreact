import React from "react";

function Posts() {

    // like by post button
    function Like(e) {
        console.log(e.target.id)
        if (heartlike === "heart-outline") {
            setHeartlike('heart');
            setLikecolor('like');
        }
        else {
            setHeartlike('heart-outline');
            setLikecolor('default');
        }
        return;
    }

    // like by post image
    function LikePost(e) {
        if (heartlike === "heart-outline") {
            setHeartlike('heart');
            setLikecolor('like');
        }
        return;
    }

    const [heartlike, setHeartlike] = React.useState("heart-outline");
    const [likeColor, setLikecolor] = React.useState("default");

    let valorLikes = [101.523, 99.159];
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
                    [<ion-icon id={0} class={likeColor} onClick={(e) => Like(e)} name={heartlike}></ion-icon>, <ion-icon name="chatbubble-outline"></ion-icon>, <ion-icon name="paper-plane-outline"></ion-icon>],
                    [<ion-icon name="bookmark-outline"></ion-icon>]
                ],
                curtidas: {
                    imagem: "../assets/img/respondeai.svg",
                    texto: ['Curtido por', <strong> respondeai </strong>, 'e', <strong> outras {valorLikes[0]} pessoas </strong>]
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
                    [<ion-icon id={1} class={likeColor} onClick={(e) => Like(e)} name={heartlike}></ion-icon>, <ion-icon name="chatbubble-outline"></ion-icon>, <ion-icon name="paper-plane-outline"></ion-icon>],
                    [<ion-icon name="bookmark-outline"></ion-icon>]
                ],
                curtidas: {
                    imagem: "../assets/img/adorable_animals.svg",
                    valor: 100,
                    texto: ['Curtido por', <strong> adorable_animals </strong>, 'e', <strong> outras {valorLikes[1]} pessoas</strong>]
                }
            }
        }

    ];

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
        console.log(conteudo)
        return (
            <div onClick={(e) => LikePost(e)} class="conteudo">
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
    const componentePosts = posts.map((e) => renderPost(e));

    return (
        <div class="posts">
            <>
                {componentePosts}
            </>
        </div>
    )
};

export default Posts;