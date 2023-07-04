import { signIn } from '@astro-auth/client';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    if (form) {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      await signIn({
        provider: 'credential',
        login: data,
      });
      window.location.href = '/';
    }
  });
});
