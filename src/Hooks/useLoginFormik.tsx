import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import API from "../Services/Services";
import { authSignIn, saveToken } from "../Store/Auth/AuthSlice";

export const useLoginFormik: any = ({ onError }: { onError?: any }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik<any>({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email format")
                .required("This field is required."),
            password: Yup.string()
                .min(8, "Must be at least 8 characters")
                .required("This field is required."),
        }),
        onSubmit: async (values: any, { resetForm }) => {
            try {
                const response = await API.checkAccount(values);
                if (
                    response.data.status === 401 ||
                    response.data.status === 404
                ) {
                    onError(response.data.message);
                } else {
                    dispatch(authSignIn(response.data.data));
                    dispatch(saveToken(response.data.token));
                    resetForm();
                    navigate("/chat");
                }
            } catch (error: any) {
                onError(error.message);
            }
        },
    });

    return formik;
};
