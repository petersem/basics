// import ShowcaseModel from "../models/ShowcaseModel.mjs"


/**
 * Manages all interractions for items
 */
export class ItemController {

    static list(req, res) {
        let items = [{id: 1, item: "foo"},{id: 2, item: "bar"}];

        res.status(200);
        res.setHeader('Content-Type', 'application/json');
        res.json({ message: "records retrieved", data: items });
    }

    static readItem(req, res) {
        let items = [{id: 1, item: "foo"},{id: 2, item: "bar"}];
        const item = items.filter(i => i.id == req.params.itemId);
        // check if item record found
        if (item.length == 0) {
            res.status(404);
            res.setHeader('Content-Type', 'application/json');
            res.json({ message: "record not found", data: req.params.itemId });
        } else {
            res.status(200);
            res.setHeader('Content-Type', 'application/json');
            res.json({ message: "record retrieved", data: item });
        }
    }
}