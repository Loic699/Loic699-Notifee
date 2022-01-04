/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import * as Scroll from 'react-scroll';
import { useRoute, useNavigation } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { defaultFormat } from 'moment';

// let Link      = Scroll.Link;
// let Button    = Scroll.Button;
// let Element   = Scroll.Element;
// let Events    = Scroll.Events;
// let scroll    = Scroll.animateScroll;
// let scrollSpy = Scroll.scrollSpy;

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  const isCloseToTop= ({layoutMeasurement, contentOffset, contentSize}) => {
    return contentOffset.y == 0;
 }

export const HeaderLeft = ({}) => {
    // componentDidMount: function() {
    //     Events.scrollEvent.register('begin', function(to, element) {
    //       console.log('begin', arguments);
    //     });
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
        })
      }, [navigation]);
    window.onscroll = function() {
        console.log('scrolling');
    };
    

    return (
        <ScrollView
        onScroll={({nativeEvent}) => {
            if (isCloseToTop(nativeEvent)) {
              navigation.setOptions({
                headerShown : defaultFormat,
              });
            }else navigation.setOptions({
                headerShown : false
            })
          }}
        //   scrollEventThrottle={400}
        // onScroll={()=>console.log('BLIVLI')}
        // style={{marginTop:getStatusBarHeight()}}
        >
            <SafeAreaView>
        <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien eu sapien dictum aliquet. Proin vitae lobortis nisl. Mauris sollicitudin aliquet mauris eu bibendum. Nullam at augue malesuada nibh accumsan iaculis. Aliquam dapibus quis tellus eget volutpat. Phasellus arcu mauris, finibus vel malesuada sed, posuere sed elit. In euismod posuere mi ut luctus. Nam vitae leo in risus commodo pellentesque in sed ex.

Nam scelerisque suscipit arcu, at pellentesque leo scelerisque a. Integer rutrum orci a velit accumsan luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque vel scelerisque quam, id iaculis odio. Suspendisse volutpat vehicula erat, eu consequat lectus mattis et. Donec sed sapien eleifend, accumsan augue fermentum, convallis nisi. Mauris et iaculis justo. Nulla nisl leo, scelerisque a imperdiet sit amet, euismod ut lacus. Integer vitae ipsum enim. Quisque pretium ligula a ullamcorper iaculis. Phasellus dignissim nunc nisi, at semper leo varius sit amet. Proin ante lorem, pharetra eu nisi ac, dapibus auctor mauris. Aenean accumsan gravida tortor, et varius velit convallis a. Suspendisse mattis turpis eget pretium mollis.

Suspendisse accumsan at enim vel congue. Sed non purus euismod, vehicula ante vel, ornare quam. Mauris eleifend convallis risus a accumsan. Maecenas maximus id tortor sit amet egestas. Vestibulum dignissim posuere purus in egestas. Morbi imperdiet dui lectus, sed dignissim ex interdum sit amet. Curabitur at dolor sit amet lorem feugiat congue sit amet vitae libero. Curabitur tincidunt metus eget nulla tincidunt, eu fringilla augue consequat. Mauris a commodo leo, in mattis leo. Ut lacinia tempor elit, eget cursus quam finibus sed.

Etiam convallis libero sit amet leo congue, id sollicitudin ligula auctor. In tristique imperdiet lorem a pretium. Ut sit amet iaculis lorem, id convallis magna. Quisque vel neque vel metus ultrices pharetra. Phasellus in ultrices ex. Donec nec lacus a nulla ullamcorper viverra porta a risus. Suspendisse fermentum, justo id dignissim luctus, nunc felis blandit nisi, in lobortis ante ex et leo. Praesent eget diam volutpat, rhoncus mi aliquam, ullamcorper eros. Vivamus sed vulputate lacus. Nam rhoncus sagittis justo ut fringilla. Proin imperdiet ante urna, nec fringilla felis viverra a. Maecenas interdum metus faucibus finibus cursus.

Phasellus et erat gravida, semper velit vel, posuere orci. Nulla euismod nec ligula non imperdiet. Ut volutpat massa consectetur orci tempor ornare. Aliquam sollicitudin lorem in diam laoreet ultricies. Nulla nec tristique arcu, maximus lobortis enim. Sed eleifend, leo vitae sagittis condimentum, magna orci congue sapien, et molestie dui dolor nec risus. Praesent euismod lacinia vulputate. Maecenas pellentesque nibh sit amet mauris iaculis varius. Quisque id libero lacus. Mauris sed velit ut ex laoreet maximus ut in eros. Nulla id urna fringilla, ullamcorper risus quis, tristique odio. In sed mi quis lectus venenatis consectetur in et nunc. Nulla enim elit, vestibulum pulvinar porta id, viverra eu diam.
Suspendisse accumsan at enim vel congue. Sed non purus euismod, vehicula ante vel, ornare quam. Mauris eleifend convallis risus a accumsan. Maecenas maximus id tortor sit amet egestas. Vestibulum dignissim posuere purus in egestas. Morbi imperdiet dui lectus, sed dignissim ex interdum sit amet. Curabitur at dolor sit amet lorem feugiat congue sit amet vitae libero. Curabitur tincidunt metus eget nulla tincidunt, eu fringilla augue consequat. Mauris a commodo leo, in mattis leo. Ut lacinia tempor elit, eget cursus quam finibus sed.

Etiam convallis libero sit amet leo congue, id sollicitudin ligula auctor. In tristique imperdiet lorem a pretium. Ut sit amet iaculis lorem, id convallis magna. Quisque vel neque vel metus ultrices pharetra. Phasellus in ultrices ex. Donec nec lacus a nulla ullamcorper viverra porta a risus. Suspendisse fermentum, justo id dignissim luctus, nunc felis blandit nisi, in lobortis ante ex et leo. Praesent eget diam volutpat, rhoncus mi aliquam, ullamcorper eros. Vivamus sed vulputate lacus. Nam rhoncus sagittis justo ut fringilla. Proin imperdiet ante urna, nec fringilla felis viverra a. Maecenas interdum metus faucibus finibus cursus.

Phasellus et erat gravida,
Suspendisse accumsan at enim vel congue. Sed non purus euismod, vehicula ante vel, ornare quam. Mauris eleifend convallis risus a accumsan. Maecenas maximus id tortor sit amet egestas. Vestibulum dignissim posuere purus in egestas. Morbi imperdiet dui lectus, sed dignissim ex interdum sit amet. Curabitur at dolor sit amet lorem feugiat congue sit amet vitae libero. Curabitur tincidunt metus eget nulla tincidunt, eu fringilla augue consequat. Mauris a commodo leo, in mattis leo. Ut lacinia tempor elit, eget cursus quam finibus sed.

Etiam convallis libero sit amet leo congue, id sollicitudin ligula auctor. In tristique imperdiet lorem a pretium. Ut sit amet iaculis lorem, id convallis magna. Quisque vel neque vel metus ultrices pharetra. Phasellus in ultrices ex. Donec nec lacus a nulla ullamcorper viverra porta a risus. Suspendisse fermentum, justo id dignissim luctus, nunc felis blandit nisi, in lobortis ante ex et leo. Praesent eget diam volutpat, rhoncus mi aliquam, ullamcorper eros. Vivamus sed vulputate lacus. Nam rhoncus sagittis justo ut fringilla. Proin imperdiet ante urna, nec fringilla felis viverra a. Maecenas interdum metus faucibus finibus cursus.

Phasellus et erat gravida,
Suspendisse accumsan at enim vel congue. Sed non purus euismod, vehicula ante vel, ornare quam. Mauris eleifend convallis risus a accumsan. Maecenas maximus id tortor sit amet egestas. Vestibulum dignissim posuere purus in egestas. Morbi imperdiet dui lectus, sed dignissim ex interdum sit amet. Curabitur at dolor sit amet lorem feugiat congue sit amet vitae libero. Curabitur tincidunt metus eget nulla tincidunt, eu fringilla augue consequat. Mauris a commodo leo, in mattis leo. Ut lacinia tempor elit, eget cursus quam finibus sed.

Etiam convallis libero sit amet leo congue, id sollicitudin ligula auctor. In tristique imperdiet lorem a pretium. Ut sit amet iaculis lorem, id convallis magna. Quisque vel neque vel metus ultrices pharetra. Phasellus in ultrices ex. Donec nec lacus a nulla ullamcorper viverra porta a risus. Suspendisse fermentum, justo id dignissim luctus, nunc felis blandit nisi, in lobortis ante ex et leo. Praesent eget diam volutpat, rhoncus mi aliquam, ullamcorper eros. Vivamus sed vulputate lacus. Nam rhoncus sagittis justo ut fringilla. Proin imperdiet ante urna, nec fringilla felis viverra a. Maecenas interdum metus faucibus finibus cursus.

Phasellus et erat gravida,
        </Text>
        </SafeAreaView>
        </ScrollView>
    );
}


export default {HeaderLeft};