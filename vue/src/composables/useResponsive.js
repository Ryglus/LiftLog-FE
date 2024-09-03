import { ref, computed, onMounted, onUnmounted } from 'vue';

export function useResponsive() {
    const width = ref(window.innerWidth);

    function onResize() {
        width.value = window.innerWidth;
    }

    onMounted(() => {
        window.addEventListener('resize', onResize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', onResize);
    });

    const breakpoints = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280
    };

    const isSmall = computed(() => width.value < breakpoints.sm);
    const isMedium = computed(() => width.value >= breakpoints.sm && width.value < breakpoints.md);
    const isLarge = computed(() => width.value >= breakpoints.md && width.value < breakpoints.lg);
    const isExtraLarge = computed(() => width.value >= breakpoints.lg);

    return { isSmall, isMedium, isLarge, isExtraLarge };
}
