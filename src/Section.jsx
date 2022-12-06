import React from 'react'

const Section = ({name, heading, children}) => {
    return (
        <section id = {name}>
            {heading}
            {children}
        </section>
    )
}

export default Section