const SUPABASE_URL = 'https://uqwstvnsesaenalrdjyp.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxd3N0dm5zZXNhZW5hbHJkanlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwMjYsImV4cCI6MTk4MzY4NDAyNn0.bZ660DcBSXEiAg5PHlsCACk9kEfmD8_HYAnhjOB69Vo';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchRanges() {
    const response = await client.from('ranges').select('*').order('id');
    return response.data;
}

export async function fetchLymphocytes() {
    const response = await client.from('lymphocytes').select('*').order('id');
    return response.data;
}
