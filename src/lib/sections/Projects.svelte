<script>
  import Button from "$lib/components/Button.svelte";
  import Container from "$lib/components/Container.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
</script>

<section class="py-14 bg-sec-850 border-t border-sec-600 w-full">
  <Container className="space-y-5 w-full" heading="Projects">
    <p class="text-lg leading-normal text-gray-400">
      Check out the projects our members have bylt.
    </p>
    <div class="flex flex-row space-x-3">
      <ProjectCard
        title="Opine"
        subtitle="Feedback System"
        status="Beta"
        contributors="{['Siddharth Gupta', 'Sarthak Bajaj']}"
        techStack="{['Django', 'HTML', 'CSS']}"
      />
      <ProjectCard
        title="FindMyStuff"
        subtitle="Items Locator"
        status="Released"
        contributors="{[
          'Sambhav Satija',
          'Kshitij Jain',
          'Ankur Dohare',
          'Magus Verma',
        ]}"
        techStack="{['Django', 'HTML', 'CSS']}"
      />
    </div>
    <Button>All Projects</Button>
  </Container>
</section>
