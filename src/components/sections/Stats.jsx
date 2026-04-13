import React from 'react';

function Stats() {
  return (
    <section className="bg-gradient">
      <div className="wrapper grid grid-cols-1 md:grid-cols-3 gap-10 py-16 text-white text-center">
        <div className="border-b md:border-b-0 md:border-r-2 border-white/30 pb-4 md:pb-0">
          <h2 className="text-6xl font-extrabold mb-3">50K+</h2>
          <p className="text-2xl font-medium text-white/80">Active Users</p>
        </div>
        <div className="border-b md:border-b-0 md:border-r-2 border-white/30  pb-4 md:pb-0">
          <h2 className="text-6xl font-extrabold mb-3">200K+</h2>
          <p className="text-2xl font-medium text-white/80">Premium Tools</p>
        </div>{' '}
        <div>
          <h2 className="text-6xl font-extrabold mb-3">4.9</h2>
          <p className="text-2xl font-medium text-white/80">Rating</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
