// import React from "react";

// function QuestionList() {
//   return (
//     <section>
//       <h1>Quiz Questions</h1>
//       <ul>{/* display QuestionItem components here after fetching */}</ul>
//     </section>
//   );
// }

// export default QuestionList;

import React from "react";

function QuestionList({ questions = [] }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((q) => (
          <li key={q.id}>{q.prompt}</li>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
