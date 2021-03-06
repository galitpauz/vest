import { useTestObjects } from 'stateHooks';

/**
 * Stores test object inside suite state.
 * @param {VestTest} testObject
 */
export default testObject => {
  const [, setTestObjects] = useTestObjects();
  setTestObjects(testObjects => testObjects.concat(testObject));
};
