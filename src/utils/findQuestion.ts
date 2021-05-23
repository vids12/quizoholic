import { Question } from "../data/quiz.types";
import { questionBank } from "../data/quizIndia";

export function findQuestion(qno: number,categoryName: string): Question | undefined {
    const category = questionBank.category.find(obj=>obj.categoryName===categoryName);
    return category?.question.find(obj=> obj.questionNo===qno);
  }