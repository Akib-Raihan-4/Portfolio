import React from 'react';
import Intro from '@/components/intro';
import SectionDivider from '@/components/section-divider';
import {About} from '@/components/about';
import Projects from '@/components/projects';
import { AboutNew } from '@/components/aboutNew';
import { Skills } from '@/components/skills';


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider/>
      <About/>
      <SectionDivider/>
      <Projects/>
      <SectionDivider/>
      <Skills/>
      
    </main>
  );
}
