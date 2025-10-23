import Img from '../assets/images/fav.png'

export default function Footer() {
  return (
    <footer class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>Copyright © {new Date().getFullYear()}Nanda Dev</p>
      </aside>
    </footer>
  );
}