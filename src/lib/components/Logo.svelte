<script lang="ts">
  import { draw } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import { onMount } from "svelte";

  export let backgroundColor = "white";
  export let size: "sm" | "md" | "lg" = "md";

  const transitionConfigs = { duration: 2000, easing: cubicOut };

  let show = false;
  let fillWrenchBody = false;
  let wrench: SVGElement;
  let wrenchHole: SVGCircleElement;
  $: wrenchHole && wrenchHole.setAttribute("fill", backgroundColor);

  function tiltWrench() {
    wrench;
  }

  onMount(() => {
    show = true;
    setTimeout(() => {
      fillWrenchBody = true;
    }, 2000);
  });
</script>

{#if show}
  <h1
    class="flex items-center space-x-1 text-primary font-bold {size === 'sm'
      ? 'text-xl'
      : size === 'md'
      ? 'text-3xl'
      : 'text-6xl'}"
  >
    <span>B</span>
    <div class="{size === 'sm' ? 'w-4' : size === 'md' ? 'w-7' : 'w-10'}">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 727.99994 1122.6889"
        class="overflow-visible"
        bind:this="{wrench}"
      >
        <g
          stroke="#3fada8"
          stroke-width="5"
          transform="translate(-65.833715 -109.75915) scale(11.51519)"
        >
          <path
            transition:draw="{transitionConfigs}"
            class="transition-all duration-1000 ease-out"
            class:filled="{fillWrenchBody}"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M27.964975 105.81702c-6.121986 1.8328-12.754195.0557-17.139589-4.59254-4.3853931-4.648246-5.7738529-11.372561-3.5881909-17.377621L24.195063 50.918095c-5.953772-7.177756-7.417553-17.072653-3.796961-25.666772 3.620592-8.594119 11.723614-14.458645 21.018757-15.212229l-8.138646 20.186147 7.954951 11.490485 13.258252-3.314563 7.705576-19.968753c5.993411 6.804173 7.832792 16.320157 4.806777 24.867729-3.026015 8.547571-10.442995 14.786614-19.38249 16.304234l-7.860028 32.95728c-1.109691 6.293366-5.674291 11.422567-11.796276 13.255367z"
          ></path>
          <circle
            transition:draw="{{ ...transitionConfigs, delay: 1000 }}"
            bind:this="{wrenchHole}"
            cx="23.15"
            cy="89.669998"
            r="5"
            stroke-width="3"></circle>
        </g>
      </svg>
    </div>
    <span>LD</span>
  </h1>
{/if}

<style lang="postcss">
  svg {
    transition: transform 0.5s cubic-bezier(0.64, 0.11, 0.82, 1.78);
    transform-origin: 73% 17.5%;
  }

  h1:hover svg,
  h1:focus svg,
  h1:active svg {
    transform: rotate(-135deg);
  }
  g {
    paint-order: stroke;
  }

  path {
    fill: transparent;
  }

  path.filled {
    fill: #3fada8;
  }
</style>
