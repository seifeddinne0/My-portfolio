"use client"

import Portfoliocard from "./Portfoliocard";
import Horizontaline from "./Horizontaline";
function Portfolio () {
  return (
    <section className="mt-5 mb-5 mx-4" id="Portfolio">
      <Horizontaline>
      <h1 className="mx-2 text-2xl montserrat text-center text-red-600">My Portfolio</h1>
        </Horizontaline>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <Portfoliocard thumbnail="/KamikazeStore.png" altName="KamikazeStore">
      <p className="text-gray-700">
        A sleek e-commerce site offering seamless shopping and responsive design—perfect for businesses looking to grow online.
      </p>
    </Portfoliocard>
    <Portfoliocard thumbnail="/KamikazeStore.png" altName="KamikazeStore">
      <p className="text-gray-700">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
    </Portfoliocard>
    <Portfoliocard thumbnail="/KamikazeStore.png" altName="KamikazeStore">
      <p className="text-gray-700">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
    </Portfoliocard>
    <Portfoliocard thumbnail="/KamikazeStore.png" altName="KamikazeStore">
      <p className="text-gray-700">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
    </Portfoliocard>
  </div>
</section>
  );
}
export default Portfolio;