import "./app.css";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Planets } from "./pages/Planets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./Components/ErrorBoundary";
import z from "zod";
import { Upload } from "./pages/Upload";

export default function App() {
  const queryClient = new QueryClient();

  {
    const { log } = console;
    //promise
    const myData = new Promise((resolve) =>
      setTimeout(() => resolve("my string"), 1000)
    );
    //pipe
    const myData2 = z.union([z.string(), z.number()]).pipe(z.coerce.number());
    //file
    const file: File = new File(["someFile"], "some-file.txt", {
      type: "text/plain",
    });

    //*****************************//
    //**********ZOD TEST***********//
    const schema = z.promise(z.string());
    schema.parseAsync(myData).then(log);

    let parsedData = myData2.safeParse("9090").success;

    const fileSchema = z
      .instanceof(File)
      .refine((f) => f.type === "text/plain", "wrong file type");

    const baseCategory = z.object({
      name: z.string(),
    });

    type Category = z.infer<typeof baseCategory> & {
      subcategories: Category[];
    };
    const categorySchema: z.ZodType<Category> = baseCategory.extend({
      subcategories: z.lazy(() => categorySchema.array()),
    });

    log(
      categorySchema.safeParse({
        name: "People",
        subcategories: [
          {
            name: "Politicians",
            subcategories: [
              {
                name: "Presidents",
                subcategories: [
                  {
                    name: "Aliens",
                    subcategories: [],
                  },
                ],
              },
            ],
          },
        ],
      }).success,
      "categorySchema"
    );

    log(fileSchema.safeParse(file).success, "file");
    log(parsedData, "data");
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Login />
        <Register />
        <Upload />
        <ErrorBoundary
          fallback={<div className="error">Couldn't fetch planets</div>}
        >
          <Planets />
        </ErrorBoundary>
      </div>
    </QueryClientProvider>
  );
}
