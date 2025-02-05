import React, { useEffect, useRef, useState } from 'react'
import './Toolbar.css'
import { DarkModeToggle } from '../atoms/DarkModeButton.jsx'
import LanguageIcon from '../atoms/Icons/LanguageIcon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../../../store/accountSlice.js'

const Toolbar = () => {
  const [isShopDropdownOpen, setShopDropdownOpen] = useState(false)
  const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false)
  const [isAccountListOpen, setAccountListOpen] = useState(false)

  const dispatch = useDispatch()
  const accountId = useSelector((store) => store.accountSlice.accountId)

  const shopDropdownRef = useRef(null)
  const accountDropdownRef = useRef(null)

  const handleToggle = () => {
    dispatch(toggle())
    toggleAccountList()
  }

  const toggleShopDropdown = () => {
    setShopDropdownOpen(!isShopDropdownOpen)
    setAccountListOpen(false)
    setAccountDropdownOpen(false)
  }

  const toggleAccountDropdown = () => {
    setAccountDropdownOpen(!isAccountDropdownOpen)
    setShopDropdownOpen(false)
    setAccountListOpen(false)
  }

  const toggleAccountList = () => {
    setAccountListOpen(!isAccountListOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        shopDropdownRef.current &&
        !shopDropdownRef.current.contains(event.target)
      ) {
        setShopDropdownOpen(false)
      }
      if (
        accountDropdownRef.current &&
        !accountDropdownRef.current.contains(event.target)
      ) {
        setAccountDropdownOpen(false)
        setAccountListOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="toolbar">
      <div className="toolbar-content-left">
        <DarkModeToggle />
        <img src={LanguageIcon} alt="Sun Icon" width="30" height="30" />
        En
      </div>

      <div className="toolbar-content-right">
        <div className="divider" />
        <div
          className="shop-dropdown"
          onClick={toggleShopDropdown}
          ref={shopDropdownRef}
        >
          Shop
          <span className="arrow">▼</span>
          {isShopDropdownOpen && (
            <div className="toolbar-dropdown-menu">
              <div className="toolbar-dropdown-item">Shop 1</div>
              <div className="toolbar-dropdown-item">Shop 2</div>
              <div className="toolbar-dropdown-item">Shop 3</div>
            </div>
          )}
        </div>
        <div className="divider" />
        <div
          className="account-dropdown"
          onClick={toggleAccountDropdown}
          ref={accountDropdownRef}
        >
          Username{accountId}
          <span className="arrow">▼</span>
          {isAccountDropdownOpen && (
            <div className="toolbar-dropdown-menu">
              <div className="toolbar-dropdown-item">Settings</div>
              <div className="toolbar-dropdown-item">Help</div>
              <div
                className="toolbar-dropdown-item"
                onClick={(e) => {
                  e.stopPropagation() // Prevent the event from bubbling up to the parent
                  toggleAccountDropdown()
                  toggleAccountList()
                }}
              >
                Switch account
              </div>
              <div className="toolbar-dropdown-item">Log out</div>
            </div>
          )}
          {isAccountListOpen && accountId == '1' && (
            <div className="toolbar-dropdown-menu">
              <div className="toolbar-dropdown-item" onClick={handleToggle}>
                Account2
              </div>
            </div>
          )}
          {isAccountListOpen && accountId == '2' && (
            <div className="toolbar-dropdown-menu">
              <div className="toolbar-dropdown-item">
                No other accounts logged in
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Toolbar
