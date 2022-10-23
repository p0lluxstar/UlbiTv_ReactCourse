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
import PostForm from './components/PostForm';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description 1'},
    {id: 2, title: 'Javascript', body: 'Description 2'},
    {id: 3, title: 'Javascript', body: 'Description 3'},
    {id: 4, title: 'Javascript', body: 'Description 4'}
  ]);


  const createPost = (newPost) => {
    setPosts ([...posts, newPost])
  }
  
  return (
    <div className='App'> 
      <PostForm create={createPost}/>
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
