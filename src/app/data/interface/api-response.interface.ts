export interface ApiResponse {
  hits: {
    hits: Array<{
      _source: Report;
    }>;
  };
}
