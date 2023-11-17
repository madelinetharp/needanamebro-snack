import React, {useState} from 'react';
import {Text} from 'react-native';

enum Page {
  Home,
  Calendar,
  Ingredients,
  Shopping,
  Profile,
}

export const NavigationController = () => {
  const [page, setPage] = useState(Page.Home);

  switch (page) {
    case Page.Ingredients:
    case Page.Calendar:
    case Page.Shopping:
    case Page.Profile:
    case Page.Home:
    default:
      return <Text>Stuff written on page</Text>;
  }
};
