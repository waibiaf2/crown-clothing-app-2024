import CategoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';
import DirectoryItemComponent from "../directory-item/directory-item.component";
import DirectoryItem from "../directory-item/directory-item.component";

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
