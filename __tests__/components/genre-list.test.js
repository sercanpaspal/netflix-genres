import React from "react";
import GenreList from "../../components/genre-list";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { fireEvent } from "@testing-library/dom";

configure({ adapter: new Adapter() });

const genres = [
  {
    name: "Scary Cult Movies from the 1980s",
    url: "https://netflix.com/browse/genre/2",
  },
];

describe("<GenreList />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<GenreList genres={genres} />);
  });

  it("should render correct genre count", () => {
    expect(wrapper.find("h2").text()).toContain(`(${genres.length})`);
  });
});
