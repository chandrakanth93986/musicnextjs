"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
// import Image from "next/image";
import courseData from '../data/music_courses.json'
import Link from "next/link";

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string
}

const Featuredcouses = () => {
    let featuredCourses = courseData.courses.filter((course) => course.isFeatured)
    return (
        <div className="text-center bg-gray-900 py-12">
            <p className="t text-lg text-green-600 m-4">FEATURED COURSES</p>
            <h1 className="t text-5xl font-bold m-4 mb-12">Learn With The Best</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center text-center">
                {
                    featuredCourses.map((course: Course) => (
                        <BackgroundGradient className="rounded-[22px] min-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 min-h-72 flex flex-col justify-between">
                            <div>
                                <p className="text-xl sm:text-xl font-bold text-black mt-4 mb-2 dark:text-neutral-200">
                                    {course.title}
                                </p>

                                <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-4">
                                    {course.description}
                                </p>
                            </div>

                            <div className="text-center mt-4">
                                <Link href={`/courses/${course.slug}`}>
                                    <button
                                        className="bg-white text-black rounded-lg px-4 py-2 text-lg"
                                    >
                                        Learn more
                                    </button>
                                </Link>
                            </div>
                        </BackgroundGradient>
                    ))
                }
            </div>
            <div className="text-center mt-12">
                <Link href={"/courses"}>
                    <button
                        className="bg-white text-black rounded-lg px-4 py-2 text-lg"
                    >
                        View All Courses
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Featuredcouses