# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Index"
      id: "index"
      location: "mainfeed#index" # Supersonic module#view type navigation
    }
    {
      title: "Internet"
      id: "internet"
      location: "http://google.com" # URLs are supported!
    }
  ]

  # rootView:
  #   location: "example#getting-started"

  preloads: [
  ]

  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "example#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  # initialView:
  #  id: "initialView"
  #  location: "login#index"
