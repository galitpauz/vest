import { isExcluded } from 'exclusive';
import { useTestObjects } from 'stateHooks';

/**
 * Merges excluded tests with their prevState values.
 */
const mergeExcludedTests = prevState => {
  const [, setTestObjects] = useTestObjects();
  setTestObjects(state =>
    state.concat(
      (prevState || []).reduce((movedTests, testObject) => {
        // Checking prev-test object against current state;
        if (isExcluded(testObject)) {
          return movedTests.concat(testObject);
        }

        return movedTests;
      }, [])
    )
  );
};

export default mergeExcludedTests;
