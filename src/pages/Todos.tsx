import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

import { Todo } from "../utils/types/todos";
import { Loader } from "../components/loader";
import { useCreateTodoMutation, useTodosQuery } from "src/api/todos";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export function Todos() {
  const { data: rowData, isLoading } = useTodosQuery();
  const createTodoMutation = useCreateTodoMutation();

  if (isLoading) return <Loader />;

  const columnDefs: ColDef<Todo>[] = [
    { field: "name", headerName: "שם" },
    { field: "description", headerName: "עוד פרטים בקשה" },
    {
      field: "done",
      headerName: "עשית כבר?",
      cellRendererParams: { disabled: false },
      onCellValueChanged: (p) => console.log(p),
    },
    { field: "date", headerName: "תאריך משימה" },
  ];

  return (
    <>
      <button
        onClick={() => {
          createTodoMutation.mutate({ done: false, name: "first todo yay" });
        }}
      >
        hey
      </button>
      <div
        className="ag-theme-quartz"
        style={{ height: "calc(100vh - 64px)", width: "100%" }}
      >
        <AgGridReact
          noRowsOverlayComponent={<span>אין משימות🤔</span>}
          rowData={rowData}
          columnDefs={columnDefs}
          enableRtl
        />
      </div>
    </>
  );
}
