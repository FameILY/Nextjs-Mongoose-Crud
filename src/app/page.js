import API from "@/components/API-box";

export default function Home() {
  return (
    <>
      <div className="p-4">
        <h1 className="text-5xl mb-2">Mongoose CRUD</h1>
        <API
          title="Create A Note"
          url="localhost:3000/api"
          desc="Create a note"
          method="POST"
        />
        <API
          title="Get All Notes"
          url="localhost:3000/api"
          desc="Get all the notes in JSON"
          method="GET"
        />
        <API
          title="Get a specific note"
          url="localhost:3000/api/"
          desc="Get a specific note by adding note's id in the url parameter"
          method="GET"
          paramNeeded="true"

        />
        <API
          title="Update a Specific Note"
          url="localhost:3000/api/"
          desc="Update a Specific Note by adding note's id in the url parameter"
          method="PUT"
          paramNeeded="true"

        />
        <API
          title="Delete a Specific Note"
          url="localhost:3000/api/"
          desc="Delete a Specific Note by adding note's id in the url parameter"
          method="DELETE"
          paramNeeded="true"
        />
      </div>

      
    </>
  );
}
