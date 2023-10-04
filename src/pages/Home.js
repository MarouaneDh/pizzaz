import { useEffect, useState } from 'react'

import Pizza from '../assets/pizza.jpg'

import Salsa from '../assets/sauces/salsa-sauce.png'
import BBQ from '../assets/sauces/bbq-sauce.png'
import Mayo from '../assets/sauces/mayonaise-sauce.png'
import Pesto from '../assets/sauces/pesto-sauce.png'

import BlueCheese from '../assets/cheeses/blue-cheese.png'
import RegularCheese from '../assets/cheeses/cheese.png'
import FetaCheese from '../assets/cheeses/feta-cheese.png'
import ParmCheese from '../assets/cheeses/parmasen-cheese.png'

import Olives from '../assets/ingredients/black-olives.png'
import GPepper from '../assets/ingredients/green-pepper.png'
import RPepper from '../assets/ingredients/red-peppers.png'
import Salami from '../assets/ingredients/salami.png'
import Mushrooms from '../assets/ingredients/mushrooms.png'
import Tomatoes from '../assets/ingredients/tomatoes.png'
import Basil from '../assets/ingredients/Basil.png'
import Capres from '../assets/ingredients/Capers.png'
import Chives from '../assets/ingredients/Chives.png'
import Onions from '../assets/ingredients/onions.png'
import Parsley from '../assets/ingredients/Parsley-2.png'
import Salmon from '../assets/ingredients/Salmon-2.png'
import Shrimps from '../assets/ingredients/shrimp.png'
import SundriedTomatos from '../assets/ingredients/Sundried-tomatos.png'

import './Home.css'

