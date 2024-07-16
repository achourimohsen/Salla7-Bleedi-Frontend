import React, { useEffect } from 'react'
import AdminSidebar from './AdminSidebar'
import './admin-table.css'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCategory, fetchCategories } from '../../redux/apiCalls/categoryApiCall'

const CategoriesTable = () => {
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.category)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    // Delete Category Handler 
    const deleteCategoryHandler = (categoryId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this category!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteCategory(categoryId))
            }
        });
    }
    return (
        <section className="table-container">
            <AdminSidebar />
            <div className="table-wrapper">
                <h1 className="table-title">Category</h1>
                <h3 style={{direction: "ltr"}}>{categories.length} Categoris</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Category Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories?.slice().reverse().map((item, index) => (
                            <tr key={item._id} >
                                <td>{index + 1}</td>
                                <td>
                                    <b>{item.title}</b>
                                </td>
                                <td>
                                    <div className="table-button-group">
                                        <button
                                            onClick={() =>deleteCategoryHandler(item._id)}
                                        >
                                            Delete Category
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default CategoriesTable