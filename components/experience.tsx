"use client"
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { experiencesData } from '@/lib/data';
import SectionHeading from './section-heading';
import {ExperienceItem} from './ExperienceItem'

export const Experience = () => {
  return (
    <section
      className="mb-28 max-w-[80rem] text-center leading-8 sm:mb-8 scroll-mt-28 overflow-x-hidden"
      id="experience"
    >
      <SectionHeading>Experience</SectionHeading>
      <div className="flex justify-center">
        {experiencesData.map((experience, index) => (
                    <React.Fragment key={index}>
                        <ExperienceItem {...experience} />
                    </React.Fragment>
        ))}
      </div>
    </section>
  );
};
