package org.vaadin.example;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.component.page.Page;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.dependency.JsModule;

@Route("") // Main page
@JsModule("./draggable.js") // Load the JavaScript file
public class MainView extends VerticalLayout {

    public MainView() {
        // Create a button
        Button draggableButton = new Button("Drag Me");

        // Call JavaScript function to make the button draggable
        UI.getCurrent().getPage().executeJs("makeDraggable($0)", draggableButton);

        // Add button to the layout
        add(draggableButton);
    }
}
