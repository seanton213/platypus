import { inflate } from "./../src/utils/utils";


test("inflates list of objects into map of objects", () => {
    const list = [{id: 1, name: "Sean"}, {id: 2, name: "Olson"}];
    const result = inflate(list, "id");

    expect(result[1].name).toEqual("Sean");
    expect((result[2].name)).toEqual("Olson");
    expect(Object.keys(result).length).toEqual(2);
})


test("inflates list of objects into map of objects", () => {
    const list = [];
    const result = inflate(list, "id");

    expect(result).toEqual({});
    expect(Object.keys(result).length).toEqual(0);
});