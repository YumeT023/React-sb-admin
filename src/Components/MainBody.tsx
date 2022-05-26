import React from "react";
import { Card } from "./Card";
import { DataTable } from "./DataTable";

export const MainBody = () => {
    return (
        <main>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Tables</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                    <li className="breadcrumb-item active">Tables</li>
                </ol>
                <Card>
                    <div className="card-body">
                        DataTables is a third party plugin that is used to generate the demo table below. for more information about DataTAble, Please visit
                        The <a target="_blank" href="https://datatables.net/">official Datatables documentation</a>.
                    </div>
                </Card>
                <Card>
                    <div className="card-header">
                        <i className="fas fa-table me-1"></i>DataTables Example
                    </div>
                    <div className="card-body">
                        <DataTable />
                    </div>
                </Card>
            </div>
        </main>
    )
}