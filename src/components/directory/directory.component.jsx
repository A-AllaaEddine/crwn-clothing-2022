import { DirectoryContainer } from './directory.styles';

import DirectoryItem from '../directory-item/directory-item.component';

const categories = [
    {
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      route: 'shop/hats'
    },
    {
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      route: 'shop/jackets'
    },
    {
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      route: 'shop/sneakers'
    },
    {
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      route: 'shop/womens'
    },
    {
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      route: 'shop/mens'
    }
  ];

const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
            <DirectoryItem key={category.id} category={category} />
            ))}
      
        </DirectoryContainer>
    )
}

export default Directory;