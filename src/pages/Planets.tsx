import { useQuery } from "@tanstack/react-query";
import { getPlanets } from "../services/services";
import { z } from "zod";

const planetSchema = z.object({
  name: z.string(),
  rotation_period: z.coerce.number(),
  orbital_period: z.coerce.number(),
  residents: z.array(z.string().url()),
  films: z.array(z.string().url()),
  url: z.string().url(),
  terrain: z.string(),
});

const planetSchemaArr = z.array(planetSchema);

type Planet = z.infer<typeof planetSchema>;

const usePlanets = () => {
  return useQuery({
    queryKey: ["planets"],
    queryFn: getPlanets,
    retry: 1,
  });
};

export const Planets = () => {
  const { data, isFetched, isLoading } = usePlanets();
  const parsedData = isFetched ? planetSchemaArr.parse(data?.data.results) : [];

  return (
    <div className="wrap">
      {!isLoading ? (
        parsedData?.map((p: Planet) => {
          return (
            <div key={p.name} className="card">
              <p>Name: {p.name}</p>
              <p>Orbital Period: {p.orbital_period}</p>
              <p>Rotation Period: {p.rotation_period}</p>
              <div className="links">
                <span>Films: {p.films.length}</span>
              </div>
              <div className="links">
                <span>Residents: {p.residents.length}</span>
              </div>
              <div className="links">
                <span>Terrain: {p.terrain}</span>
              </div>
              <div className="links">
                <a href={p.url} target="_blank" rel="noreferrer">
                  {p.url}
                </a>
              </div>
            </div>
          );
        })
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};
