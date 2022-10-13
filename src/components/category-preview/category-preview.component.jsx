import { CategoryPreviewContainer, Preview, CategoryPreviewTitle } from './category-preview.styles';
import Spinner from '../../components/spinner/spinner.component';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading } from '../../store/categories/category.selector';


import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {
    const isLoading = useSelector(selectCategoriesIsLoading);
    return (
        <CategoryPreviewContainer>
            <h2>
                <CategoryPreviewTitle to={title}>{title.toUpperCase()}</CategoryPreviewTitle>
            </h2>
            {
                isLoading ? (
                    <Spinner /> ) : (
                        <Preview>
                            {
                                products.filter((_, idx) => idx < 4)
                                .map((product) => 
                                <ProductCard key={product.id} product={product} />)
                            }
                        </Preview>
            )}
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;