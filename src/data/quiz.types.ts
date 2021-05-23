export type Question = {
    questionNo: number;
    text: string;
    answer: Answer[];
    points: number;
    negativePoints: number;
};
  
export type Answer = {
   value: string | number;
   isRight: boolean;
};

export type Category = {
   categoryName: string;
   question: Question[];     
};
  
export type Quiz = {
   quizName: string;
   category: Category[];
};
  
export type HeaderProp = {
    username: string;
    score: number;
};
  