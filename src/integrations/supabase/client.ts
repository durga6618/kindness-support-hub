// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ktbxeazcithdsekjopbm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0YnhlYXpjaXRoZHNla2pvcGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NjY0NzAsImV4cCI6MjA2NDM0MjQ3MH0.6_exVeta-I6XN2QBLBm2OCqmHumr6F4K6D7QiZtrvF8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);