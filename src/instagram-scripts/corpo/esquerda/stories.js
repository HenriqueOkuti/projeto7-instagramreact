import React from 'react';

function Stories() {
    return (
        <div class="stories">
            <React.Fragment>
                {componenteStories}
            </React.Fragment>

            <React.Fragment>
                {componenteSetinha}
            </React.Fragment>

        </div>
    )
}

const stories = {
    story: [{
        imagem: "../assets/img/9gag.svg",
        usuario: '9gag'
    },
    {
        imagem: "../assets/img/meowed.svg",
        usuario: 'meowed'
    },
    {
        imagem: "../assets/img/barked.svg",
        usuario: 'barked'
    },
    {
        imagem: "../assets/img/nathanwpylestrangeplanet.svg",
        usuario: 'nathanwpylestrangeplanet'
    },
    {
        imagem: "../assets/img/wawawicomics.svg",
        usuario: 'wawawicomics'
    },
    {
        imagem: "../assets/img/respondeai.svg",
        usuario: 'respondeai'
    },
    {
        imagem: "../assets/img/filomoderna.svg",
        usuario: 'filomoderna'
    },
    {
        imagem: "../assets/img/memeriagourmet.svg",
        usuario: 'memeriagourmet'
    }],
    setinha: [{
        ion_icon: <ion-icon name="chevron-forward-circle"></ion-icon>
    }]
}

function renderStory(story) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={story.imagem} alt="" />
            </div>
            <div class="usuario">
                {story.usuario}
            </div>
        </div>
    )
}

function renderSetinha(setinha) {
    return (
        <div class="setinha">
            {setinha.ion_icon}
        </div>
    )
}

const componenteStories = stories.story.map(
    story => renderStory(story)
)

const componenteSetinha = stories.setinha.map(
    setinha => renderSetinha(setinha)
)




export default Stories;