import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { datasource } from './data';
import renderer from 'react-test-renderer';
import SimpleCard from './Card/Card';
import ViewDialog from './ViewDialog/ViewDialog';

// const mockLocalStorage = () => {
//   const localStorageGetItemMock = jest.spyOn(localStorage.__proto__, 'getItem').mockReturnValue(state);
//   const localStorageRemoveItemMock = jest.spyOn(localStorage.__proto__, 'removeItem');
//   return { localStorageGetItemMock, localStorageRemoveItemMock };
// };


//Snapshot of App component
test('renders app snapshot', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});


// View Button
test("View Button Opens Modal correctly", () => {
  render(<SimpleCard
    id={102}
    name="Dhvanesh"
    email="test@gmail.com"
    desc="Description"
  />);
  const button = screen.getByText('view');
  fireEvent.click(button);
  expect(screen.getByText('Done Viewing')).toBeInTheDocument();
});

// Update Button
test("Update Button Opens Modal correctly", () => {
  render(<SimpleCard
    id={102}
    name="Dhvanesh"
    email="test@gmail.com"
    desc="Description"
  />);
  const button = screen.getByText('update');
  fireEvent.click(button);
  expect(screen.getByText('Update Modal')).toBeInTheDocument();
});