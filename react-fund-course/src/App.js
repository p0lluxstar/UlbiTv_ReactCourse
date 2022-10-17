import React, {useState} from 'react';
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

  const [title, setTitle] = useState('111')
 
  const addNewPost = (e) =>{
    e.preventDefault(); // функция имзменяет знаечени браузера по умолчание а именно после нажатия на кнопку страница не обновляется
  }

  return (
    <div className='App'> 
      <form>
        {/*Управляемый компонент*/}
          <MyInput 
            onChange={e => setTitle(e.target.value)}
            type='text'
            placeholder='Название поста'
          />
        <MyInput type='text' placeholder='Описание поста'/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton> {/*при нажатии будет вызываться функция addNewPost*/}
      </form>
      <PostList props={posts} title={'Посты про JS'}/>
  
      <br />
      <br />
      <br />
      <Counter />
    </div>
  );
}

export default App;
