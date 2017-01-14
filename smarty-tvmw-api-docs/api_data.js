define({ "api": [  {    "type": "get",    "url": "/login/",    "title": "Login: создание сессии",    "name": "Login",    "group": "Authorization",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "abonement",            "defaultValue": "пустой",            "description": "<p>Абонемент (логин) аккаунта. Если для аккаунта разрешена авторизация только по абонементу, то достаточно передать только это поле.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "defaultValue": "пустой",            "description": "<p>Пароль аккаунта.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "device_uid",            "defaultValue": "пустой",            "description": "<p>Уникальный идентификатор устройства. Если для аккаунта разрешена авторизация только по Device UID, то достаточно передать только это поле.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "client_id",            "description": "<p>Client ID.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "api_key",            "description": "<p>API key.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "device",            "defaultValue": "пустое",            "description": "<p>Системное название типа устройства.</p>"          }        ]      }    },    "success": {      "fields": {        "Ответ": [          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "authkey",            "description": "<p>Авторизационный ключ сессии.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "error",            "description": "<p>Код ошибки.</p> <p>TODO: описать все поля ответа метода</p>"          }        ]      }    },    "error": {      "fields": {        "Коды ошибок error": [          {            "group": "Коды ошибок error",            "optional": false,            "field": "0",            "description": "<p>Нет ошибки, авторизация прошла успешно.</p>"          },          {            "group": "Коды ошибок error",            "optional": false,            "field": "1",            "description": "<p>Аккаунт по указанным параметрам не найден.</p>"          },          {            "group": "Коды ошибок error",            "optional": false,            "field": "2",            "description": "<p>Аккаунт неактивен.</p>"          },          {            "group": "Коды ошибок error",            "optional": false,            "field": "3",            "description": "<p>Ошибка создания авторизационного ключа сессии.</p>"          },          {            "group": "Коды ошибок error",            "optional": false,            "field": "4",            "description": "<p>Неверный API key.</p>"          },          {            "group": "Коды ошибок error",            "optional": false,            "field": "5",            "description": "<p>Превышено число сессий аккаунта на базовых устройствах.</p>"          },          {            "group": "Коды ошибок error",            "optional": false,            "field": "6",            "description": "<p>Базовое устройство уже привязано к другому аккаунту.</p>"          }        ]      }    },    "version": "1.40.0",    "filename": "../../git/smarty/tvmiddleware/api.py",    "groupTitle": "Authorization"  },  {    "type": "get",    "url": "/logout/",    "title": "Logout: завершение сессии",    "name": "Logout",    "group": "Authorization",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "authkey",            "description": "<p>Ключ сессии.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "device",            "defaultValue": "пустое",            "description": "<p>Системное название типа устройства.</p>"          }        ]      }    },    "success": {      "fields": {        "Ответ": [          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "error",            "description": "<p>Код ошибки.</p>"          }        ]      }    },    "error": {      "fields": {        "Коды ошибок error": [          {            "group": "Коды ошибок error",            "optional": false,            "field": "0",            "description": "<p>Нет ошибки.</p>"          }        ]      }    },    "version": "1.40.0",    "filename": "../../git/smarty/tvmiddleware/api.py",    "groupTitle": "Authorization"  },  {    "type": "get",    "url": "/notification/create/",    "title": "NotificationCreate: создание напоминания",    "name": "NotificationCreate",    "group": "Notification",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "cid",            "description": "<p>Идентификатор канала.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "pid",            "description": "<p>Идентификатор передачи, для которой устанавливается напоминание.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "authkey",            "description": "<p>Ключ сессии.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "device",            "defaultValue": "пустое",            "description": "<p>Системное название типа устройства.</p>"          }        ]      }    },    "success": {      "fields": {        "Ответ": [          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "error",            "description": "<p>Код ошибки.</p>"          }        ]      }    },    "error": {      "fields": {        "Коды ошибок error": [          {            "group": "Коды ошибок error",            "optional": false,            "field": "0",            "description": "<p>Нет ошибки, напоминание сохранено успешно.</p>"          }        ]      }    },    "version": "1.40.0",    "filename": "../../git/smarty/tvmiddleware/api.py",    "groupTitle": "Notification"  },  {    "type": "get",    "url": "/notification/delete/",    "title": "NotificationDelete: удаление напоминания",    "name": "NotificationDelete",    "group": "Notification",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "pid",            "description": "<p>Идентификатор передачи, для которой удаляется напоминание.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "authkey",            "description": "<p>Ключ сессии.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "device",            "defaultValue": "пустое",            "description": "<p>Системное название типа устройства.</p>"          }        ]      }    },    "success": {      "fields": {        "Ответ": [          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "error",            "description": "<p>Код ошибки.</p>"          }        ]      }    },    "error": {      "fields": {        "Коды ошибок error": [          {            "group": "Коды ошибок error",            "optional": false,            "field": "0",            "description": "<p>Нет ошибки, напоминание сохранено успешно.</p>"          }        ]      }    },    "version": "1.40.0",    "filename": "../../git/smarty/tvmiddleware/api.py",    "groupTitle": "Notification"  },  {    "type": "get",    "url": "/notification/list/",    "title": "NotificationList: список установленных напоминаний",    "name": "NotificationList",    "group": "Notification",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": true,            "field": "icon_width",            "description": "<p>Предпочитаемая ширина иконки канала.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": true,            "field": "icon_height",            "description": "<p>Предпочитаемая высота иконки канала.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "authkey",            "description": "<p>Ключ сессии.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "device",            "defaultValue": "пустое",            "description": "<p>Системное название типа устройства.</p>"          }        ]      }    },    "success": {      "fields": {        "Ответ": [          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "error",            "description": "<p>Код ошибки.</p>"          },          {            "group": "Ответ",            "type": "Object[]",            "optional": false,            "field": "notifications",            "description": "<p>Список напоминаний.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "notifications.id",            "description": "<p>Идентификатор канала.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "notifications.name",            "description": "<p>Название канала.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "notifications.url",            "description": "<p>URL потока канала.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "notifications.icon",            "description": "<p>URL иконки канала.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "notifications.category_id",            "description": "<p>Идентификатор категории канала.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "notifications.timeshift_offset",            "description": "<p>Сдвиг вещания.</p>"          },          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "notifications.has_record",            "description": "<p>Включена ли запись на канале.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "notifications.max_archive_duration",            "description": "<p>Глубина записи в днях.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "notifications.program_begin_time",            "description": "<p>Время начала передачи в Unix Timestamp (UTC+0).</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "notifications.program_end_time",            "description": "<p>Время окончания передачи в Unix Timestamp (UTC+0).</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "notifications.program_name",            "description": "<p>Название передачи.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "notifications.program_description",            "description": "<p>Описание передачи.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "notifications.program_category",            "description": "<p>Название категории передачи.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "notifications.program_preview_url",            "description": "<p>URL картинки передачи.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "notifications.program_id",            "description": "<p>Идентификатор передачи.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "notifications.program_rating",            "description": "<p>Возрастной рейтинг.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "notifications.program_meta",            "description": "<p>Дополнительная информация о передаче в формате JSON.</p>"          }        ]      }    },    "error": {      "fields": {        "Коды ошибок error": [          {            "group": "Коды ошибок error",            "optional": false,            "field": "0",            "description": "<p>Нет ошибки.</p>"          }        ]      }    },    "version": "1.40.0",    "filename": "../../git/smarty/tvmiddleware/api.py",    "groupTitle": "Notification"  },  {    "type": "get",    "url": "/portal/settings/list/",    "title": "PortalSettingsList: получение настроек портала",    "name": "PortalSettingsList",    "group": "Portal",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "client_id",            "description": "<p>Client ID.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "api_key",            "description": "<p>API key.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "device",            "description": "<p>Системное название типа устройства.</p>"          }        ]      }    },    "success": {      "fields": {        "Ответ": [          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "show_tvchannels",            "description": "<p>Показывать ли раздел &quot;Телеканалы&quot;.</p>"          },          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "show_categorizedtv",            "description": "<p>Показывать ли раздел &quot;ТВ по интересам&quot;.</p>"          },          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "show_videocatalog",            "description": "<p>Показывать ли раздел &quot;Видеотека&quot;.</p>"          },          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "show_radio",            "description": "<p>Показывать ли раздел &quot;Радио&quot;.</p>"          },          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "show_games",            "description": "<p>Показывать ли раздел &quot;Игры&quot;.</p>"          },          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "show_balance",            "description": "<p>Показывать ли раздел &quot;Баланс&quot;.</p>"          },          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "show_payment",            "description": "<p>Показывать ли раздел &quot;Оплата&quot;.</p>"          },          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "show_info",            "description": "<p>Показывать ли раздел &quot;Информация&quot;.</p>"          },          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "show_settings",            "description": "<p>Показывать ли раздел &quot;Настройки&quot;.</p>"          },          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "show_exit",            "description": "<p>Показывать ли раздел &quot;Выход&quot;.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "template",            "description": "<p>Название шаблона интерфейса.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "custom_css_url",            "description": "<p>URL на внешний CSS-файл для возможности переопределения стиля интерфейса, либо пустая строка.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "client_logo_url",            "description": "<p>URL на логотип оператора для использования в главном меню, либо пустая строка.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "client_logo_login_url",            "description": "<p>URL на логотип оператора для использования на экране авторизации, либо пустая строка.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "client_logo_loading_url",            "description": "<p>URL на логотип оператора для использования на экране загрузки портала, либо пустая строка.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "login_text",            "description": "<p>Текст приветствия, отображаемый на экране авторизации.</p>"          },          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "reports_enabled",            "description": "<p>Необходимо ли отправлять данные телесмотрения в модуль Reports.</p>"          },          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "data_autorefresh_enabled",            "description": "<p>Необходимо ли автоматически обновлять данные (например, список телеканалов) без перезагрузки устройства.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "standby_timer",            "description": "<p>Количество минут для Stand-By таймера. При неактивности в течение данного времени требуется перевести устройство в режим ожидания и отключить от видеотрансляций.</p>"          }        ]      }    },    "error": {      "fields": {        "Коды ошибок error": [          {            "group": "Коды ошибок error",            "optional": false,            "field": "0",            "description": "<p>Нет ошибки.</p>"          },          {            "group": "Коды ошибок error",            "optional": false,            "field": "1",            "description": "<p>Client ID не найден или данный тип устройства для данного Client ID не добавлен.</p>"          },          {            "group": "Коды ошибок error",            "optional": false,            "field": "2",            "description": "<p>Неизвестная ошибка.</p>"          }        ]      }    },    "version": "1.40.0",    "filename": "../../git/smarty/tvmiddleware/api.py",    "groupTitle": "Portal"  },  {    "type": "get",    "url": "/video/detail",    "title": "VideoDetail: подробная информация о фильме",    "name": "VideoDetail",    "group": "Video",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "vid",            "description": "<p>Идентификатор фильма, пакета фильмов, сериала.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "authkey",            "description": "<p>Ключ сессии.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "device",            "defaultValue": "пустое",            "description": "<p>Системное название типа устройства.</p>"          }        ]      }    },    "success": {      "fields": {        "Ответ": [          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Идентификатор фильма.</p>"          },          {            "group": "Ответ",            "type": "Object[]",            "optional": false,            "field": "actions",            "description": "<p>Варианты просмотра, аренды, покупки фильма.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "actions.action",            "description": "<p>Имя действия. Задается через ценовую категорию и используется обработчиком API поставщика.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "actions.caption",            "description": "<p>Название варианта.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Название фильма.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "name_orig",            "description": "<p>Оригинальное название фильма.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "thumbnail_small",            "description": "<p>URL на обложку фильма уменьшенного размера.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "thumbnail_big",            "description": "<p>URL на обложку фильма большого размера.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "description",            "description": "<p>Описание фильма.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "year",            "description": "<p>Год выпуска.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "actors",            "description": "<p>Актёры фильма.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "director",            "description": "<p>Режиссёры фильма.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "genres",            "description": "<p>Жанры фильма.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "countries",            "description": "<p>Страны производства.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "genres_kinopoisk",            "description": "<p>Жанры фильма с сервиса Кинопоиск.</p>"          },          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "is_parent_control",            "description": "<p>Для фильма включен родительский контроль.</p>"          },          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "is_package",            "description": "<p>Является пакетом фильмов.</p>"          },          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "is_season",            "description": "<p>Является сериалом.</p>"          },          {            "group": "Ответ",            "type": "Object[]",            "optional": false,            "field": "package_videos",            "description": "<p>Список фильмов, состоящих в данном пакете.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "package_videos.id",            "description": "<p>Идентификатор фильма.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "rating",            "description": "<p>Возрастной рейтинг фильма.</p>"          },          {            "group": "Ответ",            "type": "Double",            "optional": false,            "field": "kinopoisk_rating",            "description": "<p>Рейтинг фильма на Кинопоиске.</p>"          },          {            "group": "Ответ",            "type": "Double",            "optional": false,            "field": "imdb_rating",            "description": "<p>Рейтинг фильма на IMDB.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "position",            "description": "<p>Сохраненная позиция просмотра с прошлой сессии, в секундах.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "error",            "description": "<p>Код ошибки.</p>"          }        ]      }    },    "error": {      "fields": {        "Коды ошибок error": [          {            "group": "Коды ошибок error",            "optional": false,            "field": "0",            "description": "<p>Нет ошибки.</p>"          }        ]      }    },    "version": "1.40.0",    "filename": "../../git/smarty/tvmiddleware/api.py",    "groupTitle": "Video"  },  {    "type": "get",    "url": "/video/list",    "title": "VideoList: список фильмов",    "name": "VideoList",    "group": "Video",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "size": "0-100",            "optional": true,            "field": "limit",            "defaultValue": "100",            "description": "<p>Ограничение на количество фильмов на одну страницу выборки. Максимальное значение 100.</p>"          },          {            "group": "Parameter",            "type": "Number",            "size": "1..",            "optional": true,            "field": "page",            "defaultValue": "1",            "description": "<p>Номер страницы выборки.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": true,            "field": "gid",            "defaultValue": "пустое",            "description": "<p>Фильтр по жанру VOD, в это поле передается идентификатор жанра.</p>"          },          {            "group": "Parameter",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": true,            "field": "new",            "defaultValue": "0",            "description": "<p>Фильтр по новинкам. При значении 1 в выборку попадут только те фильмы, дата добавления в каталог которых не ранее количества дней, заданного константой TVMIDDLEWARE_VIDEO_NEW_DAYS в настройках Smarty.</p>"          },          {            "group": "Parameter",            "type": "String",            "allowedValues": [              "package",              "non_package",              "season",              "movie"            ],            "optional": true,            "field": "video_type",            "defaultValue": "пустой",            "description": "<p>Фильтр по типу фильма, package - только пакеты фильмов; non_package - все фильмы, кроме пакетов; season - только сериалы; movie - все фильмы, кроме сериалов.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "search",            "defaultValue": "пустое",            "description": "<p>Строка поиска. Поиск осуществляется по названию фильма по вхождению подстроки.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "authkey",            "description": "<p>Ключ сессии.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "device",            "defaultValue": "пустое",            "description": "<p>Системное название типа устройства.</p>"          }        ]      }    },    "success": {      "fields": {        "Ответ": [          {            "group": "Ответ",            "type": "Object[]",            "optional": false,            "field": "videos",            "description": "<p>Список фильмов.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "videos.id",            "description": "<p>Идентификатор фильма.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "videos.name",            "description": "<p>Название фильма.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "videos.name_orig",            "description": "<p>Оригинальное название фильма.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "videos.thumbnail_small",            "description": "<p>URL на обложку фильма уменьшенного размера.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "videos.thumbnail_big",            "description": "<p>URL на обложку фильма большого размера.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "videos.description",            "description": "<p>Описание фильма.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "videos.year",            "description": "<p>Год выпуска.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "videos.actors",            "description": "<p>Актёры фильма.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "videos.director",            "description": "<p>Режиссёры фильма.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "videos.genres",            "description": "<p>Жанры фильма.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "videos.countries",            "description": "<p>Страны производства.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "videos.genres_kinopoisk",            "description": "<p>Жанры фильма с сервиса Кинопоиск.</p>"          },          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "videos.is_parent_control",            "description": "<p>Для фильма включен родительский контроль.</p>"          },          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "videos.is_package",            "description": "<p>Является пакетом фильмов.</p>"          },          {            "group": "Ответ",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "videos.is_season",            "description": "<p>Является сериалом.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "videos.rating",            "description": "<p>Возрастной рейтинг фильма.</p>"          },          {            "group": "Ответ",            "type": "Double",            "optional": false,            "field": "videos.kinopoisk_rating",            "description": "<p>Рейтинг фильма на Кинопоиске.</p>"          },          {            "group": "Ответ",            "type": "Double",            "optional": false,            "field": "videos.imdb_rating",            "description": "<p>Рейтинг фильма на IMDB.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "count",            "description": "<p>Количество фильмов на текущей странице выборки.</p>"          },          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "error",            "description": "<p>Код ошибки.</p>"          }        ]      }    },    "error": {      "fields": {        "Коды ошибок error": [          {            "group": "Коды ошибок error",            "optional": false,            "field": "0",            "description": "<p>Нет ошибки.</p>"          }        ]      }    },    "version": "1.40.0",    "filename": "../../git/smarty/tvmiddleware/api.py",    "groupTitle": "Video"  }] });
