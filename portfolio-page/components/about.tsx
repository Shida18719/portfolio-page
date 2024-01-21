"use client";

import React from 'react';
import { motion} from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
        ref={ref}
        className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
    >

        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        I am a career changer.{" "}
        <span className="font-medium">My background is in Classroom Education Management</span>. My
        passion for technology and curiosity about its inner workings have fuelled my drive to pursue a career in programming. 
        I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack software development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stacks
        are{" "}
        <span className="font-medium">
          Python, JavaScript, Django, Node.js, and PostgreSQL
        </span>
        . I am also familiar with TypeScript, React, Next.js. I am always looking to
        learn new technologies to expanding my skill set. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy either reading articles, watching movies, 
        dancing or playing wordscapes. I also enjoy{" "}
        <span className="font-medium">cooking</span>. I love
        making{" "}
        <span className="font-medium">healthy meals for myself and the family</span>.
      </p>

    </motion.section>
  )
}
