import { Card, Grid, Text} from "@nextui-org/react";
const InputGroups=({inputs,title})=> {
  return (

      <Grid /* sm={12} md={5} */xs={4}>
        <Card >
          <Card.Header>
            <Text b>{title}</Text>
          </Card.Header>
          <Card.Body >
            <Text>
             {inputs}
            </Text>
          </Card.Body>
        </Card>
      </Grid>
  );
}
export default InputGroups