frappe.listview_settings['Sales Order'].button = {
    show(doc) {
        return true;
    },
    get_label() {
        return `<i class="fa fa-eye"></i> `; // Icon added to the label
    },
    get_description(doc) {
        return __('Show Preview');
    },
    action(doc) {
        console.log(doc);
        let dialog = new frappe.ui.Dialog({
            // title: __(doc.name),
            fields: [
            
                {'fieldname': 'name', 'fieldtype': 'Data', 'label': 'ID', 'default': doc.name, "read_only": 1},
                {'fieldname': 'order_type', 'fieldtype': 'Select', 'label': 'Order Type', 'default': doc.order_type, "read_only": 1},
                
            ]
        });
        dialog.show();
    }
}
