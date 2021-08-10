<script lang="ts">
  import Admins from "$lib/components/Admins.svelte";
  import Container from "$lib/components/Container.svelte";
  import members_ from "$lib/data/members.yml";
  import type { Member } from "$lib/types";
  import IconHi, { Mail } from "svelte-hero-icons";
  import AiFillGithub from "svelte-icons-pack/ai/AiFillGithub";
  import Icon from "svelte-icons-pack/Icon.svelte";

  const members = members_ as Member[];
  const iconColor = "#2A5776";
</script>

<section class="text-gray-200 bg-sec-800 py-14">
  <Container heading="Members">
    <div class="overflow-x-scroll">
      <table class="w-full mt-10">
        <thead>
          <tr class="header-row">
            <th>Name</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          {#each members as member}
            <tr class="row">
              <td>
                <div class="flex flex-row w-full space-x-2">
                  <p class="whitespace-nowrap">{member.name}</p>
                  {#if member.email}
                    <a class="text-sec-100" href="mailto:{member.email}"
                      ><IconHi src="{Mail}" solid class="w-5 h-5" /></a
                    >
                  {/if}
                  {#if member.github}
                    <a class="text-sec-100" href="{member.github}"
                      ><Icon
                        src="{AiFillGithub}"
                        className="h-5 w-5"
                        color="{iconColor}"
                      /></a
                    >
                  {/if}
                </div>
              </td>
              <td>
                {#if member.skills && member.skills.length}
                  <div id="skills" class="flex flex-wrap sm:w-full">
                    {#each member.skills as skill}
                      <div
                        class="text-xs py-1.5 px-2 rounded border bg-sec-400 border-sec-600 text-tert-200 m-0.5"
                      >
                        {skill}
                      </div>
                    {/each}
                  </div>
                {/if}
                {#if member.details}
                  <p class="mt-1 ml-1 text-xs">{member.details}</p>
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </Container>
</section>

<section class="py-14 bg-sec-800">
  <Container heading="Admins">
    <Admins className="mt-10" />
  </Container>
</section>

<style lang="postcss">
  .header-row th {
    @apply bg-sec-400 py-2 px-4 text-left border-2 border-sec-800 rounded-lg;
  }

  .row {
    @apply even:bg-sec-700 text-gray-300;
  }

  .row > td {
    @apply py-2 px-4 border-2 border-sec-800 rounded-lg text-sm;
  }

  @media only screen and (max-width: 640px) {
    #skills {
      min-width: 30rem;
    }
  }
</style>
