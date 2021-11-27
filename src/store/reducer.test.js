import reducer from './reducer';
import { setTasks, deleteTask } from './actions';
import tasks from '../../fixtures/tasks';

describe('reducer', () => {
  describe('setTasks', () => {
    it('change tasks array', () => {
      const state = reducer({
        tasks: []
      }, setTasks(tasks))

      expect(state.tasks).not.toHaveLength(0)
    })
  })

  describe('deleteTask', () => {
    it('remove the task from tasks', () => {
      const state = reducer({
        tasks: [
          { id: 1, title: 'Where the hell my homies went?' }
        ]
      }, deleteTask(1))

      expect(state.tasks).toHaveLength(0)
    })
  })
})