<?php
header('HTTP/1.1 404 Not Found');
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
  <title>Страница не найдена</title>
  <meta name="description" content="">
  <meta name="author" content="">
  <meta name="viewport" content="width=device-width">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <link rel="shortcut icon" href="/favicon/favicon.png" rel="icon" type="image/vnd.microsoft.icon">
  <link rel="stylesheet" href="/css/main.css">
  <link rel="stylesheet" href="/404/404.css">
  <link rel="stylesheet" href="/css/reset.css">
  <link rel="stylesheet" href="/fonts/stylesheet.css">
</head>
<body>
  <header class="header">
    <nav class="header-nav">
        <div class="nav-group">
    <a href="../pages/home" class="header-logo">
        <img src="/images/header/Logo_Geisha.svg" alt="Geisha">
    </a>

    <div class="header-pages">
        <ul class="nav-list">
            <li><a href="../pages/template-courses.html" class="nav-item item--deep">Курсы</a></li>
            <li><a href="../pages/consultations.html" class="nav-item item--deep">Консультации</a></li>
            <li><a href="../pages/sdskn " class="nav-item">Расписание</a></li>
            <li>

                <a id="navItemAbout" class="nav-item">О центре <img class="dropdown-arrow" src="../images/header/keyboard_arrow_gray.svg" alt="arrow"></a>

                <div id="dropdown-item" class="dropdown-item none">
                    <ul class="dropdown-list">
                        <li><a href="../pages/contacts.html" class="dropdown-link">Контакты</a></li>
                        <li><a href="../pages/about-us.html" class="dropdown-link">О центре</a></li>
                        <li><a href="../pages/articles/articles-main.html" class="dropdown-link">Статьи</a></li>
                        <li><a href="../pages/master-class.html" class="dropdown-link">Мастер-классы</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    </div>

    <div class="header-contacts">

        <div class="search__block" id="search__block">
            <input type="text" name="" id="search__inp" class="search__inp" placeholder="Найти...">

            <button id="open-search" class="header-serch"></button>
        </div>
        
        
        <a target = "_blank" href="https://yandex.ru/maps/54/yekaterinburg/?ll=60.576910%2C56.841514&mode=poi&poi%5Bpoint%5D=60.575870%2C56.841715&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1592532139&z=17.74" class="header-icon header_icon--map"></a>
        <a href="#" class="contacts-btn">Написать в WhatsApp</a>

        <button id="contacts-btn" class="contacts-btn">+7 950 638 8922 <img class="dropdown-arrow" src="/images/header/keyboard_arrow_white.svg" alt="arrow"></button>
        <div class="contacts-btn__block">

        <div class="contacts-dropdown-form contacts-dropdown-form__header none">
            <form action=""></form>
            <input id="phone" class="dropdown-form__inp" type="tel" name="" placeholder="Ваш номер телефона">
            <input id="dropdown-form__btn" class="dropdown-form__btn" type="submit" value="Заказать обратный звонок">
        </div>

        <div class="js__box"></div>

        <div id="contacts-dropdown__box" class="contacts-dropdown__box contacts-dropdown__box__header none">
           <img src="/images/header/ring_volume.svg" alt=""> Вскоре мы вам перезвоним
        </div>

        </div>

    </div>
    </nav>

    
</header>

  <div class="content404">

    <div class="container">

      <h1 class="title__404">
        404
      </h1>

      <p class="error-doc__subtitle">
        Страница не найдена
      </p>

      <div class="contacts-block__btns help-about-block__btns">
        <a href="#" class="contacts-btn contacts-btn--yellow">Написать в WhatsApp</a>
        <button class="contacts-btn contacts-btn--yellow">+7 950 638 8922 <img src="/images/header/keyboard_arrow_white.svg" alt="arrow"></button>
        </div>

    </div>

    <div class="back-img--star"></div>

  </div>

  <script src="/js/header-scripts.js"></script>
</body>
</html>