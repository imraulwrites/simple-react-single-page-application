import User from '../../assets/user.png';
import Rocket from '../../assets/rocket.png';
import Package from '../../assets/package.png';
import NewCustomerCard from './NewCustomerCard';

function NewCustomer() {
  return (
    <section className="wrapper py-30 text-center flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-heading-dark mb-4">Get Started in 3 Steps</h1>
      <p className="text-base font-normal text-muted mb-10">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <NewCustomerCard
            image={User}
            text="Sign up for free in seconds. No credit card required to get started."
            heading="Create Account"
            label="01"
          />
        </div>
        <div>
          <NewCustomerCard
            image={Rocket}
            text="Browse our catalog and select the tools that fit your needs."
            heading="Choose Products"
            label="02"
          />{' '}
        </div>

        <div>
          <NewCustomerCard
            image={Package}
            text="Download and start using your premium tools immediately."
            heading="Start Creating"
            label="03"
          />
        </div>
      </div>
    </section>
  );
}

export default NewCustomer;
