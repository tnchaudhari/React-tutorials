function ToDoItem() {

  let name = 'Buy Milk';
  let date = '4/10/2023';

  return <div class="row kg-row">
    <div class="col-6">
      {name}
    </div>
    <div class="col-4">
      {date}
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-danger kg-button">Delete</button>
    </div>
  </div>
}

export default ToDoItem;