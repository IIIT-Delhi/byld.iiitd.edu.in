<script lang="ts">
  import Container from "$lib/components/Container.svelte";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import HiSolidMail from "svelte-icons-pack/hi/HiSolidMail";
  import AiFillGithub from "svelte-icons-pack/ai/AiFillGithub";
  import members from "$lib/data/members.yml";

  console.log(members);
</script>

<section class="bg-sec-800 py-12 text-gray-200">
  <Container heading="Members">
    <table class="w-full">
      <thead>
        <tr>
          <th class="header-cell">#</th>
          <th class="header-cell">Name</th>
          <th class="header-cell">Email</th>
          <th class="header-cell">GitHub</th>
          <th class="header-cell">Skills</th>
        </tr>
      </thead>
      <tbody>
        {#each members as member, i}
          <tr class="row">
            <td>{i + 1}</td>
            <td>{member.name}</td>
            <td><a href="{member.email}"><Icon src="{HiSolidMail}" /></a></td>
            <td><a href="{member.github}"><Icon src="{AiFillGithub}" /></a></td>
            <td>
              <div class="flex flex-row w-full">
                {#each member.skills as skill}
                  <div>{skill}</div>
                {/each}
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </Container>
</section>

<style lang="postcss">
  .header-cell {
    @apply bg-sec-400 py-2 px-4 text-left border-2 border-sec-800 rounded-lg;
  }

  .row {
    @apply even:bg-sec-700;
  }

  .row > td {
    @apply py-2 px-4 border-2 border-sec-800 rounded-lg;
  }
</style>
