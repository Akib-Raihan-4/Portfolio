
import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './indi-project'

export default function Projects() {
  return (
    <section className='mt-5 scroll-mt-28' id='projects'>
        <SectionHeading>
           my projects
        </SectionHeading>

        <div>
            {
                
                projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                    
                ))
            }
        </div>
    </section>
  )
}


