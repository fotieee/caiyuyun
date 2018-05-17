-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-05-17 06:50:00
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tianmao`
--

-- --------------------------------------------------------

--
-- 表的结构 `biglogo`
--

CREATE TABLE `biglogo` (
  `url` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `sid` tinyint(20) NOT NULL,
  `text` varchar(200) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `biglogo`
--

INSERT INTO `biglogo` (`url`, `sid`, `text`) VALUES
('https://img.alicdn.com/i2/2/T1tzyoXnd3XXb1upjX.jpg_100x150q100.jpg', 1, 'Adidas/阿迪达斯'),
('https://img.alicdn.com/i2/2/TB12f31JVXXXXcdXpXXSutbFXXX.jpg_100x150q100.jpg', 2, 'Nike/耐克'),
('https://img.alicdn.com/i2/2/TB1lL6xPVXXXXcTXpXXSutbFXXX.jpg_100x150q100.jpg', 3, 'Gap'),
('https://img.alicdn.com/i2/2/TB1B.inJVXXXXcfXVXXSutbFXXX.jpg_100x150q100.jpg', 4, 'Uniqlo/优衣库'),
('https://img.alicdn.com/i2/2/TB1KFgvIVXXXXX_apXXSutbFXXX.jpg_100x150q100.jpg', 5, 'Puma/彪马'),
('https://img.alicdn.com/i2/2/TB1VcxuJVXXXXXEXpXXSutbFXXX.jpg_100x150q100.jpg', 6, 'balence');

-- --------------------------------------------------------

--
-- 表的结构 `clss`
--

CREATE TABLE `clss` (
  `id` tinyint(5) NOT NULL,
  `title` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `clss`
--

INSERT INTO `clss` (`id`, `title`) VALUES
(1, '性感V领'),
(2, '喇叭袖'),
(3, '刺绣'),
(4, '俏皮露肩'),
(5, '绑带衬衫'),
(6, '条纹控'),
(7, '白衬衫'),
(8, '印花T恤'),
(9, '一字肩'),
(10, '情侣装'),
(11, '时髦皮衣');

-- --------------------------------------------------------

--
-- 表的结构 `clss1`
--

CREATE TABLE `clss1` (
  `id` tinyint(5) NOT NULL,
  `title` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `clss1`
--

INSERT INTO `clss1` (`id`, `title`) VALUES
(1, '夏季新品'),
(2, '商场同款'),
(3, '仙女连衣裙'),
(4, 'T恤'),
(5, '衬衫'),
(6, '时髦外套'),
(7, '休闲裤牛仔裤'),
(8, '无痕文胸'),
(9, '运动文胸'),
(10, '潮流家居服'),
(11, '百搭船袜');

-- --------------------------------------------------------

--
-- 表的结构 `djrm`
--

CREATE TABLE `djrm` (
  `id` tinyint(5) NOT NULL,
  `title` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `djrm`
--

INSERT INTO `djrm` (`id`, `title`) VALUES
(1, '夏上新'),
(2, 'oversizeT恤'),
(3, '衬衫'),
(4, 'T恤'),
(5, '入夏套装'),
(6, '长款T恤'),
(7, '轻薄针织'),
(8, '蕾丝top'),
(9, '防晒衫'),
(10, '印花T恤'),
(11, '甜美荷叶边'),
(12, '背心吊带'),
(13, '夏日花卉');

-- --------------------------------------------------------

--
-- 表的结构 `first`
--

CREATE TABLE `first` (
  `sid` tinyint(6) NOT NULL,
  `url` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `title` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `price` decimal(50,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `first`
--

INSERT INTO `first` (`sid`, `url`, `title`, `price`) VALUES
(1, 'https://img.alicdn.com/tps/i4/TB1Dt6lhh6I8KJjSszfSuuZVXXa.jpg', '吃货提前嗨买二免一', NULL),
(2, 'https://img.alicdn.com/tfs/TB1YzZ5leGSBuNjSspbXXciipXa-400-400.jpg', '一元超值疯狂抢购', NULL),
(3, 'https://img.alicdn.com/tfs/TB1aP20rgmTBuNjy1XbXXaMrVXa-400-https://gw.alicdn.com/tfs/TB124qjqamWBuNjy1XaXXXCbXXa-400-400.jpg', '限时第二件半价', NULL),
(4, 'https://gw.alicdn.com/bao/uploaded/i2/725677994/TB2ITtHqYSYBuNjSspiXXXNzpXa_!!725677994-0-sm.jpg', '吃货节 澳洲原瓶进口红酒 奔富bin407干红葡萄酒750ml*6瓶整箱', '127.00'),
(5, 'https://gw.alicdn.com/bao/uploaded/i3/2379138101/TB1tXXVXm3PL1JjSZFxXXcBBVXa_!!2-item_pic.png', '【天猫超市】Midea/美的 T3-L324B独立控温家用烘培热风电烤箱', '127.00'),
(6, 'https:////gw.alicdn.com/bao/uploaded/i1/725677994/TB19PY2Xb3nBKNjSZFMXXaUSFXa_!!0-item_pic.jpg', '乐宜美日式24夹铝框防风塑料晒架晾晒内衣内裤袜子多夹子晾衣架', '43.90'),
(7, 'https://gw.alicdn.com/bao/uploaded/i2/725677994/TB1vt_joCtYBeNjSspaXXaOOFXa_!!0-item_pic.jpg', '凯丽友不锈钢单杆可伸缩落地式晾衣架晒衣架挂衣杆', '69.90'),
(8, 'https://gw.alicdn.com/bao/uploaded/i2/725677994/TB20cbTfBsmBKNjSZFsXXaXSVXa_!!725677994-0-sm.jpg', '吃货节 利仁电火锅DHG-T2600F电热锅不粘锅家用正品多功能电炒锅', '99.00'),
(9, 'https://gw.alicdn.com/bao/uploaded/i2/725677994/TB2kjbEfrZnBKNjSZFGXXbt3FXa_!!725677994-0-sm.jpg', '吃货节 Bear/小熊 DBC-B10D3电饼铛可丽饼机薄饼机煎饼烙饼家用', '149.00');

-- --------------------------------------------------------

--
-- 表的结构 `like1`
--

CREATE TABLE `like1` (
  `sid` tinyint(1) UNSIGNED NOT NULL,
  `url` varchar(300) NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 NOT NULL,
  `price` double(20,0) NOT NULL,
  `num` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `like1`
--

INSERT INTO `like1` (`sid`, `url`, `title`, `price`, `num`) VALUES
(1, 'https://gma.alicdn.com/bao/uploaded/i1/1339806085667060065/TB24EFJXo3iyKJjSspnXXXbIVXa_!!0-saturn_solar.jpg_200x200.jpg_.webp', 'ESCVEL逃逸速度 2017ss OVERSIZE落肩宽松街', 179, 370),
(2, 'https://gma.alicdn.com/bao/uploaded/i1/TB1SSG6c1uSBuNjy1XcYXIYjFXa_M2.SS2_200x200.jpg_.webp', '2018夏季薄款高弹免烫个性撞色条纹裤蓝色运', 288, 56),
(3, 'https://gma.alicdn.com/bao/uploaded/i1/59649838/TB27ExzbkOWBuNjSsppXXXPgpXa_!!0-saturn_solar.jpg_200x200.jpg_.webp', 'FLAM 官方网店嘻哈街舞潮牌国潮 无运动3M反', 179, 2201),
(4, 'https://gma.alicdn.com/bao/uploaded/i3/45867934/TB257gEkY1YBuNjSszhXXcUsFXa_!!0-saturn_solar.jpg_200x200.jpg_.webp', '夏季超薄速干运动裤男弹力收口宽松休闲裤', 98, 259),
(5, 'https://gma.alicdn.com/bao/uploaded/i2/126804350/TB26js1c7ZmBKNjSZPiXXXFNVXa_!!0-saturn_solar.jpg_200x200.jpg_.webp', '欧美潮牌休闲猫头印花短袖T恤男修身情侣T恤', 68, 385),
(6, 'https://gma.alicdn.com/bao/uploaded/i1/29974676/TB29TWZnVuWBuNjSszbXXcS7FXa_!!0-saturn_solar.jpg_200x200.jpg_.webp', '猩人类chic夏季2018新款短袖男t恤潮流学生', 88, 1),
(7, 'https://gma.alicdn.com/bao/uploaded/i3/29974676/TB2akPpnY1YBuNjSszhXXcUsFXa_!!0-saturn_solar.jpg_200x200.jpg_.webp', '猩人类2018早春短袖男潮牌t恤潮流时尚欧美', 88, 3),
(8, 'https://gma.alicdn.com/bao/uploaded/i1/TB1mwWQl.R1BeNjy0FmYXH0wVXa_M2.SS2_200x200.jpg_.webp', '高端丝滑弹力男夏季薄款裤商务百搭西裤时尚', 288, 0),
(9, 'https://gma.alicdn.com/bao/uploaded/i1/59649838/TB2ZfNCX98YBeNkSnb4XXaevFXa_!!0-saturn_solar.jpg_200x200.jpg_.webp', 'FLAM 官方网店嘻哈街舞潮牌国潮 多扣多袋条', 269, 2776),
(10, 'https://gma.alicdn.com/bao/uploaded/i2/59649838/TB2RPELauuSBuNjSsziXXbq8pXa_!!0-saturn_solar.jpg_200x200.jpg_.webp', 'FLAM 官方网店嘻哈街舞潮牌国潮 拉链多袋运', 287, 231);

-- --------------------------------------------------------

--
-- 表的结构 `loop2`
--

CREATE TABLE `loop2` (
  `sid` tinyint(5) NOT NULL,
  `url` varchar(200) NOT NULL,
  `minurl` varchar(200) DEFAULT NULL,
  `min2url` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `loop2`
--

INSERT INTO `loop2` (`sid`, `url`, `minurl`, `min2url`) VALUES
(1, 'https://img.alicdn.com/imgextra/i1/65/TB2Ro8YqL9TBuNjy1zbXXXpepXa_!!65-0-luban.jpg_q100.jpg_.webp', 'https://img.alicdn.com/imgextra/i4/131/TB2Cw_TeTqWBKNjSZFAXXanSpXa_!!131-2-luban.png_240x5000q100.jpg_.webp', 'https://img.alicdn.com/imgextra/i2/89/TB23txzq41YBuNjy1zcXXbNcXXa_!!89-2-luban.png_240x5000q100.jpg_.webp'),
(2, 'https://img.alicdn.com/simba/img/TB103cxl1uSBuNjSsziSuvq8pXa.jpg', NULL, NULL),
(3, 'https://img.alicdn.com/tps/i4/TB1O0qElCtYBeNjSspkSuvU8VXa.jpg', 'https://img.alicdn.com/imgextra/i3/151/TB2wPp_mH9YBuNjy0FgXXcxcXXa_!!151-2-luban.png_240x5000q100.jpg_.webp', 'https://img.alicdn.com/imgextra/i2/7/TB2.Bm2frorBKNjSZFjXXc_SpXa_!!7-2-luban.png_240x5000q100.jpg_.webp'),
(4, 'https://img.alicdn.com/simba/img/TB14fdvqVOWBuNjy0FiSutFxVXa.jpg', NULL, NULL),
(5, 'https://img.alicdn.com/imgextra/i2/131/TB2B7SdqL9TBuNjy1zbXXXpepXa_!!131-0-luban.jpg_q100.jpg_.webp', NULL, NULL),
(6, 'https://img.alicdn.com/imgextra/i3/114/TB2lJHbqL5TBuNjSspcXXbnGFXa_!!114-0-luban.jpg_q100.jpg_.webp', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `lxxp`
--

CREATE TABLE `lxxp` (
  `id` tinyint(5) NOT NULL,
  `title` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `lxxp`
--

INSERT INTO `lxxp` (`id`, `title`) VALUES
(1, '防晒衬衫'),
(2, '字母T恤'),
(3, '时髦露肩'),
(4, '轻薄防晒'),
(5, '海军风'),
(6, '短款外套'),
(7, '针织开衫'),
(8, '雪纺衫'),
(9, '牛仔衬衫'),
(10, '休闲西装'),
(11, '马甲'),
(12, '短袖T恤');

-- --------------------------------------------------------

--
-- 表的结构 `navlogo`
--

CREATE TABLE `navlogo` (
  `sid` tinyint(1) UNSIGNED NOT NULL,
  `url` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `navlogo`
--

INSERT INTO `navlogo` (`sid`, `url`) VALUES
(1, 'https://img.alicdn.com/bao/uploaded/TB1B_DcJpXXXXXWXFXXSutbFXXX.jpg_170x120q30.jpg'),
(2, 'https://img.alicdn.com/bao/uploaded/i4/T1gRqVXk4fXXb1upjX.jpg_170x120q30.jpg'),
(3, 'https://img.alicdn.com/bao/uploaded/TB1wNJAHFXXXXc7XpXXSutbFXXX.jpg_170x120q30.jpg'),
(4, 'https://img.alicdn.com/bao/uploaded/TB1w472LFXXXXXwXVXXSutbFXXX.jpg_170x120q30.jpg'),
(5, 'https://img.alicdn.com/bao/uploaded/TB1fETUHpXXXXbmapXXwu0bFXXX.png_170x120q30.jpg'),
(6, 'https://img.alicdn.com/bao/uploaded/TB1UJIfJXXXXXctaXXXSutbFXXX.jpg_170x120q30.jpg'),
(7, 'https://img.alicdn.com/bao/uploaded/TB1FfxjHFXXXXbWaXXXSutbFXXX.jpg_170x120q30.jpg'),
(8, 'https://img.alicdn.com/bao/uploaded/TB18XAnIVXXXXclXXXXSutbFXXX.jpg_170x120q30.jpg'),
(9, 'https://img.alicdn.com/bao/uploaded/TB1gWxjFFXXXXcEaFXXSutbFXXX.jpg_170x120q30.jpg'),
(10, 'https://img.alicdn.com/bao/uploaded/http://img.taobaocdn.com/bao/uploaded/TB1HMfoHpXXXXclXXXXwu0bFXXX.png_170x120q30.jpg'),
(11, 'https://img.alicdn.com/tps/TB18nTOLVXXXXc5XXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg'),
(12, 'https://img.alicdn.com/tps/TB1wzzFLVXXXXbXXFXXXXXXXXXX-400-200.jpg_170x120q30.jpg'),
(13, 'https://img.alicdn.com/tps/TB1SvLzLVXXXXaKXVXXXXXXXXXX-1000-500.jpg_170x120q30.jpg'),
(14, 'https://img.alicdn.com/tps/TB17DDrLVXXXXbOaXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg'),
(15, 'https://img.alicdn.com/tps/TB1dSYULVXXXXXlXXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg'),
(16, 'https://img.alicdn.com/tps/TB1xPvNLVXXXXXDXpXXXXXXXXXX-1000-500.jpg_170x120q30.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `second`
--

CREATE TABLE `second` (
  `sid` tinyint(6) NOT NULL,
  `url` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `title` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `price` decimal(50,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `second`
--

INSERT INTO `second` (`sid`, `url`, `title`, `price`) VALUES
(1, 'https://img.alicdn.com/tps/i4/TB1Yq7trXOWBuNjy0FiSutFxVXa.jpg', '网红零食5月囤货周', NULL),
(2, 'https://img.alicdn.com/tps/i4/TB1B_sBreSSBuNjy0FlSuvBpVXa.jpg', '进口优选好货全天购', NULL),
(3, 'https://img.alicdn.com/bao/uploaded/i4/2616970884/TB2t8cXo9BYBeNjy0FeXXbnmFXa_!!2616970884.jpg_400x400q60.jpg', '2017款Apple/苹果 iPad 9.7英寸平板电脑32G/128G wifi版原封便携', '2088.00'),
(4, 'https://gw.alicdn.com/bao/uploaded/i3/2914266524/TB21vaddkfb_uJjSsD4XXaqiFXa_!!2914266524.jpg', 'Nike Mars Yard / TS "NASA" - AA2261 100', '21289.74'),
(5, 'https://gw.alicdn.com/bao/uploaded/i1/2151885546/TB1b7yWdL9TBuNjy1zbXXXpepXa_!!0-item_pic.jpg', 'Supreme CDG Tee Comme Des Garcon潮牌联名款时尚短袖T恤SUPT033', '5339.00'),
(6, 'https://gw.alicdn.com/bao/uploaded/i2/2192001292/TB1w55PfzQnBKNjSZSgXXXHGXXa_!!0-item_pic.jpg', '跨境CALVIN KLEIN JEANS/CK 18春夏新款男士黑白Logo短袖T恤', '259.00'),
(7, 'https://gw.alicdn.com/bao/uploaded/i1/2298016439/TB1KPgYbh3IL1JjSZPfXXcrUVXa_!!0-item_pic.jpg', '正品韩国bbia口红丝绒雾面哑光口红3.2g持久显色咬唇妆9/13/14', '49.90'),
(8, 'https://gw.alicdn.com/bao/uploaded/i4/1879766137/TB1QuPJarsTMeJjy1zbXXchlVXa_!!0-item_pic.jpg', 'KENZO/高田贤三小虎头短袖T恤商务POLO衫男 4BA 5PO001', '799.00'),
(9, 'https://gw.alicdn.com/bao/uploaded/i4/2914266524/TB2v8oCXyHiFuJjSZFgXXcpoVXa_!!2914266524.jpg', 'Louis Vuitton LV x supreme联名红色iPhone7手机壳 "Louis Vuitt', '1459.00'),
(10, 'https://gw.alicdn.com/bao/uploaded/i3/2914266524/TB2En60c8fM8KJjSZFOXXXr5XXa_!!2914266524.jpg', 'Adidas Yeezy Boost 350 V2 侃爷冰蓝斑马椰子跑鞋B37571 - B3757', '3607.12');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `uid` tinyint(4) NOT NULL,
  `username` varchar(20) CHARACTER SET utf8 NOT NULL,
  `password` varchar(32) CHARACTER SET utf8 NOT NULL,
  `email` varchar(40) CHARACTER SET utf8 NOT NULL,
  `regdate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`uid`, `username`, `password`, `email`, `regdate`) VALUES
