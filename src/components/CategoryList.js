//npm imports
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

//component imports
import CategoryCard from "./CategoryCard";

//action imports
import { getCategories, setCategory } from "../actions/itemActions";

const CategoryList = ({
    isFetching,
    categories,
    error,
    dispatch
}) => {

    const push = useNavigate()

    useEffect(() => {
        dispatch(getCategories());
        console.log(categories);
    }, []);

    const handleSetCategory = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        dispatch(setCategory(e.target.value));
        push("/itemslist", {replace: true});
    }

    return(
        <>
        {
            error && 
            <h2>{error}</h2>
        }
        {
            isFetching &&
            <h2>Fetching</h2>
        }
        {
            !isFetching && !error && 
            <div className="ui grid container">
                {categories.map( category => <div className="three wide column">
                    <CategoryCard 
                    key={category.category_id} 
                    name={category.category} 
                    category_id={category.category_id} 
                    handleSetCategory={handleSetCategory}
                    />
                </div>)}
            </div>
        }
        </>
    )
}

const mapStateToProps = state => ({
    isFetching: state.item.isFetching,
    categories: state.item.categories,
    error: state.item.error,
})

export default connect (
    mapStateToProps
)(CategoryList);