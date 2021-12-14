import React from 'react';
import {View, Text} from 'react-native';

data = (
  //<View>
  <View class="navbar-fixed">
    <View class="red">
      <View class="container">
        <View class="nav-wrapper">
          <Text href="/" class="brand-logo">
            SSR News
          </Text>
          <Text href="#" class="sidenav-trigger right">
            {/* <i class="material-icons">menu</i> */}
          </Text>
          <View class="sidenav-overlay" style=""></View>
          <Text id="slide-out" class="sidenav" style="">
            <Text>
              <Text class="subheader">Menu</Text>
            </Text>
            <Text>
              <View class="divider"></View>
            </Text>
            <Text>
              <Text class="item" href="/">
                Home
              </Text>
            </Text>
            <Text>
              <Text class="item" href="/articles/techradar">
                Tech Radar
              </Text>
            </Text>
            <Text>
              <Text class="item" href="/articles/mashable">
                Mashable
              </Text>
            </Text>
            <Text>
              <Text class="item" href="/articles/the-verge">
                The Verge
              </Text>
            </Text>
            <Text>
              <Text class="item" href="/articles/the-next-web">
                TNW
              </Text>
            </Text>
            <Text>
              <Text class="item" href="/articles/wired">
                Wired
              </Text>
            </Text>
            <Text>
              <Text class="item" href="/articles/recode">
                Recode
              </Text>
            </Text>
          </Text>
          <Text id="nav" class="right hide-on-med-and-down">
            <Text>
              <Text class="item" href="/articles/techradar">
                Tech Radar
              </Text>
            </Text>
            <Text>
              <Text class="item" href="/articles/mashable">
                Mashable
              </Text>
            </Text>
            <Text>
              <Text class="item" href="/articles/the-verge">
                The Verge
              </Text>
            </Text>
            <Text>
              <Text class="item" href="/articles/the-next-web">
                TNW
              </Text>
            </Text>
            <Text>
              <Text class="item" href="/articles/wired">
                Wired
              </Text>
            </Text>
            <Text>
              <Text class="item" href="/articles/recode">
                Recode
              </Text>
            </Text>
          </Text>
        </View>
      </View>
    </View>
  </View>

  // <View class="container">
  // <View>
  // 	 <View class="row">
  // 			<View class="section">
  // 				 <Text>Popular Articles</Text>
  // 			</View>
  // 			<View class="divider"></View>
  // 			<View class="section">
  // 				 <View class="row">
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><img alt="Woman falls overboard from Carnival cruise ship off Mexico - NBC News" src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-12/211211-carnival-miracle-cc-0839p-301b29.jpg"></View>
  // 									<View class="card-content"><Text class="card-title">Woman falls overboard from Carnival cruise ship off Mexico - NBC News</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><img alt="'Black Panther' Fans Suggest Recasting Chadwick Amid Letitia Rumors - TMZ" src="https://imagez.tmz.com/image/e8/16by9/2021/12/12/e8ff416ecd66487da528fff6ce6a71a1_xl.jpg"></View>
  // 									<View class="card-content"><Text class="card-title">'Black Panther' Fans Suggest Recasting Chadwick Amid Letitia Rumors - TMZ</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><img alt="Israeli Leader Travels to U.A.E., Showcasing Deepening Ties - The New York Times" src="https://static01.nyt.com/images/2021/12/12/world/12Israel/12Israel-facebookJumbo.jpg"></View>
  // 									<View class="card-content"><Text class="card-title">Israeli Leader Travels to U.A.E., Showcasing Deepening Ties - The New York Times</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><img alt="Deadly tornado updates: Search for survivors continues after devastating storms - ABC News" src="https://s.abcnews.com/images/US/tornado-destruction-kentucky-usa-jt-211212_1639318456696_hpMain_16x9_992.jpg"></View>
  // 									<View class="card-content"><Text class="card-title">Deadly tornado updates: Search for survivors continues after devastating storms - ABC News</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><img alt="Boris Johnson urges boosters as U.K. faces 'tidal wave' of omicron infections - NBC News" src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-12/211212-england-booster-jm-1528-218c7e.jpg"></View>
  // 									<View class="card-content"><Text class="card-title">Boris Johnson urges boosters as U.K. faces 'tidal wave' of omicron infections - NBC News</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><img alt="California wants to copy Texas abortion tactics for gun control - Vox.com" src="https://cdn.vox-cdn.com/thumbor/18pm1yDUVENYUAHhdArLgfBI8qc=/0x0:5472x2865/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23082897/1340600714.jpg"></View>
  // 									<View class="card-content"><Text class="card-title">California wants to copy Texas abortion tactics for gun control - Vox.com</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><Text class="" style="display:inline-block;height:0;width:0"></Text></View>
  // 									<View class="card-content"><Text class="card-title">Peloton Resurrects Mr. Big for Holiday Ad: 'He's Alive!' - The Daily Beast</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><Text class="" style="display:inline-block;height:0;width:0"></Text></View>
  // 									<View class="card-content"><Text class="card-title">Sixty-nine percent of Americans disapprove of Biden's handling of inflation: poll - The Hill</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><Text class="" style="display:inline-block;height:0;width:0"></Text></View>
  // 									<View class="card-content"><Text class="card-title">Pelosi will stay around to lead House Democrats through the next election -- and perhaps beyond - CNN</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><Text class="" style="display:inline-block;height:0;width:0"></Text></View>
  // 									<View class="card-content"><Text class="card-title">NFL Week 14 scores, highlights, updates, schedule: Taysom Hill caps Saints' win over Jets with long TD run - CBS Sports</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><Text class="" style="display:inline-block;height:0;width:0"></Text></View>
  // 									<View class="card-content"><Text class="card-title">Peyton Manning, Broncos honor Demaryius Thomas with pregame tribute - New York Post </Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><Text class="" style="display:inline-block;height:0;width:0"></Text></View>
  // 									<View class="card-content"><Text class="card-title">Baltimore Ravens lose Lamar Jackson to injury as Browns hold on for victory - The Guardian</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><Text class="" style="display:inline-block;height:0;width:0"></Text></View>
  // 									<View class="card-content"><Text class="card-title">Billie Eilish and Kate McKinnon Star in SNL’s Creepiest Christmas Ad - Vulture</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><Text class="" style="display:inline-block;height:0;width:0"></Text></View>
  // 									<View class="card-content"><Text class="card-title">South African President Cyril Ramaphosa tests positive for Covid-19 with mild symptoms - CNN</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><Text class="" style="display:inline-block;height:0;width:0"></Text></View>
  // 									<View class="card-content"><Text class="card-title">Kim Cattrall reacts to fan tweets about her ‘And Just Like That’ absence - Page Six</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><Text class="" style="display:inline-block;height:0;width:0"></Text></View>
  // 									<View class="card-content"><Text class="card-title">Live updates: Bucs 27, Bills 27 (fourth quarter) - Tampa Bay Times</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><Text class="" style="display:inline-block;height:0;width:0"></Text></View>
  // 									<View class="card-content"><Text class="card-title">Spielberg’s ‘West Side Story’ Opens to Tepid Box Office Receipts - The New York Times</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><Text class="" style="display:inline-block;height:0;width:0"></Text></View>
  // 									<View class="card-content"><Text class="card-title">Alibaba fires female employee who accused supervisor of rape | TheHill - The Hill</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><Text class="" style="display:inline-block;height:0;width:0"></Text></View>
  // 									<View class="card-content"><Text class="card-title">Here's a way to find out if 911 calls on your Android phone might fail - Android Police</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 						<View class="col s12 m6 l6 xl4">
  // 							 <View class="card large">
  // 									<View class="card-image"><Text class="" style="display:inline-block;height:0;width:0"></Text></View>
  // 									<View class="card-content"><Text class="card-title">Galaxy S22 Ultra/Note apparently spotted on Samsung's website and Geekbench - PhoneArena</Text></View>
  // 									<View class="card-action"><Text href="#">Read More</Text></View>
  // 							 </View>
  // 						</View>
  // 				 </View>
  // 			</View>
  // 	 </View>
  // </View>
  // 	</View>
  // 	</View>`
);

export default data;
