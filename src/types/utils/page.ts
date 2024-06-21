export interface Page<T> {
  data: T[];
  meta?: PageMeta;
}

export interface PageMeta {
  current_page: number;
  last_page: number;
  next_page_url?: string;
  prev_page_url?: string;
  total: number;
}