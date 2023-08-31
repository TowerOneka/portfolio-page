// import logo from './logo.svg';
// import './App.css';
import s from './App.module.scss';
import video from './assets/video.mp4';
import selfie from './assets/selfie.jpg';
import school from './assets/school.jpg';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className={s.root}
    >
      <div className={s.wrapper}>
        <div className={s.imageBlock}>
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className={s.imageWrapper}
          >
            <img src={selfie} alt="selfie" />
          </motion.div>
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className={s.imageWrapper}
          >
            <img src={school} alt="school" />
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* <div className={s.text}> */}
          <h1>Информация</h1>
          <p>
            Программирование меня затянуло достаточно давно, первым опытом можно
            считать лет в 11, когда я попробовал изучать <code>C++</code>, и
            тогда же начал делать свои первые шаги в понятиях "Массивы",
            "Объекты" и т.д.
          </p>
          <p>
            В школе мои увлечения продолжились, с 8 класса мы начали изучать{' '}
            <code>Python</code>, также я ходил на дополнительные кружки по
            программированию и участвовал в олимпиадах
          </p>
          <p>
            Также в школе в одном из триместров мы начали изучать
            Web-разработку, проходили курс на htmlacademy.ru, меня это зацепило.
            Для оценки отлично нужно было пройти всего лишь три темы, но меня
            увлекло, и я прошел три блока. Тогда же я и увидел свой интерес
            конкретно к Web-разработке, мне понравилось именно взаимодействовать
            с пользователем, понимать, что пользователь нажмет на эту кнопку, и
            что-то произойдет, например, товар добавится в корзину
          </p>
          <p>
            В школе в 10 классе отдельным предметом в аттестате у нас было
            индивидуальное задание, реферат или лабораторный опыт, тогда же я
            подумал о том, чтобы попробовать сделать свой первый проект. Это был
            интернет-магазин для моих родственников, который я и защитил как
            индивидуальное задание. Благодаря этому проекту я достаточно много
            попробовал и набрался опыта. Я его переписывал на{' '}
            <code>Python-django</code>, потом переделывал на wordpress, сейчас
            же в планах сделать его на <code>NextJS</code> с админкой
          </p>
          <p>
            В универстите на первом курсе у нас было программирование, и там мы
            изучали <code>C#</code>, так как я уже имел опыт в программировании,
            я закрыл весь курс за 3 месяца, для экзамена нам давали доп задания,
            где надо было написать своё небольшое приложение на windows forms,
            также мы занимались математическим моделированием на том же{' '}
            <code>C#</code>
          </p>
          <p>
            Если меня спросят почему же я люблю программирование, я отвечу, что
            это действительно моё призвание, так как я очень люблю своё дело и
            люблю делать удобные интерфейсы для пользователей, чтобы
            пользователь мог зайти, и ему было удобно пользоваться
            сайтом/приложением. А история рассказанная мною выше демонстрирует,
            что программированием я занимаюсь большую часть своей жизни и в
            дальнейшем планирую посвятить себя этому делу
          </p>
          {/* </div> */}
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p>
          Ссылка на это приложение:{' '}
          <a
            target="__blank"
            rel="noopener noreferrer"
            href="https://github.com/TowerOneka/portfolio-page"
          >
            репозиторий
          </a>
        </p>
        <div>
          <h2>Видео</h2>
          <div className={s.videoWrapper}>
            <video src={video} controls></video>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default App;
