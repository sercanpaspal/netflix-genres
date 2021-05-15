import React from "react";
import TagList from "../../components/tag-list";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const tags = [{ name: "Aksiyon", disabled: true }];

describe("<TagList />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TagList tags={tags} />);
  });

  it("should render correct tag count", () => {
    expect(wrapper.find("h2").text()).toContain(`(${tags.length})`);
  });
});