(49, 'zhangsan', 'c4ca4238a0b923820dcc509a6f75849b', '1', '2017-05-19 16:53:32'),
(50, 'zhangsan1', 'c4ca4238a0b923820dcc509a6f75849b', '1', '2017-05-19 16:53:56'),
(51, 'zhangsan123', 'c4ca4238a0b923820dcc509a6f75849b', '1', '2017-05-19 16:54:29'),
(52, 'wangwu', 'c4ca4238a0b923820dcc509a6f75849b', '1', '2017-05-19 16:55:43'),
(53, 'zhangsan123456', 'c4ca4238a0b923820dcc509a6f75849b', '1', '2017-05-19 17:07:50'),
(54, 'laowang', 'c4ca4238a0b923820dcc509a6f75849b', '1', '2017-05-19 17:38:20'),
(55, 'xiaowang', 'c4ca4238a0b923820dcc509a6f75849b', '1', '2017-05-19 17:38:58'),
(56, '1111', 'c4ca4238a0b923820dcc509a6f75849b', '1', '2017-05-19 17:48:15'),
(58, 'fsaff', '87cb491f7c5f2f6182f1685f37f0bce8', 'fsfsafa', NULL),
(59, 'fsafsaf', 'df53f683efe198193e0de6a69c22455d', 'fsfsafa', NULL),
(60, '', 'd41d8cd98f00b204e9800998ecf8427e', '', NULL),
(61, 'safsafsa', 'e10adc3949ba59abbe56e057f20f883e', 'sad@sa.com', NULL),
(62, 'nbhjgf', 'e10adc3949ba59abbe56e057f20f883e', '123@ss.com', NULL),
(63, 'fdsfdsf', 'e6e914a1981ffd43763f4de13ddc8947', '', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clss`
--
ALTER TABLE `clss`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clss1`
--
ALTER TABLE `clss1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `djrm`
--
ALTER TABLE `djrm`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `first`
--
ALTER TABLE `first`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `like1`
--
ALTER TABLE `like1`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `loop2`
--
ALTER TABLE `loop2`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `lxxp`
--
ALTER TABLE `lxxp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `navlogo`
--
ALTER TABLE `navlogo`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `second`
--
ALTER TABLE `second`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `clss`
--
ALTER TABLE `clss`
  MODIFY `id` tinyint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- 使用表AUTO_INCREMENT `djrm`
--
ALTER TABLE `djrm`
  MODIFY `id` tinyint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- 使用表AUTO_INCREMENT `first`
--
ALTER TABLE `first`
  MODIFY `sid` tinyint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- 使用表AUTO_INCREMENT `like1`
--
ALTER TABLE `like1`
  MODIFY `sid` tinyint(1) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- 使用表AUTO_INCREMENT `lxxp`
--
ALTER TABLE `lxxp`
  MODIFY `id` tinyint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- 使用表AUTO_INCREMENT `navlogo`
--
ALTER TABLE `navlogo`
  MODIFY `sid` tinyint(1) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- 使用表AUTO_INCREMENT `second`
--
ALTER TABLE `second`
  MODIFY `sid` tinyint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `uid` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
