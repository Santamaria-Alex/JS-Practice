const range = document.getElementById("range");

range.addEventListener("input", (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  //   get pixel width of the track 'range'
  const range_width = getComputedStyle(e.target).getPropertyValue("width");

  //get pixel width of the label container
  const label_width = getComputedStyle(label).getPropertyValue("width");

  //to remove the 'px' from range_width and label_width
  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_label_width = +label_width.substring(0, label_width.length - 2);

  //get min max values, set in html input
  const max = +e.target.max;
  const min = +e.target.min;

  const left = value * (num_width / max) - num_label_width / 2;

  label.style.left = `${left}px`;

  console.log(range_width, label_width, num_width, num_label_width, max, min);

  label.innerHTML = value;
});
