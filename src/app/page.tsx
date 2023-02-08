import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navbar from '../components/Navbar';
import CarouselOne from '../components/CarouselOne';

export default function Home() {
	return (
		<div>
			<Navbar />
			<CarouselOne />
		</div>
	);
}
