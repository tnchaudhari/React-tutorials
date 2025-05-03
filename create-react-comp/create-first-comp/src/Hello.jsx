function Hello() {

  let name = "Tanmay";
  let fullName = () => {
    return 'Tanmay Chaudhari';
  }
  return <h3>
    Hello {fullName()}, this is from future speaking.
  </h3>
}

export default Hello;