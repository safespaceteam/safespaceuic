class TabLink {
    constructor(element) {
      
      this.element = element;
      this.data = this.element.dataset.tab;
      
      // Using the custom data attribute get the associated Item element
      this.itemElement = document.querySelector(`.tabs-item[data-tab = '${this.data}']`);
      
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.itemElement);
      
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', () => {
        this.select();
      });
    };
  
    select() {
      // Getting all of the elements with the tabs-link class
      const links = document.querySelectorAll('.tabs-link');
  
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
     links.forEach(element => {
      element.classList.remove('tabs-link-selected');
    });
  
      // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
      
      // Call the select method on the item associated with this link
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
    const items = document.querySelectorAll('.tabs-item');
    items.forEach(element => {
    element.classList.remove('tabs-item-selected');
    });
      this.element.classList.add('tabs-item-selected');
    }
  }
  
  let links = document.querySelectorAll('.tabs-link');
  
  // links.forEach(link => {
  //   return new TabLink(link);
  // })
  
  // for stretch goals we have to use .map() or
  links = Array.from(links)
  links.map( function(link) {
    return new TabLink(link);
  });