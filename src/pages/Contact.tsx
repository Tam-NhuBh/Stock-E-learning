import { Grid, Card, CardContent, Typography, TextField, Button, Box } from "@mui/material";

const Contact = () => {  

  return (
    <div className="guest-contact" style={{ backgroundColor: '#d3f2ff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Grid container spacing={2} style={{ flex: '1', padding: '20px'}}>
          <Grid item xs={12} lg={5}>
              <Card variant="outlined" sx={{  height: '100%' }}>
                      <CardContent>
                      <Box mb={2}>
                          <form>
                          <TextField
                              fullWidth
                              label="Your name"
                              variant="outlined"
                              margin="normal"
                              className="input-field"
                              style={{ background:"#EEEEEE" }}
                          />
                          <TextField
                              fullWidth
                              label="Email"
                              variant="outlined"
                              margin="normal"
                              className="input-field"
                              style={{ background:"#EEEEEE" }}
                          />
                          <TextField
                              fullWidth
                              label="Your message"
                              variant="outlined"
                              multiline
                              rows={10}
                              margin="normal"
                              className="input-field"
                              style={{ background:"#EEEEEE" }}
                          />
                          <Button variant="contained" color="primary" style={{ width: '20%', margin: '0 auto', marginTop:'8px' }}>
                              Gửi
                          </Button>
                          </form>
                      </Box>
                      </CardContent>
                </Card>
            </Grid>


          <Grid item xs={12} lg={7} style={{ position: 'sticky', top: '20px' }}>
              <div style={{ width: '100%', marginRight: '20px', height: '100%' }}> 
                     <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4853986110893!2d106.76933817457575!3d10.850637657821414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1709305596256!5m2!1svi!2s" 
                          style={{ border: 'none', borderRadius: '10px', width: '100%', height:'100%' }} 
                          loading="lazy" 
                      ></iframe>
                  </div>

          </Grid>

      </Grid>
    </div>
  );
};

export default Contact;
