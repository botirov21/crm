import React from 'react';
import { mockTeacher } from '../../mock/teachers'; 
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100  },
  { 
    field: 'fullName', 
    headerName: 'Full name', 
    width: 300,
    renderCell: (params) => (
      <Link to={`/teachers/${params.row.id}`}>
        {params.value}
      </Link>
    )
  },
  { field: 'phoneNumber', headerName: 'Phone number', width: 200 },
  { field: 'groups', headerName: 'Groups', width: 150 },
  { field: 'percent', headerName: 'Percent', width: 150 },
];

const rows = mockTeacher.teacherInfo.map(teacher => ({
  id: teacher.id,
  fullName: teacher.teacher.fullName || 'No data',
  phoneNumber: teacher.teacher.phoneNumber || 'No data',
  groups: teacher.teacher.groups || 'No data',
  percent: teacher.teacher.percent || 'No data',
}));

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '60%',background:"#fff"}}>
      <DataGrid 
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}