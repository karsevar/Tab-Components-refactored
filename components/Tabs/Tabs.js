// TabItem needs to be above TabLink because TabLink is calling TabItem 
// and class syntax is not hoisted.

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => item.classList.remove('tabs-item-selected'))
    
    // Add a class named "tabs-item-selected" to this element
    //this.element;
    this.element.classList.add('tabs-item-selected')
  }
}


class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    // this.element;
    this.element = element;
    
    // Get the custom data attribute on the Link
    // this.data;
    this.data = this.element.dataset.tab;
    // console.log(this.data) // returning back the proper strings (1, 2, 3, 4)
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.itemElement = document.querySelector(`div.tabs-item[data-tab="${this.data}"]`)
    // console.log(this.itemElement);
    
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.tabItem = new TabItem(this.itemElement);
    // console.log(this.tabItem) // Output seems to be displaying the proper object configuration.
    
    // Add a click event listener on this instance, calling the select method on click
    // this.element.addEventListener('click', (event) => {
    //   this.tabItem.select();
    // });

    this.element.addEventListener('click', this.select.bind(this));
  }

  select() {
    // Get all of the elements with the tabs-link class
    // const links;
    const links = document.querySelectorAll('.tabs-link');

    // console.log('click fired', this.itemElement); // Event listener works perfectly.

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();
    links.forEach(link => link.classList.remove('tabs-link-selected'));
    console.log(links);

    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();


  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

// Tabs markup class:
class TabsMarkup {
    constructor(index, title) {
        this.title = title;
        this.index = index;
        this.printMarkup(this);
    }

    printMarkup() {
        // node tree configuration
        /* 
        <div class='tabs-link' data-tab=${this.index}></div>
        */

        const tab = document.createElement('div');
        tab.className = 'tabs-link';
        tab.dataset.tab = this.index;
        tab.textContent = this.title;

        //append to the parent div layer tabs-links
        const tabParent = document.querySelector('.tabs-links');
        console.log(tab);
        tabParent.appendChild(tab);
    }
}

const tabLinkLabels = [
    'Tab 1',
    'Tab 2',
    'Tab 3', 
    'Tab 4',
]

tabLinkLabels.forEach((item, index) => new TabsMarkup(index, item));

//tabs-item markup class
class TabItemMarkup {
    constructor(index, props) {
        this.index = index;
        this.title = props.title;
        this.content = props.content;

        this.printMarkup(this);
    }

    printMarkup() {
        // node tree for the tab-item div layers
        /*
        <div class='tabs-item'>
            <div class='tabs-item-title'></div>
            <div class='tabs-item-description'></div>
        </div>
        */

        const parentLayer = document.createElement('div');
        parentLayer.className = 'tabs-item';
        parentLayer.dataset.tab = this.index;

        const tabTitle = document.createElement('div');
        tabTitle.className = 'tabs-item-title';
        tabTitle.textContent = this.title;

        const tabContent = document.createElement('div');
        tabContent.className = 'tabs-item-description';
        tabContent.textContent = this.content;

        //Assembling the tree:
        parentLayer.appendChild(tabTitle);
        parentLayer.appendChild(tabContent);

        //Placing the created div layers into the actual webpage:
        const docElement = document.querySelector('.tabs-items');
        docElement.appendChild(parentLayer);
    }
}

const tabContentProps = [
    {
        title: 'Quote 1',
        content: 'Don’t Panic.'
    },
    {
        title: 'Quote 2',
        content: 'Curiously enough, the only thing that went through the mind of the bowl of petunias as it fell was Oh no, not again. Many people have speculated that if we knew exactly why the bowl of petunias had thought that we would know a lot more about the nature of the Universe than we do now.'
    },
    {
        title: 'Quote 3',
        content: 'It is known that there are an infinite number of worlds, simply because there is an infinite amount of space for them to be in. However, not every one of them is inhabited. Therefore, there must be a finite number of inhabited worlds. Any finite number divided by infinity is as near to nothing as makes no odds, so the average population of all the planets in the Universe can be said to be zero. From this it follows that the population of the whole Universe is also zero, and that any people you may meet from time to time are merely the products of a deranged imagination.'
    },
    {
        title: 'Quote 4',
        content: 'There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.'
    }
]

tabContentProps.forEach((item, index) => new TabItemMarkup(index, item));



links = document.querySelectorAll('.tabs-link');

links.forEach(link => new TabLink(link));



