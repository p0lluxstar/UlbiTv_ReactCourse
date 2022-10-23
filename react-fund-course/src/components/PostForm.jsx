import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';


const PostForm = ({create}) => {
    const [post, setPost] = useState ({title:'', body: ''})

    const addNewPost = (e) =>{
        e.preventDefault(); // функция предотвращает поведение браузера по умолчание а именно после нажатия на кнопку страница не обновляется (данные не уходят на сервер type='submit')
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      }
    return(
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={post.title} 
                onChange={e => setPost({...post, title: e.target.value})}
                type='text'
                placeholder='Название поста'
            />
            <MyInput
                value={post.body} 
                onChange={e => setPost({...post, body: e.target.value})}
                type='text'
                placeholder='Описание поста'
            />
            {/*Неуправляемый\Некотнолируемый компонент 
            <MyInput
            ref={bodyInputRef}
            type='text'
            placeholder='Описание поста'
            />*/}
            <MyButton onClick={addNewPost}>Создать пост</MyButton> {/*при нажатии будет вызываться функция addNewPost*/}
        </form>
    )
}
export default PostForm;