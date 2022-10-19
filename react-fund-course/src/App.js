import React, {useState} from 'react';
import {useRef} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import './styles/App.css'
import PostItem from './components/PostItem';
import TestComponent from './components/TestComponent';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description 1'},
    {id: 2, title: 'Javascript', body: 'Description 2'},
    {id: 3, title: 'Javascript', body: 'Description 3'},
    {id: 4, title: 'Javascript', body: 'Description 4'}
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('')

  const bodyInputRef = useRef();
  
  const addNewPost = (e) =>{
    e.preventDefault(); // функция предотвращает поведение браузера по умолчание а именно после нажатия на кнопку страница не обновляется (данные не уходят на сервер type='submit')
    const newPost = {
      id: Date.now(), // id обязательно
      title,
      body
    }
    setPosts([...posts, newPost]) // добавляем новый массив (пост) в существующий список постов
    setTitle('') // обнуляем состояния поля, отображается placeholder
    setBody('') // обнуляем состояния поля, отображается placeholder
  }

  

  return (
    <div className='App'> 
      <form>
        {/*Управляемый компонент*/}
          <MyInput
            value={title} 
            onChange={e => setTitle(e.target.value)}
            type='text'
            placeholder='Название поста'
          />
          <MyInput
           value={body} 
          onChange={e => setBody(e.target.value)}
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
      <PostList list={posts} title={'Посты про JS'}/>
  
      <br />
      <br />
      <br />
      <Counter />
      <br />
      <ClassCounter />
      <br />
      <br />
      <br />
      <TestComponent text={'Тестовый компонент'}/>

    </div>
  );
}

export default App;
