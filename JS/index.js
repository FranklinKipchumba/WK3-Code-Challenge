document.querySelectorAll('.btn').forEach(buttonElement => {
    const button = bootstrap.Button.getOrCreateInstance(buttonElement)
    button.toggle()
  });
  document.querySelectorAll('.btn btn-outline-info').forEach(buttonElement => {
    const button = bootstrap.Button.getOrCreateInstance(buttonElement)
    button.toggle()
  });