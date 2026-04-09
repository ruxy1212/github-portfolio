export interface GithubProject {
  name: string;
  full_name: string;
  homepage?: string;
  html_url: string;
  description?: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at?: string;
  pushed_at?: string;
  created_at?: string;
  ext_summary?: string;
  ext_stack?: string[];
  ext_categories?: string[];
}
