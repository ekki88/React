import React, {useState} from 'react';

const AppMentor = () => {
    const [person, setPerson] = useState({
        name: "보미",
        title: "초밥요리사",
        mentor: {
            name:"규성",
            title:"축구선수",
        },
    });
    return (
        <div>
            <h1>{person.name}는 {person.title}</h1>
            <p>{person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})</p>
            <button onClick={()=>{
                const name = prompt('이름')
                setPerson((person)=>({
                    ...person,
                    mentor:{...person.mentor, name},
                }));
            }}>멘토 이름 바꾸기</button>
            <button onClick={()=>{
                const title = prompt('타이틀')
                setPerson((person)=>({
                    ...person,
                    mentor:{...person.mentor, title},
                }));
            }}>멘토 타이틀 바꾸기</button>
        </div>
    );
};

export default AppMentor;