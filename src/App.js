import { List } from './components/List';
import { Detail } from './components/Detail';
import { useEffect, useState } from 'react';
import './App.css';
import { click } from '@testing-library/user-event/dist/click';

function App() {
  const [data,setData] = useState([]);
  const [clickData,setClickData] = useState();
  const [detail,setDetail] = useState();
  const [ids,setIds] = useState();

  useEffect(()=>{
    let link = fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
    link.then((datas)=>{datas.json().then(data=>{setData([...data])})})
  },[])
  function click (e){
    setDetail('loading');
    const {target} = e;
    const clickData = {
      id:target.id,
      name:target.innerHTML
    }
    console.log(ids);
    console.log(target.id)
    if(Number(ids) == Number(target.id)){
      setClickData(undefined);
      return
    }
    setClickData(clickData);
    setIds(target.id)
  }
  useEffect(()=>{
    if(clickData !==undefined){
    const {id,name} = clickData;
    let link = fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`);
    link.then((datas)=>{datas.json().then(data=>{
      setDetail(data)
    })})
    }
  },[clickData])
  return (
    <div className='container'>
      <List data={data} click = {click}></List>
      <Detail detail={detail} setIds={setIds}></Detail>
    </div>
  );
}

export default App;
