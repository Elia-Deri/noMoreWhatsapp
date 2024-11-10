import { useState } from "react";
import { Button } from "@mui/material";
import { IoMdAdd } from "react-icons/io";
import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

import { AddTodoForm } from "./AddTodoForm";
import { useTodosQuery } from "src/api/todos";
import { Loader } from "src/components/loader";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Todo } from "src/api/todos/types";

export function Todos() {
  const [openAddTodo, setOpenAddTodo] = useState(false);

  const { data: rowData, isLoading } = useTodosQuery();

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
    { field: "deadline", headerName: "תאריך משימה" },
  ];
  console.log(rowData);

  return (
    <>
      <AddTodoForm open={openAddTodo} setOpen={setOpenAddTodo} />

      <Button endIcon={<IoMdAdd />} onClick={() => setOpenAddTodo(true)}>
        הוספת משימה
      </Button>
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
