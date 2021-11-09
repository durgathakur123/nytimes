import React from 'react';
function Image(props) {
    return(
        <>
          <div className={'popupGallary'}>
              <img className={ 'closeIcon' } src={'close.png'} alt="close" onClick={props.handleClose}/>
              <div className={'popupGallary_Inner'}>
              {props && props.images &&  Object.values(props.images).map(item=> {
                    return(
                      <div className={'gallaryItem'}>
                        <img src={item} />
                        <div className="imgOverlay">
                          <div className="iconWrapper">
                            <img src={'zoom.png'} alt="zoom" />
                            <img src={'fav.png'} alt="Favorite" />
                            <img src={'share.png'} alt="Share" />
                            <img src={'info.png'} alt="Info" />
                          </div>
                        </div>
                      </div>
                    )
                })
              }</div></div>
        </>
    )
}
export default Image;