let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
/*Ove linije dohvaćaju elemente DOM-a sa ID-om menu-icon i klasom navbar. Metoda querySelector vraća prvi element koji se poklapa sa datim CSS selektorom*/
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/*Ovaj deo koda dodeljuje događaj klikanja (click) na element menu. Kada se klikne na meni, poziva se metoda toggle nad 
classList svojstvom elementa menu i navbar. Ovo menja prisustvo CSS klase bx-x na elementu menu i klase active na elementu navbar.
 To znači da će se klase dodavati ako nisu prisutne ili uklanjati ako su već prisutne. */
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
/*Ovaj deo koda dodeljuje događaj pomeranja (scroll) na objekat window. Svaki put kada se stranica pomeri, ovaj događaj se pokreće. 
Uklanja se klasa bx-x sa elementa menu i klasa active sa elementa navbar. Ovo obezbeđuje da kada se stranica pomeri, 
ikonica menija više neće biti označena, a navigaciona traka više neće biti aktivna.
Ove linije koda su zapravo odgovorne za promenu klasa kada se klikne na ikonicu menija i za uklanjanje tih klasa kada se stranica pomeri.
*/