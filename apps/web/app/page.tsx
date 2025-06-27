import Nav from './components/HomePage/Nav';
import Hero from './components/HomePage/Hero';
import UseCases from './components/HomePage/UseCases';
import Features from './components/HomePage/Features';
import Working from './components/HomePage/Working';
import CallToAction from './components/HomePage/CallToAction';
import Footer from './components/HomePage/Footer';

const LandingPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      <Nav />
      <Hero />
      <UseCases />
      <Features />
      <Working />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LandingPage;