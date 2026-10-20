import React, { useEffect, useState } from 'react'
import './CookieBanner.css'

const STORAGE_KEY = 'chukone-cookie-consent'
const OPEN_EVENT = 'chukone:open-cookie-settings'

// Read the saved choice (null if the visitor hasn't chosen yet)
export const getCookieConsent = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw ? JSON.parse(raw) : null
    } catch {
        return null
    }
}

// Call from anywhere (e.g. the footer) to reopen the preferences
export const openCookieSettings = () => {
    window.dispatchEvent(new Event(OPEN_EVENT))
}

const saveConsent = (analytics) => {
    const consent = { essential: true, analytics, date: new Date().toISOString() }
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
    } catch {
        // Storage blocked (private mode etc.) — the choice still applies for this visit
    }
    window.dispatchEvent(new CustomEvent('chukone:cookie-consent', { detail: consent }))
}

export const CookieBanner = () => {
    const [visible, setVisible] = useState(false)
    const [showPrefs, setShowPrefs] = useState(false)
    const [analytics, setAnalytics] = useState(false)

    useEffect(() => {
        const saved = getCookieConsent()
        if (saved) {
            setAnalytics(Boolean(saved.analytics))
        } else {
            // Small delay so the banner doesn't compete with the page loading in
            const t = setTimeout(() => setVisible(true), 900)
            return () => clearTimeout(t)
        }
    }, [])

    useEffect(() => {
        const open = () => {
            const saved = getCookieConsent()
            setAnalytics(Boolean(saved?.analytics))
            setShowPrefs(true)
            setVisible(true)
        }
        window.addEventListener(OPEN_EVENT, open)
        return () => window.removeEventListener(OPEN_EVENT, open)
    }, [])

    const close = (analyticsChoice) => {
        saveConsent(analyticsChoice)
        setAnalytics(analyticsChoice)
        setShowPrefs(false)
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div className='cookie' role='dialog' aria-modal='false' aria-labelledby='cookie-title' aria-describedby='cookie-desc'>
            <div className='cookie__text'>
                <h2 id='cookie-title' className='cookie__title'>We use cookies</h2>
                <p id='cookie-desc' className='cookie__desc'>
                    Essential cookies keep this site working. With your permission we’d also use analytics
                    cookies to understand how visitors use it.
                </p>
            </div>

            {showPrefs && (
                <div className='cookie__prefs'>
                    <div className='cookie__pref'>
                        <span className='cookie__pref-text'>
                            <span className='cookie__pref-name'>Essential</span>
                            <span className='cookie__pref-desc'>Always on</span>
                        </span>
                        <span className='cookie__required'>Required</span>
                    </div>
                    <label className='cookie__pref cookie__pref--toggle'>
                        <span className='cookie__pref-text'>
                            <span className='cookie__pref-name'>Analytics</span>
                            <span className='cookie__pref-desc'>Anonymous visit statistics</span>
                        </span>
                        <input
                            type='checkbox'
                            className='cookie__switch'
                            checked={analytics}
                            onChange={(e) => setAnalytics(e.target.checked)}
                        />
                    </label>
                </div>
            )}

            <div className='cookie__actions'>
                <button type='button' className='btn btn--solid btn--sm' onClick={() => close(true)}>
                    Accept all
                </button>
                <button type='button' className='btn btn--ghost btn--sm' onClick={() => close(false)}>
                    Reject
                </button>
                {showPrefs ? (
                    <button type='button' className='btn btn--ghost btn--sm cookie__wide' onClick={() => close(analytics)}>
                        Save my choices
                    </button>
                ) : (
                    <button type='button' className='cookie__link cookie__wide' onClick={() => setShowPrefs(true)}>
                        Manage preferences
                    </button>
                )}
            </div>
        </div>
    )
}
