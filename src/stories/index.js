import React from 'react';
import IssueElement from "../components/divIssueWithoutRouting.jsx"
import Toolbar from "../components/toolbar.jsx"
import Navbar from "../components/navbar.jsx"
import IssueTable from "../components/tableDetailIssue.jsx"
import CommentSection from "../components/commentSection.jsx"
import Dropdown from "../components/dropdownFilter.jsx"



import { storiesOf } from '@storybook/react';

  storiesOf("IssueElement", module)
  .add("default", () => <IssueElement name="Johanna" id="2510" title="Ceci est un grave problème" time="1 day" comments="3" />);

  storiesOf("Toolbar", module)
  .add("default", () => <Toolbar />);

  storiesOf("Navbar", module)
  .add("default", () => <Navbar />);

  storiesOf("IssueTable", module)
  .add("default", () => <IssueTable user="Jo" time="a year" id="9869" title="coneciuwbuc" comment="3" />);

  storiesOf("CommentSection", module)
  .add("default", () => <CommentSection />);

  storiesOf("Dropdown", module)
  .add("default", () => <Dropdown />);

