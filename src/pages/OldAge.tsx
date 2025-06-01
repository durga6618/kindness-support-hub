
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Home, Activity, Users, Music, Coffee, Phone, Mail, MapPin, ArrowLeft, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OldAge = () => {
  const activities = [
    {
      icon: Stethoscope,
      title: "Medical Care",
      description: "24/7 medical supervision with regular health check-ups and medication management."
    },
    {
      icon: Activity,
      title: "Physical Therapy",
      description: "Physiotherapy sessions and gentle exercises to maintain mobility and health."
    },
    {
      icon: Music,
      title: "Music & Entertainment",
      description: "Musical programs, cultural events, and entertainment to keep spirits high."
    },
    {
      icon: Coffee,
      title: "Social Activities",
      description: "Group discussions, games, and social gatherings to foster companionship."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="h-5 w-5 text-orange-500 mr-2" />
              <Heart className="h-8 w-8 text-orange-500 mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Care & Support
              </span>
            </Link>
            <div className="flex space-x-4">
              <Link to="/login">
                <Button variant="outline" className="hover:bg-orange-50">Login</Button>
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
          <Home className="h-20 w-20 text-orange-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
            Prashanthi Old Age Home
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            A peaceful sanctuary where our elderly residents receive compassionate care, dignity, and companionship 
            in their golden years. Every senior deserves respect, love, and quality care.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-orange-700">Honoring Our Elders</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Prashanthi Old Age Home, we are dedicated to providing exceptional care and creating a home-like 
                environment where seniors can live with dignity, comfort, and joy. We believe in honoring the wisdom 
                and experience of our elders while ensuring their physical, emotional, and social well-being.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Heart className="h-5 w-5 text-red-500 mr-3" />
                  Providing compassionate and personalized care
                </li>
                <li className="flex items-center">
                  <Stethoscope className="h-5 w-5 text-blue-500 mr-3" />
                  Ensuring comprehensive healthcare services
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-green-500 mr-3" />
                  Fostering social connections and community
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4 text-orange-800">Current Statistics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">65</div>
                  <div className="text-sm text-gray-600">Residents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">8</div>
                  <div className="text-sm text-gray-600">Years of Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Medical Care</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">15</div>
                  <div className="text-sm text-gray-600">Care Staff</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services & Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-100">
                <CardHeader>
                  <activity.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <CardTitle className="text-xl text-orange-700">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Facilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-orange-700">Living Spaces</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Comfortable private and shared rooms</li>
                  <li>• Air-conditioned accommodations</li>
                  <li>• Accessible bathrooms and facilities</li>
                  <li>• 24/7 emergency assistance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-orange-700">Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• On-site medical clinic</li>
                  <li>• Regular health check-ups</li>
                  <li>• Medication management</li>
                  <li>• Emergency medical care</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-orange-700">Dining & Recreation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Nutritious meals and snacks</li>
                  <li>• Community dining hall</li>
                  <li>• Garden and outdoor spaces</li>
                  <li>• Library and recreation room</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Daily Schedule</h2>
          <div className="bg-orange-50 rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-700">Morning Schedule</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>6:30 AM - Wake up call & morning tea</li>
                  <li>7:30 AM - Morning exercises & yoga</li>
                  <li>8:30 AM - Breakfast</li>
                  <li>10:00 AM - Medical rounds</li>
                  <li>11:00 AM - Activities & social time</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-700">Evening Schedule</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>4:00 PM - Evening tea & snacks</li>
                  <li>5:00 PM - Recreation & entertainment</li>
                  <li>6:30 PM - Prayer & meditation</li>
                  <li>7:30 PM - Dinner</li>
                  <li>9:00 PM - Rest time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Contact Prashanthi Old Age Home</h2>
          <p className="text-lg text-gray-600 mb-8">
            Interested in our services, volunteering, or visiting? Contact us for more information.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <Phone className="h-8 w-8 text-orange-500 mb-3" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+91 98765 43211</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <Mail className="h-8 w-8 text-orange-500 mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">prashanthi@careandsupport.org</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <MapPin className="h-8 w-8 text-orange-500 mb-3" />
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-600">456 Peace Avenue, Serenity Town, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 text-orange-400 mr-2" />
            <span className="text-xl font-bold">Care & Support - Old Age Home Division</span>
          </div>
          <p className="text-gray-300">&copy; 2024 Prashanthi Old Age Home. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default OldAge;
