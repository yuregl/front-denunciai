interface Files {
  url: string;
}

export interface ViewAllComplaints {
  id: string;
  title: string;
  description: string;
  userId: string;
  files: Array<Files>
}
