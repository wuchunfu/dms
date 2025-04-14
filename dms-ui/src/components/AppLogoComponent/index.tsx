import React from 'react';

const AppsLogo: React.FC<{ width: number; height: number; color: string }> = (props) => {
  const { width, height, color } = props;
  return (
    <svg
      width={width}
      height={height}
      color={color}
      viewBox="0 0 180 180"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs id="defs1" />
      <g id="layer1">
        <path
          id="path30"
          d="m 92.39829,149.52718 c -0.91845,-0.19111 -3.2124,-0.85123 -5.09765,-1.46693 -1.88526,-0.6157 -4.1792,-1.32372 -5.09766,-1.57337 -2.47099,-0.67166 -5.90932,-1.81436 -7.19083,-2.38982 -0.6195,-0.27819 -1.1629,-0.46939 -1.20755,-0.42491 -0.0447,0.0445 0.2146,0.48237 0.57612,0.97307 0.36151,0.4907 0.62225,0.9271 0.57942,0.96978 -0.0428,0.0427 -0.70489,-0.22466 -1.47123,-0.59409 -1.64884,-0.79486 -4.25946,-2.52691 -6.5789,-4.36487 -1.79052,-1.41884 -6.54563,-6.10228 -7.55859,-7.44468 -0.33838,-0.44842 -0.68151,-0.81775 -0.76252,-0.82073 -0.16719,-0.006 -0.0322,1.012 0.32874,2.47921 0.39515,1.60637 1.23581,3.61308 2.26085,5.3968 0.52588,0.91512 0.92683,1.69306 0.89101,1.72876 -0.0843,0.084 -1.25657,-0.8222 -2.79253,-2.15858 -2.4902,-2.16662 -5.95184,-6.39175 -7.59496,-9.27006 -0.47079,-0.8247 -0.91531,-1.50167 -0.98782,-1.50436 -0.0725,-0.003 -0.13505,1.27583 -0.13898,2.84117 l -0.007,2.84607 -0.47626,-0.55413 c -1.41739,-1.64916 -3.18507,-5.32998 -3.97559,-8.27833 -0.21773,-0.81206 -0.44014,-1.40316 -0.49425,-1.31358 -0.19528,0.32332 -0.82774,2.81052 -0.94329,3.70954 -0.065,0.50572 -0.18576,0.9195 -0.26835,0.9195 -0.42398,0 -1.33184,-2.45455 -2.59119,-7.00572 -0.97753,-3.53269 -1.09539,-4.1756 -1.20694,-6.5835 -0.10675,-2.30458 0.10256,-4.2707 0.6752,-6.34217 0.19441,-0.70326 0.32528,-1.36293 0.29082,-1.46593 -0.0345,-0.10301 -0.92269,0.63002 -1.97384,1.62894 l -1.9112,1.81622 0.10844,-1.16713 c 0.11552,-1.24342 0.96718,-3.68383 1.53787,-4.4067 0.5161,-0.65374 0.44082,-0.80431 -0.31475,-0.62948 -1.06199,0.24572 -2.50488,0.20136 -2.50488,-0.077 0,-0.13084 1.72046,-1.81596 3.82324,-3.7447 6.11776,-5.611425 7.38227,-6.786248 7.34935,-6.828107 -0.017,-0.02167 -1.09423,0.496072 -2.39378,1.150536 -2.44631,1.231994 -4.14271,1.778722 -5.51904,1.778722 -0.66114,0 -0.79884,-0.05606 -0.79884,-0.32524 0,-0.178881 1.71436,-2.326572 3.80967,-4.772646 4.3675,-5.09861 7.13654,-8.509146 7.54035,-9.287204 l 0.27963,-0.538783 -0.89295,0.122366 c -1.15947,0.158889 -1.16081,-0.007 -0.0156,-1.938782 0.96985,-1.636025 1.75942,-3.140094 1.75942,-3.351547 0,-0.07545 -1.00854,-0.13718 -2.24121,-0.13718 -2.34327,0 -3.91113,-0.175969 -3.91113,-0.438966 0,-0.08513 0.45483,-0.523754 1.01074,-0.974711 0.55591,-0.450957 1.47434,-1.247352 2.04095,-1.769766 l 1.03021,-0.949843 -1.03847,-1.085931 c -1.13037,-1.182018 -1.71838,-2.043768 -1.90621,-2.793574 -0.13489,-0.538513 -0.11347,-0.551284 0.52126,-0.310836 0.52832,0.200139 0.56288,0.06436 0.11858,-0.465836 l -0.32063,-0.3826 -1.47528,0.511614 c -2.57716,0.89373 -4.44218,0.554364 -5.82974,-1.060799 -2.09701,-2.440991 -1.1966,-6.136891 2.01408,-8.267133 1.97011,-1.307146 6.82306,-4.185918 8.78133,-5.209095 4.30153,-2.247511 8.25172,-3.088173 12.45552,-2.650734 2.85586,0.297175 4.7521,0.841229 8.36946,2.4013 0.13479,0.05813 0.22614,-0.585752 0.29375,-2.070656 0.0932,-2.047095 0.34718,-3.472364 0.61752,-3.465427 0.068,0.0017 0.47953,0.730511 0.91459,1.619482 0.43505,0.888972 1.46111,2.620947 2.28013,3.848834 l 1.48912,2.232523 2.55385,-0.09679 C 88.29,55.40452 90.89565,55.15201 94.94731,54.223568 l 1.05469,-0.241682 0.11543,-2.666881 c 0.12123,-2.800972 0.33914,-4.424501 0.74601,-5.558289 l 0.24412,-0.680276 1.123961,2.346949 1.12396,2.346949 0.58339,-1.180738 c 0.649299,-1.314119 2.581479,-3.710711 4.166199,-5.167577 1.58458,-1.456739 5.8366,-5.562268 10.70742,-10.338555 C 119.49448,28.492363 120.15385,28 121.62017,28 c 1.24291,0 2.26567,1.016257 2.99648,2.97743 0.58209,1.562075 2.1192,8.320629 2.7883,12.260009 0.3417,2.011717 0.28921,8.274772 -0.0865,10.325374 -0.35645,1.945361 -1.33906,4.984441 -2.0129,6.225638 l -0.47541,0.875715 -1.01075,0.05253 c -0.55591,0.02889 -1.01074,-0.0121 -1.01074,-0.09109 0,-0.07899 0.1652,-0.733142 0.36712,-1.45367 0.73689,-2.62958 1.04465,-4.635937 1.15469,-7.527628 0.20019,-5.260601 -0.53233,-11.519368 -1.80714,-15.440674 -1.01653,-3.126817 -2.16225,-3.019473 -5.69123,0.533216 -4.13557,4.163347 -7.54565,9.174129 -8.89887,13.075985 -0.41174,1.1872 -0.48385,1.678969 -0.48686,3.320188 -0.003,1.654364 0.0595,2.086019 0.44241,3.055059 0.24528,0.620668 0.51875,1.152345 0.60773,1.181506 0.089,0.02916 0.3303,-0.715102 0.53629,-1.653916 1.15938,-5.284083 5.08915,-12.575819 9.01908,-16.735013 1.14478,-1.211571 1.98807,-1.80003 2.30226,-1.606556 0.58544,0.360509 1.45944,3.288594 1.76644,5.917967 0.2613,2.237899 0.11633,7.335087 -0.26991,9.490667 -0.15535,0.866958 -0.63065,3.034352 -1.05623,4.816432 -0.42558,1.78208 -0.82778,3.59481 -0.89378,4.028289 -0.066,0.433479 -0.38817,1.721349 -0.71592,2.861935 -0.32774,1.140585 -0.55144,2.145468 -0.4971,2.233073 0.16051,0.258765 1.07357,0.183077 2.09141,-0.173366 1.428,-0.50008 2.78569,-1.478372 4.95832,-3.57275 1.07905,-1.04019 2.00121,-1.827898 2.04925,-1.750463 0.16917,0.272732 -0.2667,2.062087 -0.77367,3.176132 -0.60884,1.337891 -0.62901,1.503118 -0.15248,1.249012 0.19823,-0.105701 0.66742,-0.300111 1.04266,-0.432021 l 0.68225,-0.239838 -0.23863,0.790033 c -0.3212,1.063373 -1.22743,2.541815 -2.24283,3.658991 l -0.83561,0.919356 1.27506,0.785616 c 0.70128,0.43209 1.82877,1.094451 2.50553,1.471914 0.67675,0.377463 1.20292,0.761306 1.16926,0.852984 -0.0879,0.239425 -1.81221,0.608923 -3.48996,0.747861 l -1.44179,0.119398 1.52445,1.663858 c 1.46623,1.600306 1.50636,1.665959 1.05057,1.718865 -0.26063,0.03025 -0.9702,-0.0774 -1.5768,-0.239227 -0.60661,-0.161829 -1.2879,-0.335028 -1.51397,-0.384886 l -0.41105,-0.09065 0.38781,0.767736 c 0.21329,0.422254 0.89265,1.532243 1.50968,2.466641 0.61703,0.934397 1.12187,1.792029 1.12187,1.905848 0,0.140332 -0.22632,0.176697 -0.70312,0.112976 -0.38672,-0.05168 -0.70313,-0.05177 -0.70313,-1.93e-4 0,0.450993 3.54203,4.611597 10.23926,12.027429 1.03931,1.150823 1.88965,2.236454 1.88965,2.412512 0,0.266922 -0.14452,0.320108 -0.86983,0.320108 -1.25535,0 -3.49027,-0.751528 -5.79013,-1.947021 -1.10096,-0.572294 -2.0296,-1.012791 -2.06363,-0.978882 -0.0715,0.0712 6.42241,6.046371 9.46445,8.708491 1.13257,0.99112 2.01779,1.86882 1.96716,1.95044 -0.12449,0.2007 -1.95483,0.18849 -2.67691,-0.0178 -0.31999,-0.0914 -0.55648,-0.11114 -0.52553,-0.0438 0.031,0.0674 0.38826,0.79239 0.79402,1.61119 0.80063,1.61559 1.09566,2.64022 1.10235,3.8283 l 0.004,0.7633 -0.8139,-0.90197 c -0.73038,-0.80941 -2.70726,-2.46363 -2.94417,-2.46363 -0.0514,0 0.0984,0.50757 0.33274,1.12793 0.93582,2.47722 1.20978,4.4137 1.21561,8.59251 0.005,3.57022 -0.0287,3.9946 -0.45821,5.77971 -0.25498,1.05962 -0.63916,2.32065 -0.85373,2.80229 l -0.39013,0.87572 -0.39616,-1.83901 c -0.4578,-2.1251 -0.80096,-3.32784 -0.94937,-3.32742 -0.0572,1.6e-4 -0.236,0.80801 -0.39732,1.79521 -0.16131,0.98721 -0.56533,2.59307 -0.89782,3.56858 -0.6478,1.90065 -2.00956,4.63123 -2.36918,4.75067 -0.16612,0.0552 -0.22197,-0.42758 -0.23134,-1.99979 -0.0178,-2.99062 -0.11057,-3.05967 -1.09387,-0.81445 -1.09304,2.4958 -2.073,4.25544 -3.45236,6.19914 -1.18588,1.67106 -3.61244,4.33853 -3.78778,4.16383 -0.0563,-0.0561 0.17813,-0.79503 0.52089,-1.64215 0.89015,-2.20002 1.32157,-4.50885 1.32157,-7.07277 0,-1.16489 -0.0593,-2.11671 -0.13184,-2.11514 -0.0725,0.002 -0.52734,0.56667 -1.01074,1.2558 -2.87671,4.10101 -5.08531,6.64934 -7.49419,8.64697 -1.85841,1.54114 -4.93719,3.59202 -7.1781,4.78159 l -1.66448,0.88358 -0.4123,-1.08617 c -0.22676,-0.5974 -0.44437,-1.2044 -0.48357,-1.34889 -0.0456,-0.16792 0.528,-0.72371 1.58945,-1.54021 3.8561,-2.96627 6.84619,-7.24385 7.88533,-11.28065 0.74507,-2.89443 0.74946,-5.06554 0.0161,-7.96738 -0.80937,-3.20266 -3.57752,-6.51082 -5.46426,-6.53022 -0.51703,-0.005 -0.68696,0.25812 -1.01424,1.57244 -0.44872,1.80197 -1.57021,3.89008 -2.78323,5.18208 -1.24759,1.32884 -2.13748,1.89151 -3.84421,2.43067 -1.12519,0.35545 -1.28457,0.46704 -1.83932,1.28782 -1.550999,2.29473 -4.66039,3.67837 -7.81103,3.4758 -2.5041,-0.16099 -4.48988,-1.03635 -6.07722,-2.6789 -0.82217,-0.85077 -0.99345,-0.94376 -2.19727,-1.19293 -3.47631,-0.71953 -6.15264,-3.136 -7.54831,-6.81538 -0.2976,-0.78455 -0.62332,-1.63642 -0.72383,-1.89307 -0.24999,-0.63833 -1.00911,-0.91633 -2.17482,-0.79646 -2.8671,0.29484 -6.05244,3.72149 -7.02875,7.56124 -0.39172,1.54058 -0.34455,4.26573 0.10489,6.05986 0.71532,2.85552 2.53328,5.86484 4.926,8.15417 2.61272,2.49982 4.73652,3.6192 8.9249,4.70398 3.37914,0.87519 4.52398,1.35243 7.37609,3.07478 3.23265,1.95216 8.1727,5.07856 8.45501,5.35091 0.22294,0.21507 0.0935,0.24665 -0.96679,0.23588 -0.67331,-0.007 -1.97566,-0.1688 -2.89412,-0.3599 z m 3.00726,-23.27834 c 0.58441,-0.19616 1.37301,-0.56135 1.75243,-0.81153 0.697591,-0.45997 1.524721,-1.56091 1.323391,-1.7615 -0.0602,-0.0599 -0.80086,0.0335 -1.646021,0.20761 -1.92979,0.39758 -5.88563,0.54717 -7.57267,0.28637 -0.92716,-0.14333 -1.37025,-0.1444 -1.63365,-0.004 -0.36077,0.19237 -0.36068,0.19354 0.0476,0.62655 1.54523,1.63884 5.15752,2.31954 7.72893,1.45644 z m -6.61077,-4.17135 c 1.61742,-0.63052 3.37059,-1.63495 3.27382,-1.87565 -0.0363,-0.0903 -0.62957,-0.32655 -1.31836,-0.52497 -2.83081,-0.81546 -5.3595,-2.64487 -6.44174,-4.66034 -0.52341,-0.97474 -0.60369,-1.29963 -0.66351,-2.6852 -0.0633,-1.46609 -0.0326,-1.64362 0.43926,-2.53957 0.68995,-1.31007 1.93103,-2.15195 3.89927,-2.64505 1.31085,-0.32841 1.83591,-0.36051 4.7461,-0.29019 2.73978,0.0662 3.46404,0.14122 4.451311,0.46105 1.50842,0.48867 2.5508,1.28554 3.117919,2.38356 0.38394,0.74335 0.44905,1.09867 0.44905,2.45039 0,1.38902 -0.0622,1.70854 -0.51217,2.63182 -0.983059,2.01697 -3.26453,3.7972 -6.50765,5.07791 -0.64719,0.25558 -0.66981,0.28787 -0.35156,0.50186 0.65524,0.44059 2.67977,1.14583 4.129541,1.43852 3.453079,0.69715 5.947819,-0.2325 7.833799,-2.9192 1.26656,-1.8043 1.81354,-4.19219 1.8216,-7.95224 0.008,-3.64741 0.46813,-5.35083 1.98986,-7.3634 0.50214,-0.66412 1.42714,-1.62341 2.05556,-2.13177 1.44985,-1.17286 4.93922,-2.92739 6.76758,-3.402897 1.77418,-0.461416 4.87328,-0.497511 6.66157,-0.07759 0.6668,0.156576 1.24931,0.24787 1.29447,0.202876 0.27875,-0.277737 -3.10003,-3.872037 -5.23143,-5.565139 -1.98831,-1.57943 -3.99937,-2.416529 -5.80549,-2.416529 -1.67338,0 -2.66598,0.417197 -4.54524,1.910391 -2.27645,1.808795 -3.22069,2.205469 -5.24985,2.205469 h -1.62598 v 0.509912 c 0,0.280451 0.20143,2.089572 0.44762,4.020269 0.24619,1.930698 0.42417,3.868628 0.39551,4.306518 l -0.0521,0.79617 -0.66438,-0.87572 c -1.06648,-1.40573 -2.33234,-4.178236 -3.19864,-7.005719 -0.44271,-1.44493 -1.025009,-3.060624 -1.293999,-3.590431 -0.26899,-0.529808 -0.97305,-1.917134 -1.56457,-3.082946 C 95.53691,85.418013 94.59835,81.797293 93.98266,75.638873 93.35838,69.394487 92.60144,66.392937 90.64893,62.419478 c -1.08009,-2.198052 -2.07599,-3.869525 -2.22003,-3.72601 -0.17622,0.175579 -1.47108,7.136584 -1.66975,8.976399 -0.14446,1.337767 -0.17198,3.69299 -0.09,7.706291 0.17116,8.381759 -0.2131,10.846607 -2.55942,16.417777 -0.56149,1.333205 -1.0803,2.99573 -1.4757,4.72886 -0.33538,1.470046 -0.77291,3.162855 -0.97229,3.761805 -0.49014,1.47239 -1.97692,4.36154 -2.18856,4.25287 -0.10213,-0.0524 -0.18674,-1.94946 -0.2109,-4.72886 -0.0318,-3.652975 -0.0879,-4.628319 -0.26367,-4.58036 -2.59362,0.707687 -4.90205,0.06016 -7.69403,-2.158228 -2.44516,-1.942821 -4.10405,-2.503933 -6.44668,-2.180565 -2.51342,0.346944 -6.39008,2.786976 -9.44593,5.945429 -0.84946,0.877983 -1.5133,1.6274 -1.47519,1.66537 0.0381,0.03797 0.85672,-0.09304 1.81913,-0.291124 2.37028,-0.48786 4.96246,-0.388627 7.19907,0.275593 6.00386,1.783015 12.67233,7.070425 13.90177,11.022685 0.15353,0.49354 0.35317,1.95686 0.44364,3.25182 0.0905,1.29495 0.28626,2.82263 0.43507,3.39483 0.77986,2.99863 2.80428,5.35926 5.38411,6.27827 1.43975,0.51288 3.83322,0.36323 5.67525,-0.35485 z m 0.67229,-5.35069 c 0.16001,-0.41545 -0.0795,-1.00154 -0.38538,-0.94286 -0.5138,0.0986 -0.47681,1.18868 0.0403,1.18868 0.13771,0 0.29298,-0.11061 0.34505,-0.24582 z m 6.58982,-0.49853 c -0.0353,-0.36482 -0.14976,-0.56922 -0.31875,-0.56922 -0.16899,0 -0.28345,0.2044 -0.31876,0.56922 -0.0465,0.48096 0.003,0.56921 0.31876,0.56921 0.31587,0 0.3653,-0.0882 0.31875,-0.56921 z m -7.17422,-4.60323 c 2.23468,-0.61888 5.14368,-0.66035 7.44064,-0.10607 2.072151,0.50003 2.403111,0.49234 2.403111,-0.0559 0,-0.55559 -0.91989,-1.29558 -2.149281,-1.72896 -1.35155,-0.47645 -4.70415,-0.59206 -6.63978,-0.22896 -2.37008,0.44459 -4.29843,1.64753 -3.97737,2.48116 0.1363,0.3539 0.50471,0.30836 2.92268,-0.36129 z M 82.4137,86.891814 c 0.97192,-1.035035 1.55968,-2.866596 1.55968,-4.860218 0,-3.00076 -1.38796,-5.428728 -3.68112,-6.439418 -1.47517,-0.650171 -3.24563,-0.171256 -5.21531,1.410755 -0.98632,0.792197 -2.54194,2.51976 -2.54194,2.822904 0,0.08005 0.57349,0.182883 1.27442,0.228513 1.61331,0.105026 3.03005,0.746459 3.94873,1.787804 0.36604,0.414913 1.17358,1.612454 1.79453,2.661202 1.51368,2.556487 1.74336,2.870101 2.10203,2.870101 0.16869,0 0.51023,-0.216739 0.75898,-0.481643 z m -6.28514,-0.608185 c 0.1505,-0.214091 0.27364,-0.532931 0.27364,-0.708533 0,-0.430203 -0.77644,-1.17907 -1.22248,-1.17907 -0.86572,0 -1.40861,1.381734 -0.78645,2.001635 0.42014,0.418612 1.40641,0.353801 1.73529,-0.114032 z m 24.40368,-0.26753 c 0.15305,-0.168575 0.68293,-1.200197 1.17752,-2.292492 1.1097,-2.450772 1.49916,-3.071897 2.50371,-3.992969 1.04772,-0.960651 1.39302,-1.132527 2.95045,-1.468591 l 1.31836,-0.284477 -1.13617,-1.179386 c -1.34504,-1.396192 -2.72054,-2.272991 -4.14627,-2.643001 -1.70064,-0.441352 -3.02225,-0.006 -4.270369,1.406823 -1.846531,2.090155 -2.115491,5.738037 -0.64487,8.746449 0.48718,0.996615 1.35764,2.014144 1.723029,2.014144 0.13548,0 0.37156,-0.137925 0.52461,-0.3065 z m 6.87165,-1.632785 c 0.86587,-0.678622 0.40401,-1.957646 -0.70692,-1.957646 -0.78645,0 -1.40845,1.092715 -0.98055,1.722612 0.16071,0.236587 0.76619,0.585585 1.02829,0.592706 0.10781,0.0029 0.40444,-0.158023 0.65918,-0.357672 z M 71.39244,83.170025 c 0.0656,-0.105774 -0.17396,-0.175143 -0.60487,-0.175143 -0.39242,0 -0.71349,0.07882 -0.71349,0.175143 0,0.09633 0.27218,0.175143 0.60486,0.175143 0.33267,0 0.65374,-0.07881 0.7135,-0.175143 z m 39.53639,-2.032882 c 0.51187,-0.195712 0.28529,-0.419119 -0.42508,-0.419119 -0.67562,0 -0.94154,0.225236 -0.48339,0.409435 0.31773,0.127745 0.59204,0.130669 0.90847,0.0097 z M 57.21581,72.994599 c 0.30447,-0.105752 0.55358,-0.252544 0.55358,-0.326205 0,-0.07366 -0.55261,-0.543359 -1.22802,-1.043775 -1.43754,-1.065082 -2.87634,-2.695027 -3.84126,-4.351581 -1.03247,-1.7725 -1.03248,-1.773124 -0.0723,-2.693958 2.38244,-2.284848 5.66985,-3.641899 8.84002,-3.649173 2.06196,-0.0047 3.27341,0.3853 5.73847,1.847523 0.79958,0.474296 0.96093,0.139075 0.23108,-0.48011 -2.16022,-1.832671 -5.50684,-2.495719 -8.72115,-1.727868 -2.49904,0.596987 -3.74214,1.268434 -7.58256,4.095658 -2.38378,1.754873 -2.40135,1.786196 -1.79419,3.197495 1.51334,3.517676 5.34195,6.012282 7.87635,5.131994 z m 8.00815,-7.137725 c 0.0509,-0.08203 -0.22066,-0.242626 -0.60343,-0.356889 -0.38277,-0.114264 -1.21888,-0.564472 -1.85803,-1.000463 -0.63915,-0.435991 -1.20422,-0.750736 -1.25571,-0.699434 -0.15602,0.155455 0.43596,0.927604 1.09536,1.428728 0.81681,0.620748 2.39225,0.998147 2.62181,0.628058 z"
        />
      </g>
    </svg>
  );
};

export default AppsLogo;
