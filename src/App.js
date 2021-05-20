import React from "react";

function App() {
  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <main className="container mt-5">
        <section className="row">
          <div className="col col-12">
            <Formik
              initialValues={{
                todo: "",
              }}
              validationSchema={productSchema}
              onSubmit={(values) => {
                const newProduct = addProductDetails(values);
                saveNewProduct(newProduct);
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                errors,
                values,
                touched,
                isValidating,
                isValid,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    label="Todo"
                    id="todo"
                    value={values.todo}
                    placeholder="Enter todo"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    hasErrorMessage={touched.todo}
                    errorMessage={errors.todo}
                  />
                  <Button submitButton block disabled={isValidating || !isValid}>
                    Submit
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </section>
        <section className="row">
          <div className="col col-12">
            <BrowserRouter>
              <Route
                path="/"
                exact
                render={(routeProps) => (
                  <TodoList todos={todos} toggleTodo={toggleTodo} />
                )}
              />
              <Route
                path="/todosactive"
                exact
                render={(routeProps) => (
                  <TodoList todos={todos} toggleTodo={toggleTodo} />
                )}
              />
              <Route
                path="/todosdone"
                exact
                render={(routeProps) => (
                  <TodoList todos={todos} toggleTodo={toggleTodo} />
                )}
              />
            </BrowserRouter>
          </div>
        </section>
        <section className="row">
          <div className="col col-12">
            //Navlink
          </div>
        </section>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
