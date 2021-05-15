import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreListItem from "../../components/genre-list-item";

configure({ adapter: new Adapter() });

const genre = {
  name: "Scary Cult Movies from the 1980s",
  url: "https://netflix.com/browse/genre/2",
};

describe("<GenreListItem />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<GenreListItem genre={genre} />);
  });

  it("should render correct genre name", () => {
    expect(wrapper.find("a").text()).toBe(genre.name);
  });

  it("should render corrent genre link", () => {
    expect(wrapper.find("a").props().href).toBe(genre.url);
  });
});
