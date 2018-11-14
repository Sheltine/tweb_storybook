import React, { Component } from 'react';
import NavBar from './components/navbar.jsx'
import IssueElement from './components/divIssue.jsx'
import { Tabs, Tab } from 'react-bootstrap'
import './styles/git_stylesheet.css'
import './styles/git_stylesheet2.css'
import Issue from './issue';
import Toolbar from './components/toolbar.jsx';
import { Link, Switch, Route } from 'react-router-dom'
import Routing from "./Routing"


class App extends Component {



  
  render() {

    let issues = [];
    issues.push(new Issue("23432", "Sheltine", "2 days", "Échec dans les choix de vie", "2"));
    issues.push(new Issue("2342", "Nyahon", "3 days", "Extinction de motivation", "2"));
    issues.push(new Issue("545645", "coucou", "1 week", "Tout n'est qu'erreur", "2"));
    issues.push(new Issue("232345", "lolol", "2 minutes", "J'aime le pain", "4"));
    issues.push(new Issue("666", "Satan", "2 years", "Ajout de bugs incompréhensibles", "1"));


    
    return (
    

      <div>
        <header>

        </header>
        <body className="logged-in env-production">
        <NavBar/>
        
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Code"/>
        <Tab eventKey={2} title="Issues">
        <div className="application-main ">
        
        <div className="container new-discussion-timeline experiment-repo-nav  ">
          <div className="repository-content ">
            <div className="issues-listing js-check-all-container">
            <Toolbar />
            <Link to='/details'>Details</Link>
                <div className="border-right border-bottom border-left" aria-label="Issues" role="group">
                  <div className="js-navigation-container js-active-navigation-container">
                        {
                          issues.map((issue) => (
                            <IssueElement id={issue.id} user={issue.user} title={issue.title} time={issue.time} comments={issue.comments}/>
                          ))
                        }
                        
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
        </body>
      </div>
    );
  }
}



export default App;
