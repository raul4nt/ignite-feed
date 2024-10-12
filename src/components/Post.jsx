import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/raul4nt.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Raul Silveira</strong>
                        <span>Estudante de TI</span>
                    </div>
                </div>  
            
                <time title='12 de Setembro às 19:12h' dateTime="2024-10-12 19:12:25">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 {' '}<a href="">jane.design/doctorcare</a></p>

                <p><a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a></p>
            </div>

        </article>
    )
}