
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, GraduationCap, Gamepad2, Music, Book, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Orphanage = () => {
  const activities = [
    {
      icon: GraduationCap,
      title: "Education Programs",
      description: "Quality education from kindergarten to high school with dedicated teachers and modern facilities."
    },
    {
      icon: Gamepad2,
      title: "Sports & Recreation",
      description: "Various sports activities including football, cricket, and indoor games to promote physical fitness."
    },
    {
      icon: Music,
      title: "Arts & Music",
      description: "Music lessons, art classes, and cultural programs to nurture creativity and talent."
    },
    {
      icon: Book,
      title: "Library & Reading",
      description: "Well-stocked library with books, computers, and quiet study spaces for learning."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="h-5 w-5 text-blue-500 mr-2" />
              <Heart className="h-8 w-8 text-orange-500 mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Care & Support
              </span>
            </Link>
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
          <Users className="h-20 w-20 text-blue-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Care and Love Orphanage
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            A safe haven where children find love, care, education, and the foundation for a bright future. 
            Every child deserves a chance to dream and achieve their potential.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Nurturing Young Hearts</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Care and Love Orphanage, we believe every child deserves unconditional love, quality education, 
                and opportunities to discover their unique talents. We provide a warm, family-like environment where 
                children can heal, grow, and thrive.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Heart className="h-5 w-5 text-red-500 mr-3" />
                  Providing unconditional love and emotional support
                </li>
                <li className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-blue-500 mr-3" />
                  Ensuring quality education and skill development
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-green-500 mr-3" />
                  Building character and social values
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4 text-blue-800">Current Statistics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">85</div>
                  <div className="text-sm text-gray-600">Children in Care</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">12</div>
                  <div className="text-sm text-gray-600">Years of Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">150+</div>
                  <div className="text-sm text-gray-600">Children Adopted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">95%</div>
                  <div className="text-sm text-gray-600">School Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-100">
                <CardHeader>
                  <activity.icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle className="text-xl text-blue-700">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Daily Schedule</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Morning Routine</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>6:00 AM - Wake up & Morning exercises</li>
                  <li>7:00 AM - Personal hygiene & breakfast</li>
                  <li>8:00 AM - School preparation</li>
                  <li>8:30 AM - School time</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Evening Routine</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>4:00 PM - Return from school & snacks</li>
                  <li>5:00 PM - Homework & study time</li>
                  <li>6:30 PM - Recreation & sports</li>
                  <li>8:00 PM - Dinner & bedtime stories</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Contact Care and Love Orphanage</h2>
          <p className="text-lg text-gray-600 mb-8">
            Interested in volunteering, donating, or learning more about our programs? Get in touch with us.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl">
              <Phone className="h-8 w-8 text-blue-500 mb-3" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl">
              <Mail className="h-8 w-8 text-blue-500 mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">orphanage@careandsupport.org</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl">
              <MapPin className="h-8 w-8 text-blue-500 mb-3" />
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-600">123 Hope Lane, Care City, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 text-orange-400 mr-2" />
            <span className="text-xl font-bold">Care & Support - Orphanage Division</span>
          </div>
          <p className="text-gray-300">&copy; 2024 Care and Love Orphanage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Orphanage;
