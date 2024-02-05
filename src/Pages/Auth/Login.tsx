import { Logo, Mail, Padlock } from "../../Assets";
import Button from "../../Components/Button";
import InputField from "../../Components/Input";
import { useLoginFormik } from "../../Hooks/useLoginFormik";

const Login = () => {
    const handleErrorMessage = (error: string) => {
        console.log("Error", error);
    };

    const loginFormik = useLoginFormik({
        onError: handleErrorMessage,
    });

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <img src={Logo} alt="logo" />
            <div className="w-screen h-max md:w-[25vw] flex flex-col items-center justify-center">
                <h3 className="text-mainColor1 font-bold text-[16px] mt-[42px] mb-[47px]">
                    by Konstruksi.AI
                </h3>
                <form
                    onSubmit={loginFormik.handleSubmit}
                    className="w-[90vw] md:w-full"
                >
                    <div className="mb-4">
                        <InputField
                            typeInput="with-icon"
                            name="email"
                            id="email"
                            value={loginFormik.values.email}
                            placeholder="Ketik email"
                            onBlur={loginFormik.handleBlur}
                            onChange={loginFormik.handleChange}
                            onError={loginFormik.errors.email}
                            onTouched={loginFormik.touched.email}
                            icon={Mail}
                        />
                    </div>
                    <div className="mb-4">
                        <InputField
                            typeInput="with-icon"
                            name="password"
                            type="password"
                            id="password"
                            value={loginFormik.values.password}
                            placeholder="Ketik kata sandi"
                            onError={loginFormik.errors.password}
                            onTouched={loginFormik.touched.password}
                            onBlur={loginFormik.handleBlur}
                            onChange={loginFormik.handleChange}
                            icon={Padlock}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center w-full mt-[50px]">
                        <Button
                            type="submit"
                            onClick={() => loginFormik.handleSubmit}
                            color="orange"
                            text="Masuk"
                            style={"mt-6"}
                        />
                        <div className="flex items-center">
                            <p></p> <a href=""></a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
