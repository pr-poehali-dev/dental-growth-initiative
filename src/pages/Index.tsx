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
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary py-20 px-4 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Привлекаем пациентов<br />
              в стоматологии с оборотом<br />
              <span className="text-secondary">2-10 млн/мес</span>
            </h1>
            <div className="text-xl md:text-2xl mb-8 font-medium">
              Со 100% окупаемостью. Реальный кейс: <span className="text-secondary font-bold">55 млн ₽</span> выручки 
              с <span className="text-secondary font-bold">300 000 ₽</span> вложений в маркетинг
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8">
              <Icon name="Target" size={20} className="text-secondary" />
              <span className="text-lg">Стоимость заявки — <strong>2 100 ₽</strong></span>
            </div>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-heading text-lg px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать мой потенциальный ROI
            </Button>
          </div>

          <div className="text-center text-lg opacity-90">
            <p className="mb-2">Работаем только с частными стоматологиями в городах от 100 000 жителей</p>
            <p className="font-semibold">Мы не обещаем «лидов» — мы гарантируем полных кресел и рост выручки</p>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Вам знакомы эти проблемы?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: 'DollarSign',
                title: 'Заявки стоят дороже 5000 ₽',
                description: 'а их количество не растет'
              },
              {
                icon: 'AlertCircle',
                title: 'Маркетинг — черная дыра',
                description: 'где нельзя ничего посчитать'
              },
              {
                icon: 'UserX',
                title: 'Зависимость от «сарафана»',
                description: 'и уходящих врачей'
              },
              {
                icon: 'TrendingDown',
                title: 'Конкуренты демпингуют',
                description: 'сбивая цены на рынке'
              }
            ].map((problem, index) => (
              <Card key={index} className="border-l-4 border-l-accent bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon name={problem.icon} size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2">{problem.title}</h3>
                      <p className="text-muted-foreground">{problem.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Наше ключевое преимущество
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы не просто даем заявки. Мы даем готовых пациентов с предсказуемой стоимостью.
            </p>
          </div>

          {/* Case Study Visual */}
          <div className="mb-16 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-4">Реальный кейс из Первоуральска</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-medium">Бюджет:</span>
                    <span className="text-primary font-bold">293 064 ₽</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-medium">Выручка:</span>
                    <span className="text-secondary font-bold">60 305 442 ₽</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-medium">ROI:</span>
                    <span className="text-accent font-bold">20 580%</span>
                  </div>
                </div>
                <Badge className="mt-4 bg-secondary text-secondary-foreground">
                  <Icon name="MapPin" size={16} className="mr-1" />
                  Город ~100k жителей
                </Badge>
              </div>
              <div className="relative">
                <img 
                  src="/img/e9d299e0-ec8e-4817-9eae-2fa7f9cb08bd.jpg" 
                  alt="Современная стоматологическая клиника"
                  className="rounded-lg shadow-lg w-full object-cover h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: '2 100 ₽',
                label: 'Средняя стоимость заявки',
                icon: 'Target',
                color: 'bg-primary'
              },
              {
                value: '183 руб.',
                label: 'с 1 руб. затрат',
                icon: 'TrendingUp',
                color: 'bg-secondary'
              },
              {
                value: '60,3 млн ₽',
                label: 'Рост выручки в кейсе',
                icon: 'BarChart3',
                color: 'bg-accent'
              },
              {
                value: '+269%',
                label: 'Рост трафика на сайт',
                icon: 'Users',
                color: 'bg-primary'
              }
            ].map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className={`${stat.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={stat.icon} size={24} />
                  </div>
                  <div className="font-heading text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
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