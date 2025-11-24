document
  .querySelector(".recruitment-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const missions = formData.getAll("missions").join(", ");

    const data = {
      name: formData.get("name"),
      age: formData.get("age"),
      email: formData.get("email"),
      source: formData.get("source"),
      experience: formData.get("experience"),
      missions: missions,
      lore: formData.get("lore"),
      irl: formData.get("irl"),
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbw3BSzMYgj9nRPFWixzKKt8IkGRcdshzQFzQ1Ahqmto2nB1__fiTH30nJS9KIQa5GI/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      alert("Candidature envoyée avec succès !");
      e.target.reset();
    } catch (error) {
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
      console.error(error);
    }
  });
