import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Meals() {
    return (
        <div className="MealList">
            <h1>Low Calorie Meals</h1>
            <div className="legend">
                <img src="img/vegetarian.jpg" className="veggie" style={{ width: '40px', height: '40px' }} />
                <p style={{ display: 'inline-block', verticalAlign: 'top', marginTop: '4px' }}> - vegetarian</p>
                <img src="img/vegan.jpg" className="veggie" style={{ width: '40px', height: '40px', marginLeft: '30px' }} />
                <p style={{ display: 'inline-block', verticalAlign: 'top', marginTop: '4px' }}> - vegan</p>
            </div>

            <ul id="mealList">
                <li>
                    <img src="img\seared-salmon-with-charred-green-beans-1641589042.jpg" alt="Meal 1"></img>
                    <br />
                    <CustomLink to="/salmongreenbeans">Seared Salmon with <br />Charred Green Beans</CustomLink>
                </li>
                <li>
                    <img src="img/broccoli-22steaks-22-with-spicy-tomato-jam-1641594330.jpg" alt="Meal 2" />
                    <br />
                    <CustomLink to="/broccolisteak">Broccoli "Steaks" with <br /> Spicy Tomato Jam</CustomLink>
                    <img src="img/vegetarian.jpg" style={{ width: '40px', height: '40px', verticalAlign: 'middle', marginLeft: '10px' }} />
                </li>

                <li>
                    <img src="img\air-fryer-squash-soup-1641588818.jpg" alt="Meal 3"></img>
                    <br />
                    <CustomLink to="/airsquash">Air Fryer Squash Soup</CustomLink>
                    <img src="img/vegetarian.jpg" style={{ width: '40px', height: '40px', verticalAlign: 'middle', marginLeft: '10px' }} />
                </li>
                <li>
                    <img src="img\sheet-pan-fish-and-vegetables-1641589400.jpg" alt="Meal 4"></img>
                    <br />
                    <CustomLink to="/fishandveggies">Sheet Pan Fish and Vegetables</CustomLink>
                </li>
                <li>
                    <img src="img\shrimp-lettuce-wraps-1628175314.jpg" alt="Meal 5"></img>
                    <br />
                    <CustomLink to='/shrimplettucewraps'>Spicy Shrimp Lettuce Wraps</CustomLink>
                </li>
                <li>
                    <img src="img\white-bean-and-kale-toasts-1641594481.jpg" alt="Meal 6"></img>
                    <br />
                    <CustomLink to='/beanandkaletoast'>White Bean and Kale Toasts</CustomLink>
                    <img src="img/vegetarian.jpg" style={{ width: '40px', height: '40px', verticalAlign: 'middle', marginLeft: '10px' }} />
                </li>
                <li>
                    <img src="img\garam-masala-roasted-chicken-and-cauliflower-1641588952.jpg" alt="Meal 7"></img>
                    <br />
                    <CustomLink to='/garammasalachicken'>Garam Masala Roasted Chicken <br /> and Cauliflower</CustomLink>
                </li>
                <li>
                    <img src="img\roasted-cauliflower-tacos-1641590144.jpg" alt="Meal 8"></img>
                    <br />
                    <CustomLink to='/califlowertacos'>Roasted Cauliflower Tacos</CustomLink>
                    <img src="img/vegan.jpg" style={{ width: '40px', height: '40px', verticalAlign: 'middle', marginLeft: '10px' }} />
                </li>
                <li>
                    <img src="img\flank-steak-marinade-1641590315.jpg" alt="Meal 9"></img>
                    <br />
                    <CustomLink to='/flankstake'>Best-Ever Marinated Flank Steak</CustomLink>
                </li>
                <li>
                    <img src="img\balsamic-glazed-pork-with-roasted-butternut-squash-1641595051.jpg" alt="Meal 10"></img>
                    <br />
                    <CustomLink to='/porkwithbutternutsquash'>Balsamic Glazed Pork with <br /> Roasted Butternut Squash</CustomLink>
                </li>
                <li>
                    <img src="img\sheet-pan-chicken-fajitas-1641590514.jpg" alt="Meal 11"></img>
                    <br />
                    <CustomLink to='/chickenfajitas'>Sheet Pan Chicken Fajitas</CustomLink>
                </li>
                <li>
                    <img src="img\shrimp-ceviche-1641590736.jpg" alt="Meal 12"></img>
                    <br />
                    <CustomLink to='/shrimpceviche'>Shrimp Ceviche</CustomLink>
                </li>
                <li>
                    <img src="img\cauliflower-soup-1641589257.jpg" alt="Meal 13"></img>
                    <br />
                    <CustomLink to='/califlowersoup'>Creamy Cauliflower Soup with <br /> Almond-Thyme Gremolata</CustomLink>
                    <img src="img/vegetarian.jpg" style={{ width: '40px', height: '40px', verticalAlign: 'middle', marginLeft: '10px' }} />
                </li>
                <li>
                    <img src="img\california-roll-salad-low-calorie-recipes-1671661579.jpg" alt="Meal 17"></img>
                    <br />
                    <CustomLink to='/californiarollsalad'>California Roll Salad</CustomLink>
                </li>
                <li>
                    <img src="img\shakshuka-low-calorie-recipes-1671661684.jpg" alt="Meal 18"></img>
                    <br />
                    <CustomLink to='/shakshuka'>Shakshuka</CustomLink>
                    <img src="img/vegetarian.jpg" style={{ width: '40px', height: '40px', verticalAlign: 'middle', marginLeft: '10px' }} />
                </li>
            </ul>
        </div>
 )}

 function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
    }