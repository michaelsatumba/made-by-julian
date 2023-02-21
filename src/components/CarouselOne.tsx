'use client';
import React, { useState, useEffect } from 'react';

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const slides = [
		{
			id: 1,
			title: 'Slide 1',
			backgroundColor: 'bg-red-500',
		},
		{
			id: 2,
			title: 'Slide 2',
			backgroundColor: 'bg-blue-500',
		},
		{
			id: 3,
			title: 'Slide 3',
			backgroundColor: 'bg-green-500',
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((currentIndex + 1) % slides.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [currentIndex]);

	const handlePrev = () => {
		setCurrentIndex((currentIndex + slides.length - 1) % slides.length);
	};

	const handleNext = () => {
		setCurrentIndex((currentIndex + 1) % slides.length);
	};

	return (
		<div className="w-full h-64">
			<div className={`h-64 ${slides[currentIndex].backgroundColor}`}>
				<h3 className="text-white">{slides[currentIndex].title}</h3>
			</div>
			<div className="flex justify-between">
				<button className="bg-gray-300 px-4 py-2" onClick={handlePrev}>
					Prev
				</button>
				<button className="bg-gray-300 px-4 py-2" onClick={handleNext}>
					Next
				</button>
			</div>
		</div>
	);
};

export default Carousel;
