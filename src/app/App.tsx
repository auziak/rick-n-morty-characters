import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

// css
import "./App.css";
import { AppRouter } from "./AppRouter";

export const App = () => {
  return (
    <div className="App" data-testid="app">
      <AppRouter />
    </div>
  );
};
