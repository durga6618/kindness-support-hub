
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, User } from 'lucide-react';

const AuthButton = () => {
  const { user, signOut, loading } = useAuth();

  if (loading) {
    return (
      <Button variant="outline" disabled>
        Loading...
      </Button>
    );
  }

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600 flex items-center gap-1">
          <User className="h-4 w-4" />
          Welcome back!
        </span>
        <Button 
          variant="outline" 
          size="sm"
          onClick={signOut}
          className="flex items-center gap-1"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link to="/login">
        <Button variant="outline" size="sm">
          Sign In
        </Button>
      </Link>
      <Link to="/signup">
        <Button size="sm" className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600">
          Sign Up
        </Button>
      </Link>
    </div>
  );
};

export default AuthButton;
