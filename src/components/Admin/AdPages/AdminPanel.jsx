import React from 'react';
import AdminLayout from '../AdComponents/AdminLayout';
import AdDashboard from './AdDashboard';

function AdminPanel() {
  return (
    <AdminLayout>
      <AdDashboard />
    </AdminLayout>
  );
}

export default AdminPanel;
