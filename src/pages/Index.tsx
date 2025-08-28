import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [currentOmzet, setCurrentOmzet] = useState([5000000]);
  const [newPatients, setNewPatients] = useState([25]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    revenue: ''
  });

  const calculateROI = () => {
    const averageCheck = 5000;
    const additionalRevenue = newPatients[0] * averageCheck;
    const serviceCost = 150000;
    const roi = (additionalRevenue / serviceCost * 100).toFixed(0);
    const paybackMonths = Math.ceil(serviceCost / additionalRevenue);
    return { additionalRevenue, roi, paybackMonths };
  };

  const { additionalRevenue, roi, paybackMonths } = calculateROI();

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-white border-b">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="text-sm text-muted-foreground mb-4 font-medium">
              МАРКЕТИНГ ДЛЯ СТОМАТОЛОГИЙ
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-8 leading-tight text-primary">
              2 100 ₽ за заявку.<br />
              183% ROI.<br />
              <span className="text-accent">Гарантированно.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Специализируемся на частных стоматологиях в городах 100-500к жителей
            </p>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium text-lg px-12 py-4">
              Рассчитать ROI
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="border-r border-gray-200 last:border-r-0">
              <div className="text-4xl font-bold text-primary mb-2">2 100 ₽</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Стоимость заявки</div>
            </div>
            <div className="border-r border-gray-200 last:border-r-0">
              <div className="text-4xl font-bold text-primary mb-2">183%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Средний ROI</div>
            </div>
            <div className="border-r border-gray-200 last:border-r-0">
              <div className="text-4xl font-bold text-primary mb-2">60.3М</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Выручка клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">90</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Дней до результата</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wide">
              АНАЛИЗ 500+ КЛИНИК
            </div>
            <h2 className="font-heading text-4xl font-bold mb-8 text-primary">
              4 главные проблемы
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                number: '01',
                title: 'Заявки > 5000 ₽',
                stat: '73% клиник'
              },
              {
                number: '02',
                title: 'Нет аналитики',
                stat: '89% клиник'
              },
              {
                number: '03',
                title: 'Только «сарафан»',
                stat: '64% клиник'
              },
              {
                number: '04',
                title: 'Ценовой демпинг',
                stat: '58% клиник'
              }
            ].map((problem, index) => (
              <div key={index} className="flex items-start gap-6 p-8 bg-white border border-gray-200">
                <div className="text-4xl font-bold text-muted-foreground/30 font-mono">
                  {problem.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">{problem.title}</h3>
                  <div className="text-2xl font-bold text-accent">{problem.stat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-white border-b">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wide">
              КЕЙС ИЗ ПЕРВОУРАЛЬСКА
            </div>
            <h2 className="font-heading text-4xl font-bold mb-8 text-primary">
              Результаты за 12 месяцев
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">293К</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Вложено в маркетинг</div>
              <div className="text-lg text-muted-foreground">₽</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-accent mb-4">60.3М</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Выручка клиники</div>
              <div className="text-lg text-muted-foreground">₽</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">20 580</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide mb-2">ROI</div>
              <div className="text-lg text-muted-foreground">%</div>
            </div>
          </div>

          <div className="bg-secondary p-8 border">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">100К</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Население города</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">2 100₽</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Стоимость заявки</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">+269%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Рост трафика</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">90</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Дней до результата</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-0 bg-white border">
            {[
              {
                value: '2 100 ₽',
                label: 'Стоимость заявки'
              },
              {
                value: '183%',
                label: 'ROI'
              },
              {
                value: '60.3М ₽',
                label: 'Выручка'
              },
              {
                value: '269%',
                label: 'Рост трафика'
              }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 border-r border-gray-200 last:border-r-0">
                <div className="text-4xl font-bold text-primary mb-3">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Калькулятор ROI
            </h2>
            <p className="text-xl text-muted-foreground">
              Узнайте потенциальную прибыль от нашего сотрудничества
            </p>
          </div>

          <Card className="bg-white shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-medium mb-3 block">
                        Ваш текущий месячный оборот: {currentOmzet[0].toLocaleString()} ₽
                      </Label>
                      <Slider
                        value={currentOmzet}
                        onValueChange={setCurrentOmzet}
                        min={2000000}
                        max={10000000}
                        step={500000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>2 млн</span>
                        <span>10 млн</span>
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-medium mb-3 block">
                        Сколько новых пациентов хотите: {newPatients[0]} чел/мес
                      </Label>
                      <Slider
                        value={newPatients}
                        onValueChange={setNewPatients}
                        min={10}
                        max={50}
                        step={5}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>10</span>
                        <span>50</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-lg">
                  <h3 className="font-heading text-xl font-bold mb-4">Ваш результат:</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Дополнительная выручка:</span>
                      <span className="font-bold text-primary">{additionalRevenue.toLocaleString()} ₽/мес</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ROI:</span>
                      <span className="font-bold text-secondary">{roi}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Окупаемость:</span>
                      <span className="font-bold text-accent">{paybackMonths} мес</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-l-secondary">
                    <p className="text-sm">
                      При среднем чеке 5000 ₽ наша услуга окупится за {paybackMonths} месяца
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Отзывы наших клиентов
            </h2>
          </div>
          
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="relative">
                  <img 
                    src="/img/1f88e722-fe1c-4c90-9ba4-8e23d3bacfea.jpg" 
                    alt="Довольный пациент стоматологии"
                    className="rounded-lg w-full object-cover h-48"
                  />
                  <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                    Тверь
                  </Badge>
                </div>
                <div className="md:col-span-2">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-4 italic">
                    "Работали с другим агентством. Платили 200к в месяц + бюджет. 
                    Заявки были по 8-9к. Эти ребята сразу вышли на 2.5к. 
                    Это в 3 раза дешевле! Теперь я точно знаю, что маркетинг — 
                    это инвестиция, а не затраты."
                  </blockquote>
                  <div className="flex items-center gap-2">
                    <Icon name="User" size={16} className="text-muted-foreground" />
                    <span className="font-semibold">Владелец стоматологической клиники</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Что вы получите
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-heading text-2xl">РОСТ</CardTitle>
                    <CardDescription className="text-lg">Базовый пакет</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-primary text-primary-foreground">
                    от 150 000 ₽
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {[
                    'Аудит текущего маркетинга',
                    '5 продающих лендингов',
                    'Настройка Яндекс.Директ',
                    'Подключение CRM системы',
                    'Настройка аналитики'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Icon name="Check" size={16} className="text-secondary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90 transition-transform hover:scale-105">
                  Выбрать пакет РОСТ
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-accent text-accent-foreground">ПОПУЛЯРНЫЙ</Badge>
              </div>
              <CardHeader className="bg-gradient-to-r from-accent/5 to-primary/5">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-heading text-2xl">ПРЕМИУМ</CardTitle>
                    <CardDescription className="text-lg">Полный комплекс</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-accent text-accent-foreground">
                    от 300 000 ₽
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {[
                    'Все из пакета «РОСТ»',
                    'Ведение рекламных кампаний',
                    'Контент для SEO продвижения',
                    'Ведение социальных сетей',
                    'Персональный менеджер',
                    'Ежемесячная отчетность'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Icon name="Check" size={16} className="text-secondary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-accent hover:bg-accent/90 transition-transform hover:scale-105">
                  Выбрать пакет ПРЕМИУМ
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Table */}
          <div className="mt-16">
            <h3 className="font-heading text-2xl font-bold text-center mb-8">
              Прямое сравнение с конкурентами
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-primary to-secondary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Параметр</th>
                    <th className="px-6 py-4 text-center">Крупные агентства</th>
                    <th className="px-6 py-4 text-center">Местные маркетологи</th>
                    <th className="px-6 py-4 text-center bg-accent">Наше агентство</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Фокус', 'Сети, клиники 1млн+', 'Все подряд', 'Только стоматологии в городах 100-500к'],
                    ['Стоимость заявки', 'От 5 000 ₽', 'Не считают', 'От 2 100 ₽'],
                    ['Цена старта', 'От 200 000 ₽/мес', 'От 40 000 ₽/мес', 'От 150 000 ₽ (под ключ)'],
                    ['Работа с процессами', 'Нужна ваша команда', 'Нет', 'Внедряем и настраиваем'],
                    ['Гарантии', 'Нет', 'Нет', 'Прописываем KPI в договоре']
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium">{row[0]}</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">{row[1]}</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">{row[2]}</td>
                      <td className="px-6 py-4 text-center font-semibold text-accent bg-accent/5">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 px-4 bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <Icon name="Shield" size={48} className="text-secondary mx-auto mb-6" />
            <h2 className="font-heading text-3xl font-bold mb-4">Гарантии</h2>
            <p className="text-xl text-muted-foreground">
              Вернем разницу, если стоимость заявки будет выше <strong>3500 ₽</strong> в первые 3 месяца.
              <br />
              <strong>Прописываем в договоре.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Частые вопросы
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Вы работаете в городах-миллионниках?',
                a: 'Нет, наша экспертиза — малые и средние города. Здесь ниже конкуренция и стоимость клика, а значит — выше ваша прибыль.'
              },
              {
                q: 'У нас уже есть сайт. Что можете предложить?',
                a: 'Проведем бесплатный аудит и дадим рекомендации. Чаще всего мы редизайнируем сайт или делаем новые лендинги, что сразу снижает CPA.'
              },
              {
                q: 'Почему у вас цена ниже, чем у конкурентов?',
                a: 'Мы не содержим огромный штат в Москве и не делаем колл-центры. Наша цель — дать владельцу клиники максимальную эффективность его рекламного бюджета.'
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="font-heading font-semibold text-left">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Получите бесплатный аудит
            </h2>
            <p className="text-xl opacity-90">
              вашего маркетинга и расчет потенциального роста по нашей модели
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block">Телефон</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-white mb-2 block">Город</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    placeholder="Ваш город"
                  />
                </div>
                <div>
                  <Label htmlFor="revenue" className="text-white mb-2 block">Текущий оборот</Label>
                  <Input
                    id="revenue"
                    value={formData.revenue}
                    onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    placeholder="2-10 млн ₽"
                  />
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-accent hover:bg-accent/90 text-white font-heading text-lg py-3 transition-transform hover:scale-105">
                <Icon name="Send" size={20} className="mr-2" />
                Получить бесплатный аудит
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-400 mb-6">
            P.S.: «Если вы читаете этот текст, но все еще сомневаетесь — просто позвоните нам. 
            Мы не будем вас уговаривать. Мы разберем вашу ситуацию и скажем честно, 
            сможем ли мы вам помочь и на какой результат вы можете рассчитывать.»
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-500">
              © 2024 Dental Marketing Services. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}