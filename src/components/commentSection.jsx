import React, { Component } from 'react';
import '../styles/git_stylesheet.css'
import '../styles/git_stylesheet2.css'
class CommentSection extends Component{
    render(){
        return(
            <div class="discussion-timeline-actions">
                <div class="timeline-comment-wrapper timeline-new-comment js-comment-container ">
                    <span class="timeline-comment-avatar"><a class="d-inline-block" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=36661459" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Sheltine" aria-describedby="hovercard-aria-description"><img class="avatar" src="https://avatars1.githubusercontent.com/u/36661459?s=88&amp;v=4" alt="@Sheltine" width="44" height="44"/></a></span>
                
                    <form class="js-new-comment-form js-needs-timeline-marker-header">
                        <div class="timeline-comment">
                            <div class="js-suggester-container js-previewable-comment-form previewable-comment-form write-selected">
                                <div class="comment-form-head tabnav">
                                    <markdown-toolbar class="toolbar-commenting">
                                        <div class="toolbar-group">
                                            <md-header tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Add header text" data-ga-click="Markdown Toolbar, click, header" role="button">
                                                <svg class="octicon octicon-text-size" viewBox="0 0 18 16" version="1.1" width="18" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.62 9.08L12.1 3.66h-.06l-1.5 5.42h3.08zM5.7 10.13S4.68 6.52 4.53 6.02h-.08l-1.13 4.11H5.7zM17.31 14h-2.25l-.95-3.25h-4.07L9.09 14H6.84l-.69-2.33H2.87L2.17 14H0l3.3-9.59h2.5l2.17 6.34L10.86 2h2.52l3.94 12h-.01z"></path></svg>
                                            </md-header>
                                            <md-bold tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Add bold text <ctrl+b>" data-ga-click="Markdown Toolbar, click, bold" hotkey="b" role="button">
                                                <svg class="octicon octicon-bold" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1 2h3.83c2.48 0 4.3.75 4.3 2.95 0 1.14-.63 2.23-1.67 2.61v.06c1.33.3 2.3 1.23 2.3 2.86 0 2.39-1.97 3.52-4.61 3.52H1V2zm3.66 4.95c1.67 0 2.38-.66 2.38-1.69 0-1.17-.78-1.61-2.34-1.61H3.13v3.3h1.53zm.27 5.39c1.77 0 2.75-.64 2.75-1.98 0-1.27-.95-1.81-2.75-1.81h-1.8v3.8h1.8v-.01z"></path></svg>
                                            </md-bold>
                                            <md-italic tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Add italic text <ctrl+i>" data-ga-click="Markdown Toolbar, click, italic" hotkey="i" role="button">
                                                <svg class="octicon octicon-italic" viewBox="0 0 6 16" version="1.1" width="6" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.81 5h1.98L3 14H1l1.81-9zm.36-2.7c0-.7.58-1.3 1.33-1.3.56 0 1.13.38 1.13 1.03 0 .75-.59 1.3-1.33 1.3-.58 0-1.13-.38-1.13-1.03z"></path></svg>
                                            </md-italic>
                                        </div>
                                        <div class="toolbar-group">
                                            <md-quote tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Insert a quote" data-ga-click="Markdown Toolbar, click, quote" role="button">
                                            <svg class="octicon octicon-quote" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6.16 3.5C3.73 5.06 2.55 6.67 2.55 9.36c.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.9 0-2.99-1.52-2.99-4.25 0-3.8 1.75-6.53 5.02-8.42L6.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.89 0-2.98-1.52-2.98-4.25 0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"></path></svg>
                                            </md-quote>

                                            <md-code tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Insert code" data-ga-click="Markdown Toolbar, click, code" role="button">
                                            <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
                                            </md-code>

                                            <md-link tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Add a link <ctrl+k>" data-ga-click="Markdown Toolbar, click, link" hotkey="k" role="button">
                                            <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
                                            </md-link>
                                        </div>
                                        <div class="toolbar-group">
                                            <md-mention tabindex="-1" class="toolbar-item tooltipped tooltipped-nw" aria-label="Directly mention a user or team" data-ga-click="Markdown Toolbar, click, mention" role="button">
                                            <svg class="octicon octicon-mention" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6.58 15c1.25 0 2.52-.31 3.56-.94l-.42-.94c-.84.52-1.89.83-3.03.83-3.23 0-5.64-2.08-5.64-5.72 0-4.37 3.23-7.18 6.58-7.18 3.45 0 5.22 2.19 5.22 5.2 0 2.39-1.34 3.86-2.5 3.86-1.05 0-1.36-.73-1.05-2.19l.73-3.75H8.98l-.11.72c-.41-.63-.94-.83-1.56-.83-2.19 0-3.66 2.39-3.66 4.38 0 1.67.94 2.61 2.3 2.61.84 0 1.67-.53 2.3-1.25.11.94.94 1.45 1.98 1.45 1.67 0 3.77-1.67 3.77-5C14 2.61 11.59 0 7.83 0 3.66 0 0 3.33 0 8.33 0 12.71 2.92 15 6.58 15zm-.31-5c-.73 0-1.36-.52-1.36-1.67 0-1.45.94-3.22 2.41-3.22.52 0 .84.2 1.25.83l-.52 3.02c-.63.73-1.25 1.05-1.78 1.05V10z"></path></svg>
                                            </md-mention>

                                            <md-ref tabindex="-1" class="toolbar-item tooltipped tooltipped-nw" aria-label="Reference an issue or pull request" data-ga-click="Markdown Toolbar, click, reference" role="button">
                                            <svg class="octicon octicon-bookmark" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z"></path></svg>
                                            </md-ref>

                                            <svg class="octicon octicon-reply" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6 3.5c3.92.44 8 3.125 8 10-2.312-5.062-4.75-6-8-6V11L.5 5.5 6 0v3.5z"></path></svg>
                                        </div>
                                    </markdown-toolbar>

                                    <nav class="tabnav-tabs">
                                        <button class="btn-link tabnav-tab write-tab js-write-tab selected">Write</button>
                                        <button class="btn-link tabnav-tab preview-tab js-preview-tab">Preview</button>
                                    </nav>
                                </div>
                                <file-attachment class="js-upload-markdown-image is-default">
                                    <div class="write-content js-write-bucket upload-enabled">
                                        <textarea id="new_comment_field" class="form-control input-contrast comment-form-textarea js-comment-field js-paste-markdown js-task-list-field js-quick-submit js-size-to-fit js-suggester-field js-session-resumable js-saved-reply-shortcut-comment-field" placeholder="Leave a comment"/>
                                        <p class="drag-and-drop position-relative">Attach files to your comment</p>
                                    </div>
                                </file-attachment>
                                <div class="float-left">
                                    <a class="tabnav-extra">
                                    <svg class="octicon octicon-markdown v-align-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg>
                                    Styling with Markdown is supported
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>


                </div>
            </div>

        )
    }
}

export default CommentSection