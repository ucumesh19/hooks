## HOOKS 
    
## useReducer
   const [state, dispatch] = useReducer(reducer, initialState); 
    
   -> It is an alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method(returns an array of two items).  
   -> The initial state is the value the state is initialized with.
   -> The dispatch is a special function that dispatches an action object. 
   -> The reducer is a pure function that accepts 2 parameters:(state,action). Depending on the action object, the reducer function must update the state in an immutable manner, and return the new state. 

## useRef 
   const refContainer = useRef(initialValue);

   ->useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
   -> The returned object will persist for the full lifetime of the component.

## useImperativeHandle 
   <!-- useImperativeHandle(ref, createHandle, [deps]) -->
    useImperativeHandle(ref, () => ({
        function: () => {
           functionbody
        }
    }))

    ->useImperativeHandle customizes the instance value that is exposed to parent components when using ref.
    ->useImperativeHandle should be used with forwardRef.
         --> const ChildComponentName = forwardRef((props, ref) => {}
    ->Using this we can create the reference of child component function and can use any function of child component in our parent component.  


## useLayoutEffect
   useLayoutEffect(() => {
     console.log('UseLayOut Effect')
   }, [])

   ->The signature is identical to useEffect, but it fires synchronously after all DOM mutations.
   ->This is fundamentally called at earlier stage of page rendering while useEffect is called after everything is rendered into page and is shown to the user.

## useMemo 
   const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

   <!-- Here, computeExpensivevalue will resolve the function and the output which we will get from this function will simply stored at resolver, and if there will be any changes in the output Value, useMemo will recompute the function  -->
   ->Returns a memoized value.
   ->It allows us to memoize expensive functions so that we can avoid calling them on every render. 
   ->We simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.

## useCallback
   const memoizedCallback = useCallback(() => {
    doSomething(a, b);
   },[a, b]);

   ->useCallback hook is used when you have a component in which the child is re-rendering again and again without need.
   -> Pass an inline callback and an array of dependencies, use Callback will return a memoized vaersion of the callbcak that only changes if one of the dependencies has changed.
   -> It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

## useContext 
   const value = useContext(MyContext);

   ->Accepts a context object and returns the current context value for that context.
   -> The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
   ->Instead of sending data from Parent to child and then from child to subchild and continues... we can directly store them under Provider inside it's value props,and thus can use it anywhere by simply importing our useContext varialbe and destructure it's values according to our need.