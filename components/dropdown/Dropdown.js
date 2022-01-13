import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import downArrow from '../../assets/down-arrow.svg'
import { AppProvider } from '../../context/AppContext'

function Dropdown({number, numbers, iD, type}) {
    const [isOpen, setOpen] = useState(false)
    
    const ddClick = () => setOpen(!isOpen)
    
    const {state, dispatch} = React.useContext(AppProvider)
    console.log(number)
    const numOnclick = (num, id) => {
        console.log(type,num)
        let findIndex = state.cart.map((cartObj, i) => {
            if(cartObj.product._id === id) {
                return {
                    cartObj,
                    i
                }
            } else {
                return {
                    cartObj,
                    i: 0
                }
            }
        })
        let index = findIndex.reduce((acc, current) => {
            return current.i+acc
        }, 0)
        // console.log(index)
        let correctCarObj = state.cart.filter(({product, quantity, selectedSize}, i) => product._id === id)
        let others = state.cart.filter(({product, quantity, selectedSize}, i) => !(product._id === id))
        let newCartObj = {
            product: correctCarObj[0].product,
            quantity: type === 'quantity' ? num : correctCarObj[0].quantity,
            selectedSize: type === 'size' ? num :  correctCarObj[0].selectedSize
        }
        others.splice(index, 0, newCartObj)
        dispatch({...state, cart: others})
    }

    return (
      <>
        <motion.div
          key={`dropdown-div-${iD}`}
          onClick={ddClick}
          className="basic-dropdown"
        >
          <span>{number}</span>
          <motion.img
            animate={{ rotate: isOpen ? "0deg" : "180deg" }}
            src={downArrow.src}
          />
          {isOpen && (
            <AnimatePresence>
              <motion.div
                key={`dropdown-pod-${key}-${1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="basic-dropdown-pod"
              >
                {numbers.map((numb, i) => {
                  return (
                    <div className="dropdown-item">
                      <a
                        onClick={() => {
                          numOnclick(numb, iD);
                        }}
                      >
                        {numb}
                      </a>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>

        {/* {isOpen2 &&
            <AnimatePresence>
                <motion.div
                key={`dropdown-pod-${key}-2`}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className='basic-dropdown-pod'>

                </motion.div>
            </AnimatePresence>
            } */}
      </>
    );
}

export default Dropdown
