import React from "react";
import { InputProps } from "../Models/ComponentModels";
import { ArrowCircle } from "../Assets";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputField: React.FC<InputProps> = React.forwardRef(
    (
        {
            label,
            onBlur,
            onFocus,
            value,
            onChange,
            placeholder,
            type,
            name,
            id,
            typeInput,
            onError,
            onTouched,
            disabled,
            icon,
            onClick,
            active,
            activeName
        },
        ref: any
    ) => {
        switch (typeInput) {
            case "range-input":
                return (
                    <div className='flex items-center w-full h-[40px] overflow-hidden'>
                        <div className='bg-mainColor1 h-full text-center rounded-[10px] w-[30%] flex items-center justify-center text-white'>
                            <p className='max-w-[80%] overflow-hidden overflow-ellipsis whitespace-nowrap'>
                                {label}
                            </p>
                        </div>
                        <div className='w-[60%] mx-3 flex items-center h-[24px] pl-2 bg-rangeGrey h-full'>
                            <div className="h-[60%] w-[40%] bg-green-500 rounded-full"></div>
                        </div>
                        <div className="w-[10%] border-[1px] border-greyBorder h-full text-center bg-white text-black flex justify-center items-center">
                            40%
                        </div>
                    </div>  
                )
            case "date-input":
                return (
                    <div className="w-full h-[44px] px-3 py-1 flex shadow-lg items-center bg-white rounded-md outline-0 border border-greyBorder">
                        <img 
                            src={ArrowCircle} 
                            alt="arrowCircle"   
                            id={id}
                            className={`w-[30px] h-[30px] transition-transform transform ${active && activeName === id ? "rotate-180" : ""}`}
                            onClick={onClick} 
                        />
                        <DatePicker 
                            name={name}
                            className="w-[180px] ml-4 border-0 outline-0"
                            selected={value} 
                            id={id}
                            placeholderText={placeholder}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onChange={onChange as any['onChange']}
                        />
                    </div>
                )
            case "select-input":
                return (
                    <div className="w-full h-[44px] px-3 py-1 flex shadow-lg items-center bg-white rounded-md outline-0 border border-greyBorder">
                        <img 
                            src={ArrowCircle} 
                            alt="arrowCircle" 
                            id={id}
                            className={`w-[30px] h-[30px] transition-transform transform ${active && activeName === id ? "rotate-180" : ""}`}
                        />
                        <select name={name} 
                            onFocus={onFocus}
                            onBlur={onBlur} 
                            id={id} 
                            className="min-w-[180px] bg-transparent border-0 outline-0 ml-4 border-0 oyline-0">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                )
            case "result":
                return (
                    <div className='flex items-center w-full h-[40px] shadow-md rounded-[10px] overflow-hidden'>
                        <div className='bg-mainColor1 h-full text-center rounded-[10px] w-[30%] flex items-center justify-center text-white'>
                            <p className='max-w-[80%] overflow-hidden overflow-ellipsis whitespace-nowrap'>
                                {label}
                            </p>
                        </div>
                        <div className='w-[70%] flex items-center pl-8 bg-white h-full'>
                            <input name={name} value={value} onChange={onChange} placeholder={placeholder} className="border-0 outline-0 h-full w-full" />
                        </div>
                    </div>   
                )
            case "textarea-input":
                return (
                    <div className='flex items-center w-full h-[74px] shadow-md rounded-[10px] overflow-hidden'>
                        <div className='bg-mainColor1 h-full max-h-[74px] text-center rounded-[10px] w-[30%] flex items-center justify-center text-white'>
                            <p className='max-w-[80%] overflow-hidden overflow-ellipsis whitespace-nowrap'>
                                {label}
                            </p>
                        </div>
                        <div className='w-[70%] flex items-center pl-8 bg-white h-full'>
                            <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} className="border-0 py-4 outline-0 h-full w-full">
                            </textarea>
                        </div>
                    </div>   
                )
            case "with-icon":
                return (
                    <>
                        <label htmlFor={id}>{label}</label>
                        <div className='h-3'></div>
                        <div className='flex items-center w-full'>
                            <img src={icon} alt='iconImage' className='w-[26px] mr-5' />
                            <input
                                id={id}
                                type={type}
                                name={name}
                                ref={ref}
                                disabled={disabled}
                                value={value !== undefined ? value : (type === 'number' ? 0 : '')}
                                onChange={onChange}
                                onBlur={onBlur}
                                className={`w-[100%] h-[25x] p-4 outline-0 text-[15px] border-b border-b-greyBorder ${onError && onTouched ? 'border-b-[2px] border-red-500 text-[red]' : 'border border-white text-slate-600'} ${disabled ? 'bg-gray-100' : '' }`} 
                                placeholder={placeholder}
                            />
                        </div>
                        {
                            onError && onTouched ? (
                                <small className='text-[red] text-[12px] font-normal mt-5 mb-2'>
                                    {onError}
                                </small>
                            ): null
                        }
                </>
                )
            default:
                return (
                    <>
                        <label htmlFor={id}>{label}</label>
                        <div className='h-3'></div>
                        <input
                            id={id}
                            type={type}
                            name={name}
                            ref={ref}
                            disabled={disabled}
                            value={value !== undefined ? value : (type === 'number' ? 0 : '')}
                            onChange={onChange}
                            onBlur={onBlur}
                            className={`w-[100%] h-[40x] p-4 outline-0 text-[15px] rounded-lg ${onError && onTouched ? 'border-b-[2px] border-red-500 text-[red]' : 'border border-white text-slate-600'} ${disabled ? 'bg-gray-100' : 'bg-slate-100' }`} 
                            placeholder={placeholder}
                        />
                        {
                            onError && onTouched ? (
                                <small className='text-[red] text-[12px] font-normal my-2'>
                                    {onError}
                                </small>
                            ): null
                        }
                    </>
                )
        }
    }
);

export default InputField