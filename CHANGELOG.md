# v0.6.0
## Makes icons current color, aligns small icons with text

The `.tw-icon` will now by default be current color so it's easily changeable
by giving utility classes to parents, f.e. `.text-info` in Bootstrap.

The `.tw-icon-sm` now has a `-2px` margin to align it nicely with body text.

# v0.5.0
## Adds entry point for module-based environments, adds README, fixes `tw-icon-xl` and `tw-icon-xxl`

You can now
```js
import { iconSprite } from '@transferwise/icons';
```

Also, `.tw-icon-xl` is now `40px` and `.tw-icon-xxl` is now `48px`.

# v0.4.0
## Exposes SVG string as an UMD script

Change introduced here:
https://github.com/transferwise/create-svg-icon-sprite/releases/tag/v0.2.0

# v0.3.1
## Use separated `create-svg-icon-sprite` package

The https://github.com/transferwise/create-svg-icon-sprite package was separated
to simplify this repository for designers and to allow other people/companies to use the same process.

# v0.3.0
## Initial set of icons

* ach
* active-card
* activity
* add-profile
* alert-circle
* alert
* atm
* balance
* bank
* barcode
* batch
* bin
* book
* briefcase
* camera
* card-back
* card-front
* chat
* chip-pin
* close-circle
* close
* coins
* collapse
* comments
* contactless
* convert
* cs
* document
* documents
* down-arrow
* down
* download
* drivers-licence
* e-comm
* edit
* email
* emoji
* exchange-rate
* exchange
* expand
* eye-off
* eye-on
* facebook-2
* facebook
* fast-flag
* feedback
* fingerprint
* globe
* google
* graph
* help-circle
* help
* home
* id
* inactive-card
* invite
* klarna
* left-arrow
* left
* lightning
* link
* lock
* login
* logout
* menu
* mobile
* money
* multi-currency
* new
* notification-active
* notification
* passport
* pending-circle
* pending
* phone
* picture
* pips
* profile
* receipt
* receive
* recipients
* refresh
* remove-profile
* right-arrow
* right
* search
* send
* settings
* star
* tick-circle
* tick
* top-up
* transfer
* twitter
* two-step
* unlock
* up-arrow
* up
* upload
* verified
* whatsapp

# v0.2.1
## Fix build and edit demo style

Previously, any file (even `.DS_Store`, f.e.) resulted in an entry in the icons demo.
We now filter to `.svg` files only.

The demo also now has a blue period in the title, which, by the way, is now sentence-case.

# v0.2.0
## Initial release