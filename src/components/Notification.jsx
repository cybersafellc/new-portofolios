import { Card, Button } from "react-bootstrap";
const Notoficatiion = () => {
  const goto = () => {
    window.location.href =
      "https://drive.google.com/file/d/1-T_JL6mYjO8M9krmUsXRIGRHXDyL5vfo/view";
  };
  return (
    <>
      <Card
        className="border-0 shadow rounded-0 p-4 infromtaion"
        onClick={goto}
      >
        <Card.Body className="d-flex justify-content-center align-items-center gap-4">
          <i class="bx bxs-user-badge fs-1 bg-secondary text-light p-4 rounded-circle"></i>
          <div>
            <h4 className="fs-5">Information!</h4>
            <p className="fs-6 fw-light text-secondary">Download my CV here</p>
            <Button className="bg-ungu">Go to my CV</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default Notoficatiion;
