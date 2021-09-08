<script lang="ts">
  import Container from "$lib/components/Container.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import projects_ from "$lib/data/projects.yml";
  import type { Project } from "$lib/types";

  const projects = projects_ as Project[];
</script>

<section class="text-gray-200 bg-sec-800 py-14">
  <Container heading="Projects">
    <div class="grid grid-cols-2 gap-5 mt-10">
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
  </Container>
</section>
