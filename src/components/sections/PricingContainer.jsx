import React from 'react';
import PricingCard from './PricingCard';

const features1 = [
  'Access to 10 free tools',
  'Basic templates',
  'Community support',
  '1 project per month',
];

const features2 = [
  'Access to all premium tools',
  'Unlimited templates',
  'Priority support',
  'Unlimited projects',
  'Cloud sync',
  'Advanced analytics',
];

const features3 = [
  'Everything in Pro',
  'Team collaboration',
  'Custom integrations',
  'Dedicated support',
  'SLA guarantee',
  'Custom branding',
];

function PricingContainer() {
  return (
    <section className="wrapper text-center py-28">
      <h1 className="text-5xl font-extrabold text-heading-dark mb-4">
        Simple, Transparent Pricing
      </h1>
      <p className="text-base font-normal text-muted mb-10">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      <div className="grid grid-cols-3 justify-center gap-7">
        <PricingCard
          className="bg-[#f9fafcFF] text-muted"
          heading="Starter"
          text="Perfect for getting started"
          price="0"
          features={features1}
          btntext="Get Started Free"
        />
        <PricingCard
          className="bg-gradient text-white"
          heading="Pro"
          text="Best for professionals"
          price="29"
          features={features2}
          btntext="Start Pro Trial"
        />
        <PricingCard
          className="bg-[#f9fafcFF] text-muted"
          heading="Enterprise"
          text="For teams and businesses"
          price="99"
          features={features3}
          btntext="Contact Sales"
        />
      </div>
    </section>
  );
}

export default PricingContainer;
