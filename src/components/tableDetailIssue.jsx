import React, { Component } from 'react';
import '../styles/git_stylesheet.css'
import '../styles/git_stylesheet2.css'
import CommentSection from './commentSection';


class TableIssue extends Component{
    render(){
        return(
            <div id="discussion_bucket" class="clearfix">



                <div class="discussion-timeline js-quote-selection-container">
                    <div class="js-discussion js-socket-channel">
                        <div class="timeline-comment-wrapper js-comment-container mt-0">
                            <div class="avatar-parent-child timeline-comment-avatar">
                                <a class="d-inline-block" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=36661459" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Sheltine" aria-describedby="hovercard-aria-description"><img class="avatar" src="https://avatars1.githubusercontent.com/u/36661459?s=88&amp;v=4" alt="@Sheltine" width="44" height="44"/></a>
                            </div>
                            <div class="timeline-comment-group js-minimizable-comment-group js-targetable-comment">
                                <div class="unminimized-comment comment previewable-edit js-comment js-task-list-container timeline-comment reorderable-task-lists">
                                    <div class="timeline-comment-header clearfix">
                                        <div class="timeline-comment-actions">
                                        <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"></path></svg>
                                        </div>
                                        <h3 class="timeline-comment-header-text f5 text-normal">
                                        <strong class="css-truncate">{this.props.user} </strong>
                                        commented {this.props.time} ago
                                        </h3>
                                    </div>
                                    <div class="edit-comment-hide">
                                        <table class="d-block">
                                            <tbody class="d-block">
                                                <tr class="d-block">
                                                    <td class="d-block comment-body markdown-body  js-comment-body">
                                                    C'est  vraiment pas bien
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CommentSection />
                </div>
            </div>
        )
    }
}

export default TableIssue