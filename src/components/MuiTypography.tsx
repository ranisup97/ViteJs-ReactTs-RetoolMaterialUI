import Typography from "@mui/material/Typography";
export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 heading
      </Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        eligendi rerum ducimus, soluta explicabo ipsa facere. Quod asperiores
        libero id dicta aut numquam veritatis quam! Corporis porro maiores ut
        obcaecati!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat error
        voluptatibus neque recusandae aliquid facere, quae nemo modi porro rerum
        velit dignissimos doloremque. Saepe eum id mollitia dolore nostrum
        soluta.
      </Typography>
    </div>
  );
};
