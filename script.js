//your JS code here. If required.
      const select = document.getElementById("colorSelect");
      const button = document.querySelector("input");
      function remove() {
        select.remove(select.selectedIndex);
      }
      button.addEventListener("click", remove);