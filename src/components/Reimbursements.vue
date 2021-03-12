<template>
  <div class="py-12 bg-white center-comp">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-15">
      <div class="lg:text-center">
        <h2
          class="text-base text-logo-blue font-semibold tracking-wide uppercase"
        >
          Remboursements
        </h2>

        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Les consultations ostéopathiques peuvent être prises en charge
          partiellement ou totalement selon les mutuelles
        </p>
        <p class="mt-5 mb-5 max-w-2xl text-sm text-gray-500 lg:mx-auto">
          (mis à jour au 23/08/2019)
        </p>
        <a
          href="https://www.osteopathie.org/mutuelles.html"
          target="_blank"
          class="reimbursements-link"
        >
          <strong>Voir les mutuelles qui remboursent</strong>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.center-reimbursements {
  width: 40%;
}

.center-comp {
  height: auto;
}

.reimbursements-link {
  background-color: #3abfd6;
  padding: 1%;
  border-radius: 0.5em;
  color: whitesmoke;
}

.reimbursements-link:hover {
  background-color: white;
  color: #3abfd6;
  box-shadow: 1px 1px 12px #555;
}
</style>