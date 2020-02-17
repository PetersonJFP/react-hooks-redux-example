import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// actions sempre retornam um objeto com o type usado para identificar a ação no reducer e os dados necessários para realizar a ação
function addCourseAction(title) {
  return { type: "ADD_COURSE", payload: title };
}

export default function CourseList() {
  const [input, setInput] = useState("");
  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch(addCourseAction(input));
    setInput("");
  }

  return (
    <>
      <ul>
        {courses.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type="button" onClick={addCourse}>
        Adicionar curso
      </button>
    </>
  );
}
