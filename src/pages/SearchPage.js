import EventOverview from "../components/EventOverview";
import { Stack, TextField, Input } from "@mui/material";
import { Container } from "@mui/system";
import { blue } from "@mui/material/colors";

const Search = (props) => {
  /* Check if there are events available close to you with a ternary operator */
  let overviewEventsAvailable = <p>There are no events close to you</p>;

  if (props.events.length > 0) {
    overviewEventsAvailable = props.events.map((event) => (
      <EventOverview
        key={event.id}
        img={event.img}
        name={event.name}
        date={event.date}
        location={event.location}
      />
    ));
  }

  return (
    <>
      <Container
        sx={{
          marginY: 5,
        }}
      >
        {/* dropdown */}
        <h1>Oost-Vlaanderen</h1>

        <Input
          fullWidth
          placeholder="Start Search..."
          inputProps={{ style: { fontSize: 40, fontWeight: 900 } }}
          sx={{
            marginBottom: 5,
            ":before": { borderBottomColor: "blue" },
            ":after": { borderBottomColor: "blue" },
          }}
        />
        {/* Popular in Oost-Vl niet doen */}
        <Stack spacing={4}>{overviewEventsAvailable}</Stack>
      </Container>
    </>
  );
};

export default Search;
