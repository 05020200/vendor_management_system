import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ngrjzazifqbhtouxueud.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ncmp6YXppZnFiaHRvdXh1ZXVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyODA4NzEsImV4cCI6MjA5MDg1Njg3MX0.8IOFa8SGPFm2mJAc-1luina9CvZV_uyHd3rdobmBEuA"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)