const Home = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [pizzaIngredients, setPizzaIngredients] = useState({
        olives: {
            isIn: false,
            price: 2
        },
        gpeppers: {
            isIn: false,
            price: 2
        },
        rpeppers: {
            isIn: false,
            price: 2
        },
        salami: {
            isIn: false,
            price: 3
        },
        mushrooms: {
            isIn: false,
            price: 5
        },
        tomatoes: {
            isIn: false,
            price: 5
        },
        basil: {
            isIn: false,
            price: 5
        },
        capres: {
            isIn: false,
            price: 5
        },
        chives: {
            isIn: false,
            price: 5
        },
        onions: {
            isIn: false,
            price: 5
        },
        parsley: {
            isIn: false,
            price: 5
        },
        salmon: {
            isIn: false,
            price: 5
        },
        shrimps: {
            isIn: false,
            price: 5
        },
        sunTomatoes: {
            isIn: false,
            price: 5
        },
    })

    const [sauce, setSauce] = useState({
        salsa: false,
        bbq: false,
        mayo: false,
        pesto: false,
    })

    const [cheese, setCheese] = useState({
        blue: false,
        regular: false,
        feta: false,
        parm: false,
    })

    const [isSauceSelected, setIsSauceSelected] = useState(false)
    const [isCheeseSelected, setIsCheeseSelected] = useState(false)

    const handleSauceChange = (e) => {
        const { name, checked } = e.target;

        setIsSauceSelected(checked)

        setSauce(() => ({
            salsa: name === 'salsa' ? checked : false,
            bbq: name === 'bbq' ? checked : false,
            mayo: name === 'mayo' ? checked : false,
            pesto: name === 'pesto' ? checked : false,
        }));
    };

    const handleCheeseChange = (e) => {
        const { name, checked } = e.target;

        setIsCheeseSelected(checked)

        setCheese(() => ({
            blue: name === 'blue' ? checked : false,
            regular: name === 'regular' ? checked : false,
            feta: name === 'feta' ? checked : false,
            parm: name === 'parm' ? checked : false,
        }));
    };

    const handlePizzaIngredientsChange = (e) => {
        setPizzaIngredients((prevState) => ({
            ...prevState,
            [e.target.name]: {
                ...prevState[e.target.name],
                isIn: e.target.checked
            }
        }))

        let prevPrice = totalPrice

        if (e.target.checked) {
            setTotalPrice(prevPrice + pizzaIngredients[e.target.name].price)
        }
        if (!e.target.checked) {
            setTotalPrice(prevPrice - pizzaIngredients[e.target.name].price)
        }
    }

    useEffect(() => {
        if (!isSauceSelected) {
            setCheese({
                blue: false,
                regular: false,
                feta: false,
                parm: false,
            })
        }
    }, [isSauceSelected])

    useEffect(() => {
        if (!isCheeseSelected) {
            setTotalPrice(0)
            setPizzaIngredients({
                olives: {
                    isIn: false,
                    price: 2
                },
                gpeppers: {
                    isIn: false,
                    price: 2
                },
                rpeppers: {
                    isIn: false,
                    price: 2
                },
                salami: {
                    isIn: false,
                    price: 3
                },
                mushrooms: {
                    isIn: false,
                    price: 5
                },
                tomatoes: {
                    isIn: false,
                    price: 5
                },
                basil: {
                    isIn: false,
                    price: 5
                },
                capres: {
                    isIn: false,
                    price: 5
                },
                chives: {
                    isIn: false,
                    price: 5
                },
                onions: {
                    isIn: false,
                    price: 5
                },
                parsley: {
                    isIn: false,
                    price: 5
                },
                salmon: {
                    isIn: false,
                    price: 5
                },
                shrimps: {
                    isIn: false,
                    price: 5
                },
                sunTomatoes: {
                    isIn: false,
                    price: 5
                },
            })
        }
    }, [isCheeseSelected])

    return (
        <div className="box">
            <span>{totalPrice}$</span>
            <div className='pizza-container'>
                <div className='pizza-bloc'>
                    <img className='pizza' src={Pizza} alt='pizza' />

                    <img className={`sauce ${sauce?.salsa ? '' : 'none'}`} src={Salsa} alt='salsa' />
                    <img className={`sauce ${sauce?.bbq ? '' : 'none'}`} src={BBQ} alt='bbq' />
                    <img className={`sauce ${sauce?.mayo ? '' : 'none'}`} src={Mayo} alt='mayo' />
                    <img className={`sauce ${sauce?.pesto ? '' : 'none'}`} src={Pesto} alt='pesto' />

                    <img className={`cheese ${cheese?.blue ? '' : 'none'}`} src={BlueCheese} alt='blue' />
                    <img className={`cheese ${cheese?.regular ? '' : 'none'}`} src={RegularCheese} alt='regular' />
                    <img className={`cheese ${cheese?.feta ? '' : 'none'}`} src={FetaCheese} alt='feta' />
                    <img className={`cheese ${cheese?.parm ? '' : 'none'}`} src={ParmCheese} alt='parmesen' />

                    <img className={`olives ${pizzaIngredients?.olives?.isIn ? '' : 'none'}`} src={Olives} alt='olives' />
                    <img className={`green-pepper ${pizzaIngredients?.gpeppers?.isIn ? '' : 'none'}`} src={GPepper} alt='green-pepper' />
                    <img className={`red-pepper ${pizzaIngredients?.rpeppers?.isIn ? '' : 'none'}`} src={RPepper} alt='red-pepper' />
                    <img className={`salami ${pizzaIngredients?.salami?.isIn ? '' : 'none'}`} src={Salami} alt='salami' />
                    <img className={`mushrooms ${pizzaIngredients?.mushrooms?.isIn ? '' : 'none'}`} src={Mushrooms} alt='mushrooms' />
                    <img className={`tomatoes ${pizzaIngredients?.tomatoes?.isIn ? '' : 'none'}`} src={Tomatoes} alt='tomatoes' />
                    <img className={`basil ${pizzaIngredients?.basil?.isIn ? '' : 'none'}`} src={Basil} alt='basil' />
                    <img className={`capres ${pizzaIngredients?.capres?.isIn ? '' : 'none'}`} src={Capres} alt='capres' />
                    <img className={`chives ${pizzaIngredients?.chives?.isIn ? '' : 'none'}`} src={Chives} alt='chives' />
                    <img className={`onions ${pizzaIngredients?.onions?.isIn ? '' : 'none'}`} src={Onions} alt='onions' />
                    <img className={`parsley ${pizzaIngredients?.parsley?.isIn ? '' : 'none'}`} src={Parsley} alt='parsley' />
                    <img className={`salmon ${pizzaIngredients?.salmon?.isIn ? '' : 'none'}`} src={Salmon} alt='salmon' />
                    <img className={`shrimps ${pizzaIngredients?.shrimps?.isIn ? '' : 'none'}`} src={Shrimps} alt='shrimps' />
                    <img className={`sunTomatoes ${pizzaIngredients?.sunTomatoes?.isIn ? '' : 'none'}`} src={SundriedTomatos} alt='sunTomatoes' />
                </div>
            </div>
            <div className='add-ons'>
                <div className='sauces-container'>
                    <span>Sauces</span>
                    <div className='sauces'>
                        <div className='one-check'>
                            <input checked={sauce.salsa} onChange={handleSauceChange} name='salsa' type="checkbox" />
                            <label htmlFor="salsa">Salsa Sauce</label>
                        </div>
                        <div className='one-check'>
                            <input checked={sauce.bbq} onChange={handleSauceChange} name='bbq' type="checkbox" />
                            <label htmlFor="bbq">BBQ Sauce</label>
                        </div>
                        <div className='one-check'>
                            <input checked={sauce.mayo} onChange={handleSauceChange} name='mayo' type="checkbox" />
                            <label htmlFor="mayo">Mayo Sauce</label>
                        </div>
                        <div className='one-check'>
                            <input checked={sauce.pesto} onChange={handleSauceChange} name='pesto' type="checkbox" />
                            <label htmlFor="pesto">Pesto Sauce</label>
                        </div>
                    </div>
                </div>
                {
                    isSauceSelected &&
                    <div className='cheeses-container'>
                        <span>Cheeses</span>
                        <div className='cheeses'>
                            <div className='one-check'>
                                <input checked={cheese.blue} onChange={handleCheeseChange} name='blue' type="checkbox" />
                                <label htmlFor="blue">Blue cheese</label>
                            </div>
                            <div className='one-check'>
                                <input checked={cheese.regular} onChange={handleCheeseChange} name='regular' type="checkbox" />
                                <label htmlFor="regular">Regular cheese</label>
                            </div>
                            <div className='one-check'>
                                <input checked={cheese.feta} onChange={handleCheeseChange} name='feta' type="checkbox" />
                                <label htmlFor="feta">Feta cheese</label>
                            </div>
                            <div className='one-check'>
                                <input checked={cheese.parm} onChange={handleCheeseChange} name='parm' type="checkbox" />
                                <label htmlFor="parm">Parmesen cheese</label>
                            </div>
                        </div>
                    </div>
                }
                {
                    isCheeseSelected && isSauceSelected &&
                    <div className='ingredients-container'>
                        <span>Ingredients</span>
                        <div className='ingredients'>
                            <div className='one-check'>
                                <input onChange={handlePizzaIngredientsChange} name='salami' type="checkbox" />
                                <label htmlFor="salami">Salami</label>
                            </div>
                            <div className='one-check'>
                                <input onChange={handlePizzaIngredientsChange} name='shrimps' type="checkbox" />
                                <label htmlFor="shrimps">Shrimps</label>
                            </div>
                            <div className='one-check'>
                                <input onChange={handlePizzaIngredientsChange} name='salmon' type="checkbox" />
                                <label htmlFor="salmon">Salmon</label>
                            </div>
                            <div className='one-check'>
                                <input onChange={handlePizzaIngredientsChange} name='tomatoes' type="checkbox" />
                                <label htmlFor="tomatoes">Tomatoes</label>
                            </div>
                            <div className='one-check'>
                                <input onChange={handlePizzaIngredientsChange} name='sunTomatoes' type="checkbox" />
                                <label htmlFor="sunTomatoes">Sun Dried Tomatoes</label>
                            </div>
                            <div className='one-check'>
                                <input onChange={handlePizzaIngredientsChange} name='mushrooms' type="checkbox" />
                                <label htmlFor="mushrooms">Mushrooms</label>
                            </div>
                            <div className='one-check'>
                                <input onChange={handlePizzaIngredientsChange} name='chives' type="checkbox" />
                                <label htmlFor="chives">Chives</label>
                            </div>
                            <div className='one-check'>
                                <input onChange={handlePizzaIngredientsChange} name='onions' type="checkbox" />
                                <label htmlFor="onions">Onions</label>
                            </div>
                            <div className='one-check'>
                                <input onChange={handlePizzaIngredientsChange} name='parsley' type="checkbox" />
                                <label htmlFor="parsley">Parsley</label>
                            </div>
                            <div className='one-check'>
                                <input onChange={handlePizzaIngredientsChange} name='basil' type="checkbox" />
                                <label htmlFor="basil">Basil</label>
                            </div>
                            <div className='one-check'>
                                <input onChange={handlePizzaIngredientsChange} name='gpeppers' type="checkbox" />
                                <label htmlFor="gpeppers">Green Peppers</label>
                            </div>
                            <div className='one-check'>
                                <input onChange={handlePizzaIngredientsChange} name='rpeppers' type="checkbox" />
                                <label htmlFor="rpeppers">Red Peppers</label>
                            </div>
                            <div className='one-check'>
                                <input onChange={handlePizzaIngredientsChange} name='olives' type="checkbox" />
                                <label htmlFor="olives">Black olives</label>
                            </div>
                            <div className='one-check'>
                                <input onChange={handlePizzaIngredientsChange} name='capres' type="checkbox" />
                                <label htmlFor="capres">Capers</label>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Home