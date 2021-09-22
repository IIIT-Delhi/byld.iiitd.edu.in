<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import Container from "$lib/components/Container.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import projects_ from "$lib/data/projects.yml";
  import type { Project } from "$lib/types";

  const projects = projects_.slice(0, 2) as Project[];
</script>

<section class="w-full border-t py-14 bg-sec-800 border-sec-600">
  <Container className="w-full space-y-5" heading="Projects">
    <p class="text-lg leading-normal text-gray-400">
      Check out the projects our members have bylt.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      {#each projects as project}
        <ProjectCard
          title="{project.title}"
          subtitle="{project.subtitle}"
          status="{project.status}"
          contributors="{project.contributors}"
          techStack="{project.tech}"
          link="{project.link}"
        />
      {/each}
    </div>
    <Button as="button-link" href="/projects">All Projects</Button>
  </Container>
</section>
