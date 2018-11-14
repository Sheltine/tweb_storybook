import React, { Component } from 'react';
import '../styles/git_stylesheet.css'
import '../styles/git_stylesheet2.css'
class Toolbar extends Component{
    render(){
        return(
            <div id="js-issues-toolbar" class="table-list-header">
                <div class="table-list-filters">
                    <div class="table-list-header-toggle states float-left pl-3">
                        <a class="btn-link selected">
                        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
                            640 Open
                        </a>
                        <a class="btn-link ">
                        <svg class="octicon octicon-check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                            13,427 Closed
                        </a>
                    </div>
                    <div class="table-list-header-toggle float-right">
                    </div>
                </div>
            </div>
        )
    }
}

export default Toolbar