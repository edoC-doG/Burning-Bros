import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from '@/libs/store';
import { searchProducts } from '@/libs/features/product/asyncAction';

const SearchForm = () => {
    const dispatch = useAppDispatch();
    const SearchSchema = Yup.object().shape({
        searchQuery: Yup.string()
            .min(3, 'Tối thiểu 3 ký tự')
            .matches(/^[a-zA-Z\s]*$/, 'Chỉ được phép nhập chữ cái và khoảng trắng')
            .required('Không được để trống'),
    });
    const handleSearch = (values: { searchQuery: string }) => {
        if (values.searchQuery.trim()) {
            dispatch(searchProducts(values.searchQuery));
        }
    };

    return (
        <Formik
            initialValues={{ searchQuery: '' }}
            validationSchema={SearchSchema}
            onSubmit={handleSearch}
        >
            {({ errors, touched }) => (
                <div className="flex flex-col items-center mt-10">
                    <Form className="flex flex-col max-w-[500px] scale-75 sm:scale-100 mx-auto border border-black shadow-[-7px_7px_0px_#000000]">
                        <div className="flex justify-between w-full">
                            <Field
                                name="searchQuery"
                                placeholder="Search product by name"
                                className="pl-4 outline-none w-full"
                            />
                            <button
                                type="submit"
                                className="border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
                            >
                                Search
                            </button>
                        </div>
                    </Form>
                    {errors.searchQuery && touched.searchQuery && (
                        <div className="text-red-500 text-sm mt-2 w-full max-w-[500px] pl-4">
                            {errors.searchQuery}
                        </div>
                    )}
                </div>
            )}
        </Formik>
    );
};

export default SearchForm;
