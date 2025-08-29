import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white py-16 px-6 text-center"
    >
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
        Welcome to Trendora
      </h1>
      <p class="text-lg md:text-xl max-w-2xl mx-auto">
        Trendora is a modern e-commerce platform designed to bring fashion,
        style, and technology together. It’s a showcase of innovation, teamwork,
        and cutting-edge web technologies.
      </p>
    </section>

    <!-- About Trendora -->
    <section class="py-12 px-6 max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6 text-gray-800">What is Trendora?</h2>
      <p class="text-gray-600 leading-relaxed">
        Trendora is built as a smart and scalable e-commerce solution that
        focuses on performance, modern design, and an intuitive user experience.
        It’s more than just a project – it’s a representation of teamwork and
        creativity.
      </p>
    </section>

    <!-- Team Section -->
    <section class="py-12 px-6 bg-gray-50">
      <h2 class="text-3xl font-bold mb-8 text-center text-gray-800">
        Meet the Team
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div class="p-6 bg-white shadow-lg rounded-2xl">
          <h3 class="text-xl font-semibold text-gray-800">
            Seraj Eldeen Abdullah
          </h3>
          <p class="text-gray-600 mt-2">Full-Stack Developer</p>
        </div>
        <div class="p-6 bg-white shadow-lg rounded-2xl">
          <h3 class="text-xl font-semibold text-gray-800">
            Mohab Adel Bassiouny
          </h3>
          <p class="text-gray-600 mt-2">Frontend Engineer</p>
        </div>
        <div class="p-6 bg-white shadow-lg rounded-2xl">
          <h3 class="text-xl font-semibold text-gray-800">
            Adham Mohamed Agamy
          </h3>
          <p class="text-gray-600 mt-2">Backend Engineer</p>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="py-12 px-6 max-w-5xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8 text-gray-800">Technologies We Use</h2>
      <div class="flex flex-wrap justify-center gap-4">
        <span class="px-4 py-2 bg-gray-800 text-white rounded-full"
          >Angular</span
        >
        <span class="px-4 py-2 bg-gray-800 text-white rounded-full"
          >TypeScript</span
        >
        <span class="px-4 py-2 bg-gray-800 text-white rounded-full"
          >TailwindCSS</span
        >
        <span class="px-4 py-2 bg-gray-800 text-white rounded-full"
          >Node.js</span
        >
        <span class="px-4 py-2 bg-gray-800 text-white rounded-full"
          >Express.js</span
        >
        <span class="px-4 py-2 bg-gray-800 text-white rounded-full"
          >PostgreSQL</span
        >
        <span class="px-4 py-2 bg-gray-800 text-white rounded-full"
          >Prisma ORM</span
        >
      </div>
    </section>
  `,
})
export class AboutComponent {}
