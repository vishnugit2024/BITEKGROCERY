import React from 'react';
import banner from "../../Images/DowloadImage/about-image.jpg";
import aboutimage1 from "../../Images/DowloadImage/about-image-01.jpg";
import aboutimage2 from "../../Images/DowloadImage/about-image-02.jpg";
import aboutimage3 from "../../Images/DowloadImage/about-image-03.jpg";
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-5 text-gray-700">
      {/* Banner Section */}
      <div className="relative rounded-[10px] overflow-hidden shadow-xl group">
        <Image
          src={banner}
          alt="Supermarket banner"
          width={1200}
          height={400}
          className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <div className="text-white space-y-4 max-w-3xl">
            <h3 className="text-xl md:text-2xl font-semibold">About Bitek Mart</h3>
            <h1 className="text-3xl md:text-5xl font-bold">Do You Want To Know Us?</h1>
              <p className="text-base md:text-lg font-medium transition text-gray-100">
                Let us introduce the furnob to you briefly, so you will have a better understanding of our quality
              </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 max-w-4xl mx-auto">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-5xl mx-auto">
          In hac habitasse platea dictumst. Pellentesque viverra sem nec orci lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo a, pretium lobortis metus. Vivamus consectetur consequat justo. Sed interdum nunc ut tristique congue. Quisque maximus mauris et dui sagittis scelerisque. Phasellus sit amet iaculis tortor. Curabitur rhoncus arcu rutrum, tincidunt lorem sed, pulvinar magna. Donec pulvinar purus eget velit bibendum faucibus.
        </p>
      </div>

      {/* Images Section */}
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6">
        <Image
          src={aboutimage1}
          alt="About Image 1"
          width={500}
          height={400}
          className="rounded-[10px] object-cover h-[250px] md:h-[300px] w-full md:w-1/2"
        />
        <Image
          src={aboutimage2}
          alt="About Image 2"
          width={500}
          height={400}
          className="rounded-[10px] object-cover h-[250px] md:h-[300px] w-full md:w-1/2"
        />
      </div>

      {/* Info Section */}
      <div className="mt-12 flex flex-col md:flex-row justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-xl md:text-3xl font-semibold text-gray-800">
            <span className="mr-2 text-primary font-bold">01.</span>
            Pellentesque viverra sem nec orci lacinia, in bibendum urna mollis.
          </h2>
        </div>
        <div className="flex-1 max-w-md">
          <p className="text-base text-gray-700">
            Quisque nunc lacus, varius vel leo a, pretium lobortis metus. Vivamus consectetur consequat justo. Sed interdum nunc ut tristique congue. Quisque maximus mauris et dui sagittis scelerisque.
          </p>
        </div>
      </div>

      {/* Paragraphs Section */}
      <div className="mt-12 grid gap-6 text-base md:text-lg leading-relaxed">
        <p>
          Ut vitae massa a metus viverra finibus gravida at purus. Fusce quis rutrum lectus. Suspendisse tincidunt, lorem at cursus sodales, ligula arcu molestie odio, non mattis est elit et enim. Nulla non erat sed metus bibendum aliquam. Nunc venenatis elementum magna, sit amet auctor nisi. Ut vitae nunc eleifend, congue lorem consectetur, sodales ligula. Mauris ac nulla at risus mollis luctus lacinia vitae tortor. Vestibulum ut mi ut tortor maximus tristique ac in mi.
        </p>
        <p>
          Phasellus sit amet iaculis tortor. Curabitur rhoncus arcu rutrum, tincidunt lorem sed, pulvinar magna. Donec pulvinar purus eget velit bibendum faucibus. Aliquam vitae turpis hendrerit, tempus diam ac, fringilla ex. Proin nec ex risus. Mauris suscipit at dui ut dapibus. Nam ullamcorper tincidunt est, et lacinia magna congue ut.
        </p>
      </div>

      {/* Image + List Section */}
      <div className="mt-12 flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src={aboutimage3}
            alt="About Image 3"
            width={500}
            height={700}
            className="rounded-[10px] object-cover w-full h-auto md:h-[600px]"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6 text-base md:text-lg leading-relaxed">
          <p>
            Phasellus sit amet iaculis tortor. Curabitur rhoncus arcu rutrum, tincidunt lorem sed, pulvinar magna. Donec pulvinar purus eget velit bibendum faucibus. Aliquam vitae turpis hendrerit, tempus diam ac, fringilla ex. Proin nec ex risus. Mauris suscipit at dui ut dapibus. Nam ullamcorper tincidunt est, et lacinia magna congue ut.
          </p>
          <p>
            Fusce quis rutrum lectus. Suspendisse tincidunt, lorem at cursus sodales, ligula arcu molestie odio, non mattis est elit et enim. Nulla non erat sed metus bibendum aliquam. Nunc venenatis elementum magna, sit amet auctor nisi. Ut vitae nunc eleifend, congue lorem consectetur, sodales ligula. Mauris ac nulla at risus mollis luctus lacinia vitae tortor. Vestibulum ut mi ut tortor maximus tristique ac in mi.
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2 text-gray-700">
            <li>Maecenas id neque neque. Curabitur gravida</li>
            <li>Maecenas id neque neque. Curabitur gravida</li>
            <li>Quisque et suscipit velit. Sed eros magna, rutrum et magna ac</li>
            <li>Proin laoreet luctus felis, commodo</li>
            <li>Fusce quis nisi sed neque</li>
            <li>Suspendisse quis condimentum neque</li>
          </ul>
        </div>
      </div>

      {/* Final Paragraphs */}
      <div className='mt-12 space-y-4 text-base md:text-lg leading-relaxed'>
        <p>
          Phasellus sit amet iaculis tortor. Curabitur rhoncus arcu rutrum, tincidunt lorem sed, pulvinar magna. Donec pulvinar purus eget velit bibendum faucibus. Aliquam vitae turpis hendrerit, tempus diam ac, fringilla ex. Proin nec ex risus. Mauris suscipit at dui ut dapibus. Nam ullamcorper tincidunt est, et lacinia magna congue ut.
        </p>
        <p>
          Donec pulvinar purus eget velit bibendum faucibus. Aliquam vitae turpis hendrerit, tempus diam ac, fringilla ex. Proin nec ex risus.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
