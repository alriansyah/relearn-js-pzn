function register(firstname, lastname = "Unknown") {
  console.log(firstname);
  console.log(lastname);
}

register();
register("Eko");
register("Eko", "Kurniawan");
register("Eko", undefined);
register("Eko", null);
