import React, { Component } from 'react';

import '../styles/git_stylesheet.css'
import '../styles/git_stylesheet2.css'
import { Glyphicon } from 'react-bootstrap'
import { Link, Switch, Route } from 'react-router-dom'


class IssueElement extends Component{
    render() {
       
        return(
            <div>
            <div class="Box-row Box-row--focus-gray p-0 js-navigation-item js-issue-row read">
                    <div class="d-table table-fixed width-full Box-row--drag-hide position-relative border-right border-bottom border-left">
                      <div class="float-left pt-2 pl-3">
                      <span class="tooltipped tooltipped-n" aria-label="Open issue">
                            <svg class="octicon octicon-issue-opened open" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
                        </span>
                        </div>
                        <div class="float-left col-9 lh-condensed p-2">
                        
                            <a class="link-gray-dark v-align-middle no-underline h4 js-navigation-open">
                            <Link to='/details'>{this.props.title}</Link>
                            </a>
                            <div class="mt-1 text-small text-gray">
                                #{this.props.id} opened {this.props.time} ago by {this.props.user}
                            </div>
                      </div>
                      <div class="pull-right col-2">
                           {this.props.comments} <Glyphicon glyph="list-alt"/>
                      </div>
                    </div>
                </div>
               </div>
        )
    }
}

export default IssueElement