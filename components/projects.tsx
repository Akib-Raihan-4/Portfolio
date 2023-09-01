
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
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 pt-[7rem]">
            {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
            ))}
        </div>
    </section>
  )
}


