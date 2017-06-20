<template>
  <div>
    <div class="image-container">
      <div class="image-element">
        <h1>ГИС инженерных коммуникаций г. Дубны</h1>
      </div>
    </div>
    <div class="about-container">
      <div class="container">
        <h1>
          О проекте
        </h1>
        <div class="wrapper">
          <div class="wrap-elements">
            <p>
              Проект «ГИС инженерных коммуникаций г. Дубны» (ГИС ИК) создан по инициативе Администрации города Дубны и организаций эксплуатирующих инженерные сети города. Реализация проекта поручена Университету «Дубна» при поддержке специалистов ООО «Риэл Гео Проджект» (ГК «НЕОЛАНТ») – разработчиков ГИС «ДУБНА».
            </p>
          </div>
          <div class="wrap-elements">
            <p>
              Создание ГИС ИК продиктовано необходимостью повышения эффективности управления инженерными сетями города и оперативного решения вопросов, связанных с их эксплуатацией.
            </p>
            <p>
              ГИС ИК ведет оперативный учет инженерных коммуникаций г. Дубны, в целях информационного обеспечения процесса принятия решения по согласованию земляных работ и контроля коллизий в различных проектных решениях.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="what-we-do-container">
      <div class="container">
        <div class="wrapper">
          <div class="wrap-elements">
            <h1>
              В базе данных ГИС собрана следующая информация:
            </h1>
            <ul>
              <li>
                <p>
                  «Твердые» контуры (дороги, здания, гидрография и т.п.);
                </p>
              </li>
              <li>
                <p>
                  Растровые подложки;
                </p>
              </li>
              <li>
                <p>
                  Данные о сетевых инженерных коммуникациях эксплуатирующих организаций.
                </p>
              </li>
            </ul>

          </div>
          <div class="wrap-elements">
            <h1>
              ГИС решает задачи:
            </h1>
            <ul>
              <li>
                <p>Оцифровка и хранение данных о твердых контурах;</p>
              </li>
              <li>
                <p>
                  Занесение, накопление и обмен данными о сетевых инженерных коммуникациях эксплуатирующих организаций;</p>
              </li>
              <li>
                <p>
                  Предоставление всем зарегестрированным сторонам информации, содержащейся в базе данных, в виде электронных карт.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  module.exports = {

    name: 'Dashboard',

    route: {
      meta: {
        crumb: 'Dashboard',
      },
    },

    computed: Vuex.mapGetters('auth', {
      inProgress: 'inProgress',
      user: 'user',
      isAuthenticated: 'isAuthenticated',
    }),

  };
</script>

<style lang="scss" scoped>
  $sm: 768px;
  $md: 992px;
  $lg: 1200px;

  @mixin font-sizer($size) {
    font-size: $size;

    @media (max-width: $lg) {
      font-size: $size*0.8;
    }
    @media (max-width: $md) {
      font-size: $size*0.7;
    }
    @media (max-width: $sm) {
      font-size: $size*0.6;
    }
  }


  .big-font-size {
    @include font-sizer(3em);
    font-weight: 800;
  }

  .image-container {
    min-height: 30vh;

    @media (max-width: $sm) {
      min-height: 40vh;
    }

    background:  radial-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0)), url(../../../assets/images/gis-dubna.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .image-element {
      padding: 0 10px 0 10px;
      h1 {
        @extend .big-font-size;
        color: #fff;
      }
    }
  }

  .container-cool-padding {
    padding-top: 10px;
    padding-bottom: 20px;
  }

  $h1-mar-left: 20px;

  .about-container {
    @extend .container-cool-padding;
    background-color: #fdf0d5;
    h1 {
      @extend .big-font-size;
      color: #162a43;
      margin-left: $h1-mar-left;
    }
    .wrapper {
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      .wrap-elements {
        padding: $h1-mar-left;
        width: 50%;

        @media (max-width: $md) {
          width: 100%;
        }

        p {
          color: #162a43;
          font-size: 1em;
        }
      }
    }
  }

  .what-we-do-container {
    @extend .container-cool-padding;

    background-color: #d6edff;

    .wrapper {
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      .wrap-elements {
        h1 {
          @include font-sizer(1.9em);
          font-weight: 600;
          color: #162a43;
        }
        padding: $h1-mar-left;
        width: 50%;

        @media (max-width: $md) {
          width: 100%;
        }

        ul {
          color: #eb5e55;
          li p {
            color: black;
          }
        }

      }
    }
  }

</style>
