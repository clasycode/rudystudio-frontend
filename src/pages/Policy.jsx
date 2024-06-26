import React from "react";
import styles from "./Policy.module.scss";
import HeaderDesktop from "../components/Desktop/Header/Header";
import HeaderMobile from "../components/Mobile/Header/Header";
import FooterDesktop from "../components/Desktop/Footer/Footer";
import FooterMobile from "../components/Mobile/Footer/Footer";

export default function Policy() {
  const isMobile = window.innerWidth <= 999;
  return (
    <>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
      <div className={styles.policy}>
        <div className={styles.container}>
          <div className={styles.policy__title}>
            <h2>Политика конфиденциальности</h2>
          </div>
          <div className={styles.policy__text}>
            Политика в отношении обработки персональных данных
            <br />
            <br />
            1. Общие положения
            <br />
            <br />
            Настоящая политика обработки персональных данных составлена в
            соответствии с требованиями Закона Республики Беларусь от 10.01.2017
            № 165-З "О персональных данных" (далее — Закон о персональных
            данных) и определяет порядок обработки персональных данных и меры по
            обеспечению безопасности персональных данных, предпринимаемые Рудый
            Захар Борисович (далее — Оператор).
            <br />
            <br />
            1.1. Оператор ставит своей важнейшей целью и условием осуществления
            своей деятельности соблюдение прав и свобод человека и гражданина
            при обработке его персональных данных, в том числе защиты прав на
            неприкосновенность частной жизни, личную и семейную тайну.
            <br />
            <br />
            1.2. Настоящая политика Оператора в отношении обработки персональных
            данных (далее — Политика) применяется ко всей информации, которую
            Оператор может получить о посетителях веб-сайта
            https://rudystudio.by.
            <br />
            <br />
            2. Основные понятия, используемые в Политике
            <br />
            <br />
            2.1. Автоматизированная обработка персональных данных — обработка
            персональных данных с помощью средств вычислительной техники.
            <br />
            <br />
            2.2. Блокирование персональных данных — временное прекращение
            обработки персональных данных (за исключением случаев, если
            обработка необходима для уточнения персональных данных).
            <br />
            <br />
            2.3. Веб-сайт — совокупность графических и информационных
            материалов, а также программ для ЭВМ и баз данных, обеспечивающих их
            доступность в сети интернет по сетевому адресу
            https://rudystudio.by.
            <br />
            <br />
            2.4. Информационная система персональных данных — совокупность
            содержащихся в базах данных персональных данных и обеспечивающих их
            обработку информационных технологий и технических средств.
            <br />
            <br />
            2.5. Обезличивание персональных данных — действия, в результате
            которых невозможно определить без использования дополнительной
            информации принадлежность персональных данных конкретному
            Пользователю или иному субъекту персональных данных.
            <br />
            <br />
            2.6. Обработка персональных данных — любое действие (операция) или
            совокупность действий (операций), совершаемых с использованием
            средств автоматизации или без использования таких средств с
            персональными данными, включая сбор, запись, систематизацию,
            накопление, хранение, уточнение (обновление, изменение), извлечение,
            использование, передачу (распространение, предоставление, доступ),
            обезличивание, блокирование, удаление, уничтожение персональных
            данных.
            <br />
            <br />
            2.7. Оператор — государственный орган, муниципальный орган,
            юридическое или физическое лицо, самостоятельно или совместно с
            другими лицами организующие и/или осуществляющие обработку
            персональных данных, а также определяющие цели обработки
            персональных данных, состав персональных данных, подлежащих
            обработке, действия (операции), совершаемые с персональными данными.
            <br />
            <br />
            2.8. Персональные данные — любая информация, относящаяся прямо или
            косвенно к определенному или определяемому Пользователю веб-сайта
            https://rudystudio.by.
            <br />
            <br />
            2.9. Персональные данные, разрешенные субъектом персональных данных
            для распространения — персональные данные, доступ неограниченного
            круга лиц к которым предоставлен субъектом персональных данных путем
            дачи согласия на обработку персональных данных, разрешенных
            субъектом персональных данных для распространения в порядке,
            предусмотренном Законом о персональных данных (далее — персональные
            данные, разрешенные для распространения).
            <br />
            <br />
            2.10. Пользователь — любой посетитель веб-сайта
            https://rudystudio.by.
            <br />
            <br />
            2.11. Предоставление персональных данных — действия, направленные на
            раскрытие персональных данных определенному лицу или определенному
            кругу лиц.
            <br />
            <br />
            2.12. Распространение персональных данных — любые действия,
            направленные на раскрытие персональных данных неопределенному кругу
            лиц (передача персональных данных) или на ознакомление с
            персональными данными неограниченного круга лиц, в том числе
            обнародование персональных данных в средствах массовой информации,
            размещение в информационно-телекоммуникационных сетях или
            предоставление доступа к персональным данным каким-либо иным
            способом.
            <br />
            <br />
            2.13. Трансграничная передача персональных данных — передача
            персональных данных на территорию иностранного государства органу
            власти иностранного государства, иностранному физическому или
            иностранному юридическому лицу.
            <br />
            <br />
            2.14. Уничтожение персональных данных — любые действия, в результате
            которых персональные данные уничтожаются безвозвратно с
            невозможностью дальнейшего восстановления содержания персональных
            данных в информационной системе персональных данных и/или
            уничтожаются материальные носители персональных данных.
            <br />
            <br />
            3. Основные права и обязанности Оператора
            <br />
            <br />
            3.1. Оператор имеет право:
            <br />
            <br />
            — получать от субъекта персональных данных достоверные информацию
            и/или документы, содержащие персональные данные;
            <br />
            <br />
            — в случае отзыва субъектом персональных данных согласия на
            обработку персональных данных, а также, направления обращения с
            требованием о прекращении обработки персональных данных, Оператор
            вправе продолжить обработку персональных данных на основаниях,
            предусмотренных законодательством Республики Беларусь.
            <br />
            <br />
            6. Цели обработки персональных данных
            <br />
            <br />
            6.1. Обработка персональных данных осуществляется с целью:
            <br />
            <br />
            6.1.1. Выполнения обязанностей в соответствии с законодательством
            Республики Беларусь.
            <br />
            <br />
            6.1.2. Осуществления деятельности, направленной на защиту прав и
            свобод субъектов персональных данных.
            <br />
            <br />
            6.1.3. Предоставления информации субъектам персональных данных по
            запросам их самих или их законных представителей.
            <br />
            <br />
            6.1.4. Организации обработки персональных данных в соответствии с
            требованиями действующего законодательства Республики Беларусь.
            <br />
            <br />
            6.1.5. Решения споров и урегулирования конфликтных ситуаций в рамках
            обработки персональных данных.
            <br />
            <br />
            6.1.6. Соблюдения и защиты законных интересов Оператора при
            осуществлении обработки персональных данных.
            <br />
            <br />
            7. Порядок обработки персональных данных
            <br />
            <br />
            7.1. Обработка персональных данных осуществляется с соблюдением
            принципов и правил, установленных законодательством Республики
            Беларусь.
            <br />
            <br />
            7.2. Оператор имеет право осуществлять обработку персональных данных
            без согласия субъекта персональных данных в случаях, предусмотренных
            Законом о персональных данных.
            <br />
            <br />
            7.3. Оператор самостоятельно определяет состав и перечень мер,
            необходимых и достаточных для обеспечения выполнения своих
            обязанностей, предусмотренных законодательством Республики Беларусь.
            <br />
            <br />
            7.4. При обработке персональных данных Оператор обязан:
            <br />
            <br />
            7.4.1. Предоставлять субъекту персональных данных по его просьбе
            информацию о ходе обработки его персональных данных.
            <br />
            <br />
            7.4.2. Организовывать обработку персональных данных в порядке,
            установленном законодательством Республики Беларусь.
            <br />
            <br />
            7.4.3. Отвечать на обращения и запросы субъектов персональных данных
            и их законных представителей в соответствии с требованиями Закона о
            персональных данных.
            <br />
            <br />
            7.4.4. Сообщать в уполномоченный орган по защите прав субъектов
            персональных данных необходимую информацию по запросу этого органа в
            установленные законодательством сроки.
            <br />
            <br />
            7.4.5. Публиковать или иным образом обеспечивать неограниченный
            доступ к настоящей Политике в отношении обработки персональных
            данных.
            <br />
            <br />
            7.4.6. Принимать меры для защиты персональных данных от
            неправомерного доступа, уничтожения, изменения, блокирования,
            копирования, предоставления, распространения и иных неправомерных
            действий.
            <br />
            <br />
            7.4.7. Прекращать передачу персональных данных, прекращать обработку
            и уничтожать персональные данные в случаях, предусмотренных
            законодательством Республики Беларусь.
            <br />
            <br />
            7.4.8. Исполнять иные обязанности, предусмотренные Законом о
            персональных данных.
            <br />
            <br />
            8. Права и обязанности субъектов персональных данных
            <br />
            <br />
            8.1. Субъекты персональных данных имеют право:
            <br />
            <br />
            8.1.1. Получать информацию о ходе обработки своих персональных
            данных, за исключением случаев, предусмотренных федеральными
            законами.
            <br />
            <br />
            8.1.2. Требовать уточнения, блокирования или уничтожения своих
            персональных данных в случае их неполных, устаревших, неточных,
            незаконно полученных или не являющихся необходимыми для заявленной
            цели обработки.
            <br />
            <br />
            8.1.3. Выдвигать условие предварительного согласия при обработке
            персональных данных в целях продвижения на рынке товаров, работ и
            услуг.
            <br />
            <br />
            8.1.4. Отозвать свое согласие на обработку персональных данных, а
            также требовать прекращения их обработки.
            <br />
            <br />
            8.1.5. Обжаловать неправомерные действия или бездействие Оператора в
            уполномоченный орган по защите прав субъектов персональных данных
            или в судебном порядке.
            <br />
            <br />
            8.1.6. Осуществлять иные права, предусмотренные законодательством
            Республики Беларусь.
            <br />
            <br />
            8.2. Субъекты персональных данных обязаны:
            <br />
            <br />
            8.2.1. Предоставлять Оператору достоверные данные о себе.
            <br />
            <br />
            8.2.2. Сообщать Оператору о уточнении (обновлении, изменении) своих
            персональных данных. <br />
            <br />
            8.2.3. Нести ответственность за передачу Оператору недостоверных
            сведений о себе.
            <br />
            <br />
            9. Принципы обработки персональных данных
            <br />
            <br />
            9.1. Обработка персональных данных осуществляется на законной и
            справедливой основе.
            <br />
            <br />
            9.2. Обработка персональных данных ограничивается достижением
            конкретных, заранее определенных и законных целей.
            <br />
            <br />
            9.3. Не допускается объединение баз данных, содержащих персональные
            данные, обработка которых осуществляется в целях, несовместимых
            между собой.
            <br />
            <br />
            9.4. Обработке подлежат только персональные данные, которые отвечают
            целям их обработки.
            <br />
            <br />
            9.5. Содержание и объем обрабатываемых персональных данных
            соответствуют заявленным целям обработки.
            <br />
            <br />
            9.6. При обработке персональных данных обеспечивается точность
            персональных данных, их достаточность и актуальность.
            <br />
            <br />
            9.7. Хранение персональных данных осуществляется не дольше, чем
            требуют цели обработки, если иной срок не установлен федеральным
            законом.
            <br />
            <br />
            9.8. Обрабатываемые персональные данные уничтожаются или
            обезличиваются после достижения целей их обработки или в случае
            утраты необходимости в достижении этих целей.
            <br />
            <br />
            10. Заключительные положения
            <br />
            <br />
            10.1. Настоящая Политика в отношении обработки персональных данных
            вступает в силу с момента ее опубликования на веб-сайте
            https://rudystudio.by.
            <br />
            <br />
            10.2. Оператор оставляет за собой право вносить изменения в
            настоящую Политику без предварительного уведомления. Изменения
            вступают в силу с момента их опубликования на веб-сайте
            https://rudystudio.by.
            <br />
            <br />
            10.3. Все изменения и дополнения к настоящей Политике в отношении
            обработки персональных данных вступают в силу с момента их
            опубликования на веб-сайте https://rudystudio.by.
            <br />
            <br />
            Дата последнего изменения: [23.02.2023]
            <br />
            <br />
            7. Условия обработки персональных данных
            <br />
            <br />
            7.1. Обработка персональных данных осуществляется с согласия
            субъекта персональных данных на обработку его персональных данных.
            <br />
            <br />
            7.2. Обработка персональных данных необходима для достижения целей,
            предусмотренных международным договором Республики Беларусь или
            законом, для осуществления возложенных законодательством Республики
            Беларусь на оператора функций, полномочий и обязанностей.
            <br />
            <br />
            7.3. Обработка персональных данных необходима для осуществления
            правосудия, исполнения судебного акта, акта другого органа или
            должностного лица, подлежащих исполнению в соответствии с
            законодательством Республики Беларусь об исполнительном
            производстве.
            <br />
            <br />
            7.4. Обработка персональных данных необходима для исполнения
            договора, стороной которого либо выгодоприобретателем или
            поручителем по которому является субъект персональных данных, а
            также для заключения договора по инициативе субъекта персональных
            данных или договора, по которому субъект персональных данных будет
            являться выгодоприобретателем или поручителем.
            <br />
            <br />
            7.5. Обработка персональных данных необходима для осуществления прав
            и законных интересов оператора или третьих лиц либо для достижения
            общественно значимых целей при условии, что при этом не нарушаются
            права и свободы субъекта персональных данных.
            <br />
            <br />
            7.6. Осуществляется обработка персональных данных, доступ
            неограниченного круга лиц к которым предоставлен субъектом
            персональных данных либо по его просьбе (далее — общедоступные
            персональные данные).
            <br />
            <br />
            7.7. Осуществляется обработка персональных данных, подлежащих
            опубликованию или обязательному раскрытию в соответствии с
            федеральным законом.
            <br />
            <br />
            8. Порядок сбора, хранения, передачи и других видов обработки
            персональных данных
            <br />
            <br />
            Безопасность персональных данных, которые обрабатываются Оператором,
            обеспечивается путем реализации правовых, организационных и
            технических мер, необходимых для выполнения в полном объеме
            требований действующего законодательства в области защиты
            персональных данных.
            <br />
            <br />
            8.1. Оператор обеспечивает сохранность персональных данных и
            принимает все возможные меры, исключающие доступ к персональным
            данным неуполномоченных лиц.
            <br />
            <br />
            8.2. Персональные данные Пользователя никогда, ни при каких условиях
            не будут переданы третьим лицам, за исключением случаев, связанных с
            исполнением действующего законодательства либо в случае, если
            субъектом персональных данных дано согласие Оператору на передачу
            данных третьему лицу для исполнения обязательств по
            гражданско-правовому договору.
            <br />
            <br />
            8.3. В случае выявления неточностей в персональных данных,
            Пользователь может актуализировать их самостоятельно, путем
            направления Оператору уведомление на адрес электронной почты
            Оператора Rudysudio@internet.ru с пометкой «Актуализация
            персональных данных».
            <br />
            <br />
            8.4. Срок обработки персональных данных определяется достижением
            целей, для которых были собраны персональные данные, если иной срок
            не предусмотрен договором или действующим законодательством.
            <br />
            <br />
            Пользователь может в любой момент отозвать свое согласие на
            обработку персональных данных, направив Оператору уведомление
            посредством электронной почты на электронный адрес Оператора
            Rudysudio@internet.ru с пометкой «Отзыв согласия на обработку
            персональных данных».
            <br />
            <br />
            8.5. Вся информация, которая собирается сторонними сервисами, в том
            числе платежными системами, средствами связи и другими поставщиками
            услуг, хранится и обрабатывается указанными лицами (Операторами) в
            соответствии с их Пользовательским соглашением и Политикой
            конфиденциальности. Субъект персональных данных и/или с указанными
            документами. Оператор не несет ответственность за действия третьих
            лиц, в том числе указанных в настоящем пункте поставщиков услуг.
            <br />
            <br />
            8.6. Установленные субъектом персональных данных запреты на передачу
            (кроме предоставления доступа), а также на обработку или условия
            обработки (кроме получения доступа) персональных данных, разрешенных
            для распространения, не действуют в случаях обработки персональных
            данных в государственных, общественных и иных публичных интересах,
            определенных законодательством Республики Беларусь. <br />
            <br />
            8.7. Оператор при обработке персональных данных обеспечивает
            конфиденциальность персональных данных. <br />
            <br />
            8.8. Оператор осуществляет хранение персональных данных в форме,
            позволяющей определить субъекта персональных данных, не дольше, чем
            этого требуют цели обработки персональных данных, если срок хранения
            персональных данных не установлен федеральным законом, договором,
            стороной которого, выгодоприобретателем или поручителем по которому
            является субъект персональных данных. <br />
            <br />
            8.9. Условием прекращения обработки персональных данных может
            являться достижение целей обработки персональных данных, истечение
            срока действия согласия субъекта персональных данных, отзыв согласия
            субъектом персональных данных или требование о прекращении обработки
            персональных данных, а также выявление неправомерной обработки
            персональных данных. <br />
            <br />
            9. Перечень действий, производимых Оператором с полученными
            персональными данными <br />
            <br />
            9.1. Оператор осуществляет сбор, запись, систематизацию, накопление,
            хранение, уточнение (обновление, изменение), извлечение,
            использование, передачу (распространение, предоставление, доступ),
            обезличивание, блокирование, удаление и уничтожение персональных
            данных. <br />
            <br />
            9.2. Оператор осуществляет автоматизированную обработку персональных
            данных с получением и/или передачей полученной информации по
            информационно-телекоммуникационным сетям или без таковой. <br />
            <br />
            10. Трансграничная передача персональных данных <br />
            <br />
            10.1. Оператор до начала осуществления деятельности по
            трансграничной передаче персональных данных обязан уведомить
            уполномоченный орган по защите прав субъектов персональных данных о
            своем намерении осуществлять трансграничную передачу персональных
            данных (такое уведомление направляется отдельно от уведомления о
            намерении осуществлять обработку персональных данных). <br />
            <br />
            10.2. Оператор до подачи вышеуказанного уведомления, обязан получить
            от органов власти Республики Беларусь и/или иных государств,
            иностранных физических лиц, иностранных юридических лиц, которым
            планируется трансграничная передача персональных данных,
            соответствующие сведения. <br />
            <br />
            11. Конфиденциальность персональных данных <br />
            <br />
            Оператор и иные лица, получившие доступ к персональным данным,
            обязаны не раскрывать третьим лицам и не распространять персональные
            данные без согласия субъекта персональных данных, если иное не
            предусмотрено законодательством Республики Беларусь. <br />
            <br />
            12. Заключительные положения <br />
            <br />
            12.1. Пользователь может получить любые разъяснения по интересующим
            вопросам, касающимся обработки его персональных данных, обратившись
            к Оператору с помощью электронной почты Rudystudio@internet.ru.
            <br />
            <br />
            12.2. В данном документе будут отражены любые изменения политики
            обработки персональных данных Оператором. Политика действует
            бессрочно до замены ее новой версией. <br />
            <br />
            12.3. Актуальная версия Политики в свободном доступе расположена в
            сети Интернет по адресу https://rudystudio.by/privacy-policy. <br />
            <br />
          </div>
        </div>
      </div>
      {isMobile ? <FooterMobile /> : <FooterDesktop />}
    </>
  );
}
