import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://scontent.fsjp8-1.fna.fbcdn.net/v/t39.30808-6/241318847_3629242633845418_8967739168686586527_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=pNrVJIlxEz0AX9aK_1m&_nc_ht=scontent.fsjp8-1.fna&oh=00_AT_yi6ghsRBhHDkqd2vfzBF4rsWLXPolgUKg5tFB0nuR1g&oe=62CA0C81"/>
                    <div className={styles.authorInfo}>
                        <strong>Lucas Matheus</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time dateTime="2022-05-11 08:13:30" title="11 de Maio às 08:13h">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{' '}<a href="">jane.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
        </article>
    )
}