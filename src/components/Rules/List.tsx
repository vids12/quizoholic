import { useParams } from 'react-router-dom'

export function List() {
  const { categoryName } = useParams()
  return (
    <ul className="list-disc list-inside m-2">
      <li>There are 5 questions on India's {categoryName}.</li>
      <li>
        For every correct answer, 5 points are
        <span className="text-green-500"> granted</span>.
      </li>
      <li>
        For every incorrect answer, 2 points will be
        <span className="text-red-600"> deducted</span>.
      </li>
      <li>You can skip the question.</li>
    </ul>
  )
}
