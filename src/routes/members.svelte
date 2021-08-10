<script lang="ts">
  import Icon from "svelte-icons-pack/Icon.svelte";
  import IconHi, { Mail } from "svelte-hero-icons";
  import AiFillGithub from "svelte-icons-pack/ai/AiFillGithub";
  import Container from "$lib/components/Container.svelte";
  import members from "$lib/data/members.yml";
  import Admins from "$lib/components/Admins.svelte";

  console.log(members);
  const iconColor = "#2A5776";
</script>

<section class="bg-sec-800 py-14 text-gray-200">
  <Container heading="Members">
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
            <td class="w-56">
              <div class="w-full flex flex-row space-x-2">
                <p>{member.name}</p>
                <a class="text-sec-100" href="mailto:{member.email}"
                  ><IconHi src="{Mail}" solid class="h-5 w-5" /></a
                >
                <a class="text-sec-100" href="{member.github}"
                  ><Icon
                    src="{AiFillGithub}"
                    className="h-5 w-5"
                    color="{iconColor}"
                  /></a
                >
              </div>
            </td>
            <td>
              <div class="flex flex-wrap w-full">
                {#each member.skills as skill}
                  <div
                    class="text-xs py-1.5 px-2 rounded border bg-sec-400 border-sec-600 text-tert-200 m-0.5"
                  >
                    {skill}
                  </div>
                {/each}
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </Container>
</section>

<section class="py-14 bg-sec-800">
  <Container className="space-y-5" heading="Admins">
    <Admins />
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

  .contact a {
    @apply w-full flex justify-center text-sec-100;
  }

  .contact {
    @apply w-14;
  }
</style>
