import React from 'react';
import vector from '../../public/images/Vector.png'
import vector2 from '../../public/images/Vector-1.png'

const Blog = () => {
    return (
        <div className="">
             <div className='flex flex-row items-center'>
                <div className=''><img src={vector} alt="" className=' ' /></div>
                <div className='basis-2/4 flex justify-center items-center'><p className="text-2xl text-center">Blogs</p></div>
                <div><img src={vector2} alt="" /> </div>
            </div>


            <div className='text-center mb-6 mt-8'>
            <h3 className="font-extrabold text-3xl mb-8">When To Use Context API</h3>
            <p className="font-thin text-xl leading-10 mb-6">Context API is Used to share data into child components. Context API helps to send to data in any child components without using props manually. In this way it become easy to shara data throughout the child components from the parent components. In the props method of receving data it becomes very challenging when there is nested child component. In Context method we can receive data from parent components to any child component just by using useContext. </p>
            </div>
         <div className='text-center mb-6'>
         <h3 className="font-extrabold text-3xl mb-8">What is Custom Hook</h3>
         <p className="font-thin text-xl leading-10 mb-6">A Custom Hook in React is function that allows us to extract and reuse component logic. It helps us to share function between components without repeating code. It makes our code more efficient and also easier to maintain. </p>
         </div>
       <div className='text-center mb-6'>
       <h3 className="font-extrabold text-3xl mb-8">What is useRef</h3>
       <p className="font-thin text-xl leading-10 mb-6">useRef is a built-in hook in React. It allows us to create a mutable reference that persists across renders of a component. It returns a plain JavaScript object with a single property called current, which is initialized to the value passed as an argument to useRef().

We can use useRef() to access DOM nodes or other values that need to persist across renders, without triggering a re-render of the component. This can be useful for implementing animations, managing focus, or integrating with third-party libraries that require direct access to DOM nodes.</p>
       </div>
        <div className='text-center mb-6'>
        <h3 className="font-extrabold text-3xl mb-8">What is useMemo</h3>
        <p className="font-thin text-xl leading-10 mb-8">useMemo is a built-in hook in React. It allows us to memoize expensive functions so that we can avoid calling them on every render. When we pass a function and an array of inputs in useMemo, useMemo will only recompute the memoized value when one of the inputs has changed.</p>
        </div>
        </div>
    );
};

export default Blog;