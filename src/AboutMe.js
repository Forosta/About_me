import React from 'react';

function AboutMe() {
    return (
        <div className="about-me container-fluid">
            <div className="about-me__row row">
                <div className="col-7">
                    <div className="warp__link">
                        <p className="about-me__link-text">Frontend-developer</p>
                        <a href="https://github.com/Forosta" className="about-me__link">github (project)</a>
                        <a href="https://t.me/igorft3" className="about-me__link">telegram</a>
                    </div>
                    <h1 className="about-me__title">Html 5, Css 3, Js, Git, БЭМ, Bootstrap</h1>
                    <p className="about-me__text"><span>Как я&nbsp;связал свою жизнь с&nbsp;программированием?</span> Мои первые шаги в&nbsp;мир
                        программирования были сделаны ещё в&nbsp;школе, когда мы&nbsp;впервые познакомились с&nbsp;HTML. На&nbsp;первый
                        взгляд, это было что-то незначительное, просто знакомство с&nbsp;веб-страницами и&nbsp;их&nbsp;тегами. Однако,
                        именно в&nbsp;этот момент зародился мой интерес. Как только я&nbsp;вернулся домой, я&nbsp;начал глубже изучать
                        HTML и&nbsp;CSS, и&nbsp;даже на&nbsp;коленке создал свою первую домашнюю библиотеку. Это были картинки с
                        авторами и&nbsp;их&nbsp;стихами. Спустя два года после того момента, я&nbsp;внезапно вспомнил о&nbsp;своем увлечении
                        и&nbsp;решил дать программированию ещё один шанс. Это оказался правильный выбор. Возможность
                        создавать красивые веб-интерфейсы собственными руками, добавлять разнообразный функционал и
                        исследовать бескрайний мир программирования открыли передо мной новые горизонты.Возможно, именно
                        из-за этого опыта и&nbsp;увлечения я&nbsp;решил связать свою жизнь с&nbsp;программированием.</p>
                    <div className="wrapp__cards">
                        {/*<img className="about-me__img img-1 card" />*/}
                        <figure className="about-me__img img-1 card">
                            <img src="/images/my-photo-1.jpg" alt="My Photo"/>
                        </figure>
                        <div className="card card__body">
                            <h2 className="card__text">Игорь Сухарев</h2></div>
                    </div>
                </div>
                <div className='card col-4'>
                    <figure className="img-fig">
                        <img className="img-2" src="/images/my-photo-2.jpg" alt="My Photo"/>
                    </figure>
                </div>
            </div>
            <h2 className="title">Почему я люблю анимации</h2>
            <video controls width="560" height="315">
                <source src="https://youtu.be/CBfqnNSBMfY" type="video/mp4" />
                Ваш браузер не поддерживает воспроизведение видео.
            </video>
        </div>
    )
        ;
}

export default AboutMe;
