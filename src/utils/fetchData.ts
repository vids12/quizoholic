import 'firebase/firestore'
import firebase from '../firebase/firebase'
import { Category } from '../data/quiz.types'

export async function fetchData(categoryName: string){
    const firebaseData = firebase
            .firestore()
            .collection('quizoholic-quiz-data')
    const snapshot = await firebaseData.get()
    if (snapshot.empty) {
        console.log('No matching documents.')
        return
    }
    let categoryData: Category = { categoryName: '', question: [] }
    snapshot.forEach((doc) => {
        categoryData = doc.data().category.find((obj: Category) => {
            return obj.categoryName === categoryName
        })
    })
    return categoryData;
}