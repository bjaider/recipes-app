import {Modal, useModal, Button, Text, Input, Grid} from '@nextui-org/react'
import InputGroups from '../components/InputGroups'
import '../styles/Filter.css'
const Filter = () => {
  const {setVisible, bindings} = useModal()
  return (
    <div className='filter-container'>
      <Button auto shadow onClick={() => setVisible(true)}>
        Filters
      </Button>
      <Modal
        scroll
        width="900px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={22} b>
            Filters
          </Text>
        </Modal.Header>
        <Modal.Body className="filter-modal-body">
          <Grid.Container gap={2}>
            <Grid xs={4} className="input-grid-item">
              <Input
                clearable
                label="Include Ingredients"
                placeholder="Comma-separated list (tomato,cheese)"
                fullWidth={true}
              />
            </Grid>
            <Grid xs={4} className="input-grid-item">
              <Input
                clearable
                label="Exclude Ingredients"
                placeholder="Comma-separated list (eggs,milk)"
                fullWidth={true}
              />
            </Grid>
            <Grid xs={4} className="input-grid-item">
              <Input
                clearable
                label="Max Ready Time"
                placeholder="Max Ready Time"
                fullWidth={true}

              />
            </Grid>
          </Grid.Container>
          <Grid.Container gap={2} className="input-groups-container">
            <InputGroups
              title={'Calories range'}
              inputs={
                <>
                  <Input
                    clearable
                    label="Min Calories"
                    placeholder="Min Calories"
                    css={{marginRight: '10px'}}
                  />
                  <Input
                    clearable
                    label="Max Calories"
                    placeholder="Max Calories"
                  />
                </>
              }
            />
            <InputGroups
              title={'Carbs range'}
              inputs={
                <>
                  <Input
                    clearable
                    label="Min Carbs"
                    placeholder="Min Carbs"
                    css={{marginRight: '10px'}}
                  />
                  <Input clearable label="Max Carbs" placeholder="Max Carbs" />
                </>
              }
            />
            <InputGroups
              title={'Cholesterol range'}
              inputs={
                <>
                  <Input
                    clearable
                    label="Min Cholesterol"
                    placeholder="Min Cholesterol"
                    css={{marginRight: '10px'}}
                  />
                  <Input
                    clearable
                    label="Max Cholesterol"
                    placeholder="Max Cholesterol"
                  />
                </>
              }
            />
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={() => setVisible(false)}>
            Close
          </Button>
          <Button auto onClick={() => setVisible(false)}>
            Agree
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Filter
