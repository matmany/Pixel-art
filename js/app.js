
function main() {
  const  form = $('form'), table = $('table');
  let color = $('main').children('input');
  let colorVal = color.val();
  let  w = 0, h = 0, grid = "";

  form.submit(function(e){
    let data = form.serializeArray();
    e.preventDefault();
    grid = creatGridHtml(data);
    $('table').empty();
    $('table').append(grid);
    $('td').click(function() {
      $(this).css('background',colorVal);
    });
  });

  color.change(function() {
    colorVal = $(this).val();
  });
}

// This function is responseble to return the html of the current grid
function creatGridHtml(data) {
  let width, height;
  const trStart = "<tr>", trEnd = "</tr>", td = "<td></td>";
  height = data[0].value;
  width = data[1].value;

  if(width > 0 && height > 0) {
    let gridStr = "";
  for(let i = 0; i <height; i++) {
    gridStr += trStart;
    for (let j = 0; j < width; j++) {
      gridStr += td;
    }
    gridStr += trEnd;
  }
  return gridStr;
  }
  else
    return "<p>Missing value</p>";
}
$(main);
