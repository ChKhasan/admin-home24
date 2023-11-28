export default {
  data() {
    return {
      columnAtribut: [
        {
          title: "АТРИБУТЫ",
          dataIndex: "info",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "info" },
          className: "column-name",
          key: "info",
          width: "30%",
        },
        {
          title: "Параметры",
          dataIndex: "options",
          scopedSlots: { customRender: "options" },
          className: "column-options",
          key: "options",
        },
        {
          title: "Категории",
          // dataIndex: "categories",
          scopedSlots: { customRender: "categories" },
          className: "column-options",
          key: "categories",
        },

        {
          title: "ДЕЙСТВИЯ",
          dataIndex: "id",
          scopedSlots: { customRender: "id" },
          className: "column-btns",
          width: "100px",
          key: "id",
          align: "right",
        },
      ],
      columnBrand: [
        {
          title: "№",
          dataIndex: "key",
          key: "key",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "key" },
          align: "left",
          className: "column-name",
          width: "60px",
        },
        {
          title: "Бренд",
          dataIndex: "lg_logo",
          key: "lg_logo",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "img" },
          align: "left",
          className: "column-img",
          colSpan: 2,
          width: "45px",
        },
        {
          dataIndex: "name",
          key: "name",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          className: "column-name",
          width: "30%",
          colSpan: 0,
        },

        {
          title: "действия",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "id" },
          className: "column-btns",
          //   width: "10%",
          align: "right",
        },
      ],
      columnCatgory: [
        {
          title: "Категория",
          dataIndex: "dataName",
          key: "dataName",
          className: "column-name",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "dataName" },
          align: "left",
        },
        {
          title: "Икона",
          dataIndex: "lg_icon",
          slots: { title: "customTitle" },
          align: "center",
          scopedSlots: { customRender: "lg_icon" },
          className: "column-name",
          key: "lg_icon",
          width: "12%",
        },
        {
          title: "ПОПУЛЯРНЫЙ",
          dataIndex: "is_popular",
          key: "is_popular",
          align: "center",
          scopedSlots: { customRender: "is_popular" },
          className: "column-tags",
          width: "15%",
        },
        {
          title: "Статус",
          key: "is_active",
          dataIndex: "is_active",
          scopedSlots: { customRender: "is_active" },
          className: "column-tags",
          width: "10%",
        },
        {
          title: "действия",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "id" },
          className: "column-btns",
          width: "100px",
        },
      ],
      columnCharacteristic: [
        {
          title: "№",
          dataIndex: "key",
          key: "key",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "key" },
          align: "left",
          className: "column-name",
          width: "60px",
        },
        {
          title: "Название",
          dataIndex: "name",
          key: "name",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          align: "left",
          className: "column-name",
        },

        {
          title: "Действия",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "id" },
          className: "column-btns",
          width: "100px",
          align: "right",
        },
      ],
      columnProduct: [
        {
          title: "ID",
          dataIndex: "key",
          key: "key",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "key" },
          className: "column-name",
          width: "100px",
        },
        {
          title: "ПРОДУКТ",
          dataIndex: "img",
          key: "img",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "img" },
          width: "55px",
          align: "left",
          className: "column-img",
          colSpan: 2,
        },
        {
          dataIndex: "name",
          key: "name",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          className: "column-name",
          width: "30%",
          colSpan: 0,
        },
        // {
        //   title: "Код",
        //   dataIndex: "model",
        //   scopedSlots: { customRender: "model" },
        //   className: "column-code",
        //   key: "model",
        //   width: "10%",
        // },
        {
          title: "КОЛ-ВО",
          dataIndex: "stock",
          className: "column-price",
          scopedSlots: { customRender: "qty" },
          key: "stock",
          align: "center",
          // width: "10%",
          sorter: (a, b) => a.stock - b.stock,
        },
        {
          title: "ЦЕНА",
          dataIndex: "real_price",
          className: "column-price",
          key: "price",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "price" },
          width: "16%",
          sorter: (a, b) => a.price - b.price,
        },
        {
          title: "Статус",
          key: "status",
          dataIndex: "status",
          scopedSlots: { customRender: "status" },
          className: "column-tags",
          filters: [
            { text: "Активный", value: "active" },
            { text: "Неактивный", value: "inactive" },
          ],
          onFilter: (value, record) => record.status.indexOf(value) === 0,
          // width: "16%",
        },
        {
          title: "действия",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "id" },
          className: "column-btns",
          width: "100px",
          align: "right",
        },
      ],
      columnProductClick: [
        {
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "img" },
          align: "left",
          className: "column-name",
          width: "55px",
          colSpan: 0,
        },
        {
          title: "Продукт",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "product" },
          align: "left",
          className: "column-name",
          colSpan: 2,
        },
        {
          title: "ИМЯ",
          dataIndex: "name",
          key: "name",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          align: "left",
          className: "column-name",
        },
        {
          title: "ДАТА",
          dataIndex: "created_at",
          key: "created_at",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "created_at" },
          className: "column-name",
        },
        {
          title: "НОМЕР ТЕЛЕФОНА",
          dataIndex: "phone_number",
          scopedSlots: { customRender: "phone_number" },
          className: "column-price",
          key: "phone_number",
        },
        {
          title: "статус",
          dataIndex: "status",
          scopedSlots: { customRender: "tags" },
          className: "column-tags ",
          key: "status",
        },
        {
          title: "действия",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "id" },
          className: "column-btns",
          width: "100px",
          align: "right",
        },
      ],
      columnRegions: [
        {
          title: "№",
          dataIndex: "key",
          key: "key",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "key" },
          align: "left",
          className: "column-name",
          width: "60px",
        },

        {
          title: "Имя",
          dataIndex: "name",
          key: "name",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          className: "column-name",
        },
        {
          title: "Группа",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "group" },
          className: "column-name",
        },
        {
          title: "действия",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "id" },
          className: "column-btns",
          width: "100px",
          align: "right",
        },
      ],
      columnBadges: [
        {
          title: "№",
          dataIndex: "key",
          key: "key",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "key" },
          align: "left",
          className: "column-name",
          width: "60px",
        },
        {
          title: "Значки",
          dataIndex: "name",
          key: "name",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          className: "column-name",
        },
        {
          title: "Дата",
          dataIndex: "created_at",
          key: "created_at",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "created_at" },
          className: "column-name",
        },
        {
          title: "действия",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "id" },
          className: "column-btns",
          width: "100px",
          align: "right",
        },
      ],
      columnDiscount: [
        {
          title: "№",
          dataIndex: "key",
          key: "key",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "key" },
          align: "left",
          className: "column-name",
          width: "60px",
        },
        {
          title: "Загаловок",
          dataIndex: "title",
          key: "title",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          className: "column-name",
        },
        // {
        //   title: "Описание",
        //   dataIndex: "desc",
        //   key: "desc",
        //   slots: { title: "customTitle" },
        //   scopedSlots: { customRender: "desc" },
        //   className: "column-name",
        // },
        {
          title: "действия",
          key: "id",
          scopedSlots: { customRender: "id" },
          className: "column-btns",
          width: "100px",
          align: "right",
        },
      ],
      columnPromotions: [
        {
          title: "№",
          dataIndex: "key",
          key: "key",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "key" },
          align: "left",
          className: "column-name",
          width: "55px",
        },
        {
          title: "Название",
          dataIndex: "sm_banner",
          key: "sm_banner",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "banner" },
          width: "55px",
          align: "left",
          className: "column-img",
          colSpan: 2,
        },
        {
          dataIndex: "short_name",
          key: "name",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          className: "column-name",
          // width: "30%",
          colSpan: 0,
        },
        // {
        //   title: "Икона",
        //   dataIndex: "short_name_icon_svg",
        //   slots: { title: "customTitle" },
        //   align: "center",
        //   scopedSlots: { customRender: "banner" },
        //   className: "column-name",
        //   key: "short_name_icon_svg",
        //   width: "12%",
        // },
        {
          title: "Дата начала",
          dataIndex: "start_date",
          key: "start_date",
          align: "center",
          scopedSlots: { customRender: "start_date" },
          className: "column-date",
          width: "15%",
        },
        {
          title: "Дата окончания",
          dataIndex: "end_date",
          key: "end_date",
          align: "center",
          scopedSlots: { customRender: "end_date" },
          className: "column-date",
          width: "15%",
        },
        {
          title: "Статус",
          key: "is_active",
          dataIndex: "is_active",
          scopedSlots: { customRender: "is_active" },
          className: "column-tags",
          // width: "10%",
        },
        {
          title: "действия",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "id" },
          className: "column-btns",
          width: "100px",
        },
      ],
      columnTopBar: [
        {
          title: "№",
          dataIndex: "key",
          key: "key",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "key" },
          align: "left",
          className: "column-name",
          width: "60px",
        },
        {
          title: "Название",
          dataIndex: "name",
          key: "name",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          align: "left",
          className: "column-name",
        },
        {
          title: "Категория",
          dataIndex: "category",
          key: "category",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "category" },
          align: "left",
          className: "column-name",
        },
        {
          title: "АКЦИИ",
          dataIndex: "promotion",
          key: "promotion",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "promotion" },
          align: "left",
          with: "200px",
          className: "column-name",
        },
        {
          title: "Действия",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "id" },
          className: "column-btns",
          width: "100px",
          align: "right",
        },
      ],
      columnUsers: [
        {
          title: "№",
          dataIndex: "key",
          key: "key",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "key" },
          align: "left",
          className: "column-name",
          width: "60px",
        },
        {
          title: "ИМЯ",
          dataIndex: "title",
          key: "title",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          className: "column-name",
        },
        {
          title: "ИМЯ ПОЛЬЗОВАТЕЛЯ",
          dataIndex: "desc",
          key: "desc",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "desc" },
          className: "column-name",
        },
        {
          title: "действия",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "id" },
          className: "column-btns",
          width: "100px",
          align: "right",
        },
      ],
      columnOrders: [
        {
          title: "Заказ ID",
          dataIndex: "orderId",
          key: "orderId",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "orderId" },
          className: "column-name",
          width: "100px",
        },

        {
          title: "Клиент",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          className: "column-name cursor-pointer",
          align: "left",
          width: "20%",
        },
        {
          title: "Номер телефона",
          dataIndex: "phone_number",
          scopedSlots: { customRender: "phone_number" },
          className: "column-name cursor-pointer",
          key: "phone_number",
        },
        {
          title: "дата",
          dataIndex: "dateAdd",
          scopedSlots: { customRender: "dateAdd" },
          className: "column-date cursor-pointer",
          key: "dateAdd",
        },
        {
          title: "Оператор",
          dataIndex: "operator",
          scopedSlots: { customRender: "operator" },
          className: "column-name cursor-pointer",
          align: "left",

          key: "operator",
        },
        {
          title: "Область",
          scopedSlots: { customRender: "user_address" },
          className: "column-price cursor-pointer",
        },
        {
          title: "кол-во",
          dataIndex: "count",
          scopedSlots: { customRender: "count" },
          className: "column-qty cursor-pointer",
          key: "count",
        },
        {
          title: "статус",
          dataIndex: "status",
          scopedSlots: { customRender: "tags" },
          className: "column-tags ",
          key: "status",
        },
        // {
        //   title: "ДЕЙСТВИЯ",
        //   key: "id",
        //   dataIndex: "id",
        //   scopedSlots: { customRender: "btns" },
        //   className: "column-btns",
        //   width: "100px",
        //   align: "center",
        // },
      ],
      columnPermissionGroups: [
        {
          title: "№",
          dataIndex: "key",
          key: "key",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "key" },
          align: "left",
          className: "column-name",
          width: "60px",
        },

        {
          title: "Название",
          dataIndex: "name",
          key: "name",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          className: "column-name",
          width: "30%",
        },

        {
          title: "действия",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "id" },
          className: "column-btns",
          //   width: "10%",
          align: "right",
        },
      ],
      columnRoles: [
        {
          title: "№",
          dataIndex: "key",
          key: "key",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "key" },
          align: "left",
          className: "column-name",
          width: "60px",
        },

        {
          title: "Название",
          dataIndex: "name",
          key: "name",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          className: "column-name",
          width: "30%",
        },

        {
          title: "действия",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "id" },
          className: "column-btns",
          //   width: "10%",
          align: "right",
        },
      ],
      columnBranches: [
        {
          title: "№",
          dataIndex: "key",
          key: "key",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "key" },
          align: "left",
          className: "column-name",
          width: "60px",
        },

        {
          title: "Название",
          dataIndex: "name",
          key: "name",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          className: "column-name",
          width: "30%",
        },

        {
          title: "действия",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "id" },
          className: "column-btns",
          //   width: "10%",
          align: "right",
        },
      ],
      columnUsers: [
        {
          title: "№",
          dataIndex: "key",
          key: "key",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "key" },
          align: "left",
          className: "column-name",
          width: "60px",
        },

        {
          title: "Имя пользователя",
          dataIndex: "username",
          key: "username",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          className: "column-name",
          width: "30%",
        },

        {
          title: "действия",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "id" },
          className: "column-btns",
          //   width: "10%",
          align: "right",
        },
      ],
      columnMessages: [
        {
          title: "№",
          dataIndex: "key",
          key: "key",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "key" },
          align: "left",
          className: "column-name",
          width: "55px",
        },
        {
          title: "Пользователь",
          dataIndex: "admin",
          key: "admin",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "admin" },
          align: "left",
          className: "column-name",
        },
        {
          title: "Сообщение",
          key: "text",
          dataIndex: "text",
          className: "column-price",
          // width: "10%",
        },
        {
          title: "Дата отправления",
          dataIndex: "created_at",
          key: "created_at",
          align: "center",
          scopedSlots: { customRender: "created_at" },
          className: "column-date",
        },
        {
          title: "Успешно отправленный",
          dataIndex: "sent",
          key: "sent",
          align: "center",
          scopedSlots: { customRender: "sent" },
          className: "column-name",
        },
        {
          title: "Не отправленный",
          dataIndex: "not_sent",
          key: "not_sent",
          align: "center",
          scopedSlots: { customRender: "not_sent" },
          className: "column-name",
        },
       
        {
          title: "действия",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "id" },
          className: "column-btns",
          width: "100px",
        },
      ],
    };
  },
};
