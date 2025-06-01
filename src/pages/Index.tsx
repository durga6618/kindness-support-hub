
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Home, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-orange-500 mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Care & Support
              </span>
            </div>
            <div className="flex space-x-4">
              <Link to="/login">
                <Button variant="outline" className="hover:bg-blue-50">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
            Care & Support
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Dedicated to providing love, care, and support to those who need it most. 
            Together, we create a family for children and elderly in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-3">
              Learn More About Us
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 hover:bg-blue-50">
              Make a Donation
            </Button>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Facilities</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Orphanage Section */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Users className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-blue-700 mb-4">Care and Love Orphanage</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    A nurturing home where children find love, education, and hope for a brighter future.
                  </p>
                  <Link to="/orphanage">
                    <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 w-full">
                      Explore Orphanage
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Old Age Home Section */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Home className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-orange-700 mb-4">Prashanthi Old Age Home</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    A peaceful sanctuary where elderly residents receive compassionate care and companionship.
                  </p>
                  <Link to="/oldage">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 w-full">
                      Explore Old Age Home
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Care & Support, we are committed to creating a loving and supportive environment where 
            vulnerable children and elderly individuals can thrive. Our mission is to provide not just 
            shelter and care, but also dignity, respect, and opportunities for growth and happiness.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-orange-400 mr-2" />
                <span className="text-2xl font-bold">Care & Support</span>
              </div>
              <p className="text-gray-300">
                Dedicated to providing love, care, and support to children and elderly in need.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-400 mr-2" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-orange-400 mr-2" />
                  <span>info@careandsupport.org</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-orange-400 mr-2" />
                  <span>123 Care Street, Hope City, India</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <div><Link to="/orphanage" className="text-gray-300 hover:text-orange-400 transition-colors">Orphanage</Link></div>
                <div><Link to="/oldage" className="text-gray-300 hover:text-orange-400 transition-colors">Old Age Home</Link></div>
                <div><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Donate</a></div>
                <div><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Volunteer</a></div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">&copy; 2024 Care & Support. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
