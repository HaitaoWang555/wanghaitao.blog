import { withNativeProps } from '@/utils/native-props'
import ListProvider from './ListProvider'

const UnorderedList: React.FC<JSX.IntrinsicElements['ul']> = (props) => {
  const { className = '' } = props
  const isTaskList = className.includes('contains-task-list')

  return (
    <ListProvider type={isTaskList ? 'tl' : 'ul'}>
      {withNativeProps(props, <ul {...props} className="mdx-ul" />)}
    </ListProvider>
  )
}

export default UnorderedList
