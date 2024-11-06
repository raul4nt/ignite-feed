import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';


// estado = variáveis que eu quero que o componente monitore

export function Post({ author, publishedAt, content }){
    const [comments, setComments] = useState([
       'Post muito bacana, hein?'
        // o UseState do react é interssante usarmos destruturaçao. ele recebe primeiro
        // o valor q ele possuirá de começo, e depois uma funçao(que escolhemos o nome setComments),
        // que vai ser a funçao usada pra adicionarmos algo no valor default.
        // ou seja, manipularemos os comments atraves de setComments.
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
       locale: ptBR,
    })
    // usando a lib date-fns, temos varias configs para determinar como 
    // queremos mostrar as datas. ele viu na documentation da lib. 
    // colocamos entre aspas simples o que nao faz parte do format

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true, // adiciona um sufixo(no brasil seria prefixo). ex: de '8 dias' fica pra 'há 8 dias'
    })

    function handleCreateNewComment() {
        event.preventDefault()
        // a idéia do prevent default é prevenir o que é setado
        // como default. neste caso, quando usamos o onSubmit em html, o default
        // é, apos clicar no botao de submit ou apertar enter, ele nos redirecionar pra 
        // outra pagina. mas nao é o que queremos, por isso, usamos o preventDefault.
        // const newCommentText = event.target.comment.value
        setComments([...comments, newCommentText]);
        // ... = spread operator. copia o que ja existe. neste caso, tem 1, 2 lá
        // na variável comments(array). entao ele pega tudo isso, e ai adiciona mais um
        // pois estamos usando o comments.lenght + 1. se em comments tem 1 e 2, a lenght é 
        // 2, e quando usarmos o onsubmit, o novo valor vai ser lengh + 1, logo, 3
        // nesse "setador" do UseState do react sempre devemos passar o novo valor q ele receberá,
        // e nao apenas um acrescimo. por isso, precisamos recuperar o valor antigo(uasndo o ...comments),
        // e ai sim acrescentar algo.
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        }) 
        // gerar uma nova lista deixando apenas os comentarios que sejam diferentes do comentario
        // que eu quero deletar

        setComments(commentsWithoutDeletedOne)
    }


    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>  
            
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type == 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    // monitora toda vez que alterar o conteudo
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                })}
            </div>

        </article>
    )
}