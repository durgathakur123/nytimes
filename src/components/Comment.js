import React from 'react'

function Comment() {
    return (
        <div className={'commentWrapper mt-5'}>
        <h6 className={'title border-1'}>Comments</h6>
        <div>
            <div className={'comment py-3'}>
                <img src={'user.png'} className={'circle icon-left'} alt='user' />
                <div className={'commentContent'}>
                    <p className={'titleText'}>Neil</p>
                    <p className={'commentText'}>Why does it’s eye look so Human?</p>
                </div>
            </div>
            <div className={'comment py-3'}>
                <img src={'user.png'} className={'circle icon-left'} alt='user' />
                <div className={'commentContent'}>
                    <p className={'titleText'}>Steve</p>
                    <p className={'commentText'}>This article is a wonderful change of pace: a giant squid instead of Donald Trump. What a welcome relief.</p>
                </div>
            </div>
            <div className={'comment py-3'}>
                <img src={'user.png'} className={'circle icon-left'} alt='user' />
                <div className={'commentContent'}>
                    <p className={'titleText'}>Moodbeast</p>
                    <p className={'commentText'}>Why couldn't this a be 20 second video? Man I love the ocean.</p>
                </div>
            </div>
            <div className={'comment py-3'}>
                <img src={'user.png'} className={'circle icon-left'} alt='user' />
                <div className={'commentContent'}>
                    <p className={'titleText'}>Neil</p>
                    <p className={'commentText'}>So genuinely excited it’s Cephalopod week in the NYTimes - my husband’s currently reading « Other Minds » a very readable book examining how Octopus intelligence evolved separately to human intelligence. Can’t wait to see what tomorrow brings.</p>
                </div>
                <div className={'replyCommentWrap'}>
                    <div className={'comment py-3'}>
                        <p className={'titleText'}>Reply</p>
                        <img src={'user.png'} className={'circle icon-left'} alt='user' />
                        <div className={'commentContent'}>
                            <p className={'titleText'}>Helen</p>
                            <p className={'commentText'}>@Helen\nOther Minds - great book!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Comment
