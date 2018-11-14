import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar.jsx'
import TableIssue from './components/tableDetailIssue.jsx'


import { Tabs, Tab } from 'react-bootstrap'
import './styles/git_stylesheet.css'
import './styles/git_stylesheet2.css'
import { Link, Switch, Route } from 'react-router-dom'


import Issue from './issue';

class DetailIssue extends Component {

  
  render() {

    let issue = new Issue("23432", "Sheltine", "2 days", "Rien ne fonctionne, c'est un scandale", "2");

    
    return (
    
      <div>
        <header>
          
        </header>
        <NavBar/>
        
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Code"/>
        <Tab eventKey={2} title="Issues">
        <div class="container new-discussion-timeline experiment-repo-nav  ">
        <div class="repository-content ">
          <div class="issues-listing js-check-all-container">
              <div id="show_issue" class="js-issues-results">
                <div jclass="gh-header js-details-container Details js-socket-channel js-updatable-content issue">
                <div class="gh-header-show ">
                    <div class="gh-header-actions">
                        <a class="btn btn-sm btn-primary float-right">New issue</a>
                    </div>
                    <h1 class="gh-header-title">
                        <span class="js-issue-title">
                            {issue.title} 
                        </span>
                        <span class="gh-header-number">
                             #{issue.id}
                        </span>
                    </h1>
                    <Link to='/'>Retour</Link>

                    <TableIssue user={issue.user} time={issue.time} />
                </div>
                    
                        
                </div>
              </div>
            </div>
          </div>
        </div>
          
        </Tab>
        <Tab eventKey={3} title="Pull Requests"/>
        <Tab eventKey={3} title="Projects"/>
        <Tab eventKey={3} title="Insights"/>

      </Tabs>
        
      </div>
    );
  }
}



export default DetailIssue;
