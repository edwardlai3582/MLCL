import React from 'react'
import { connect } from 'react-redux'

import MLData from '../ML.json'
import '../styles/HomePage.css'

let HomePAge = ({ owned}) => {
    let totalNumber = 0;
                            
    for (let key1 in MLData) {
        if (MLData.hasOwnProperty(key1)) {
            for (let key2 in MLData[key1]) {
                if (MLData[key1].hasOwnProperty(key2)) {
                    totalNumber +=  MLData[key1][key2].reduce( 
                        (previousValue, currentValue, currentIndex, array) => currentValue.figures.length + previousValue
                        , 0)   
                }
            }
        }
    }
    
    return (
        <section className="homeWrapper">
            <section className="homeHero">
                <div className="homeMessage">
                    <div>
                        YOU HAVE COMPLETED
                    </div>
                    <div>
                        {Object.getOwnPropertyNames(owned).length} / {totalNumber}
                    </div>
                    <div>
                        OF THE JOURNEY!!
                    </div>    
                </div>
            </section>
            <section className="homeABout">
                <h3>About</h3>
                <article>
                    <p>{`This is a website helps you manage your Marvel Legends collection.`}</p>
                    <p>{`Your data is stored in browser's localstorage.`}</p>
                    <p>{`Use appcache to support offline use.`}</p>
                    <p>{`Go to checklist to start managing your collection.`}</p>
                    <p>{`Go to wantlist to check your want list.`}</p>
                </article>
            </section>                
            <footer className="homeFooter">
                <article>
                    <p>{`So I build this site just for practice (also a Marvel Legends collector).`}</p>
                    <p>{`I don't own any content, logos, pictures showed on this site.`}</p>
                    <p>{`If you have any questions, this is my email: edwardlai3582@gmail.com`}</p>
                    <p>{`Peace!`}</p>
                </article>
            </footer>            
        </section>
    )
}

const mapStateToProps = (state) => ({
  owned: state.owned    
})

export default connect( mapStateToProps, null)(HomePAge)
