from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import math

ROOT = Path(__file__).resolve().parents[2]
OUT = Path(__file__).resolve().parent
ASSETS = ROOT / 'public/images/dev/gracesea'
FONT = OUT / 'Gaegu-Regular.ttf'
W = 1600
INK = '#163D56'; MUTED = '#64879B'; PAPER = '#FCFBF7'; BLUE = '#DCEEFA'

def font(size): return ImageFont.truetype(str(FONT), size)
def board(height, color=PAPER): return Image.new('RGB', (W, height), color)
def text(im, xy, value, size=38, color=INK, width=None, spacing=15):
    d = ImageDraw.Draw(im)
    if width:
        lines=[]
        for para in value.split('\n'):
            line=''
            for word in para.split(' '):
                candidate = f'{line} {word}' if line else word
                if d.textlength(candidate, font=font(size)) > width and line:
                    lines.append(line); line=word
                else: line=candidate
            lines.append(line)
        value='\n'.join(lines)
    d.multiline_text(xy, value, font=font(size), fill=color, spacing=spacing)
def rect(im, bounds, fill, r=36): ImageDraw.Draw(im).rounded_rectangle(bounds,radius=r,fill=fill)
def picture(im, path, bounds):
    image=Image.open(path).convert('RGBA'); x,y,w,h=bounds
    image.thumbnail((int(w),int(h)),Image.Resampling.LANCZOS)
    im.paste(image,(int(x+(w-image.width)/2),int(y+(h-image.height)/2)),image)
def phone(im, path, x,y,width):
    image=Image.open(path).convert('RGB'); height=round(width*image.height/image.width)
    rect(im,(x-7,y-7,x+width+7,y+height+7),INK,32)
    image=image.resize((width,height),Image.Resampling.LANCZOS)
    mask=Image.new('L',image.size,0); ImageDraw.Draw(mask).rounded_rectangle((0,0,width,height),28,fill=255)
    im.paste(image,(x,y),mask)
    return height
def save(im, name):
    im.save(OUT/name,quality=95,subsampling=0)
    print(name,im.size)

im=board(1550)
text(im,(90,45),'PERSONAL PROJECT / APP DESIGN & DEVELOPMENT',28,MUTED)
rect(im,(60,120,1540,1390),BLUE,45)
text(im,(120,175),'A drop of grace, every day.',32,MUTED)
text(im,(120,275),'은혜의 바다',160)
text(im,(130,475),'G R A C E   S E A',35,MUTED)
text(im,(120,680),'한 방울씩 모여\n바다가 된다.',76,spacing=18)
text(im,(120,920),'매일의 기도와 말씀, 짧은 묵상이\n나만의 바다를 채웁니다.',37,MUTED,spacing=22)
phone(im,ASSETS/'1_기록_묵상/10-calendar-complete.png',730,670,225)
phone(im,ASSETS/'2_등대_묵상/2.png',1230,700,225)
phone(im,ASSETS/'1_기록_묵상/08-meditation-running.png',968,580,250)
text(im,(100,1440),'묵상 기록 · 공동 기도 앱     /     개인 개발 프로젝트',30)
text(im,(100,1490),'React Native · Expo · Supabase',28,MUTED)
save(im,'01-introduction.jpg')

im=board(1630)
text(im,(100,80),'01 / OVERVIEW',30,MUTED)
text(im,(100,170),'적는 데서 멈추지 않고,\n잠시 머무를 수 있도록.',83,spacing=16)
text(im,(100,465),'기도와 말씀을 기록해도, 다음 화면으로 넘어가는 순간 묵상은 쉽게 뒤로 밀립니다.\n은혜의 바다는 기록한 내용을 천천히 돌아보고 삶에 적용할 시간을 만드는 데서 출발했습니다.',38,MUTED,width=1370,spacing=20)
text(im,(100,690),'혼자 쌓아가는 시간은 ‘나의 바다’로,\n함께 기도하는 공동체는 ‘등대’로 표현했습니다.',40,spacing=18)
picture(im,ASSETS/'gracesea_1.png',(60,910,1480,650))
save(im,'02-overview.jpg')

im=board(2250)
text(im,(100,75),'02 / PROBLEM & APPROACH',30,MUTED)
text(im,(100,160),'작은 습관을 위한 세 가지 연결.',80)
cards=[('기록에서 묵상으로','기도와 말씀을 적어도, 실제 묵상할 시간은 놓치기 쉽습니다.','기록 저장 다음에 묵상 타이머를 연결해 휴대폰을 내려놓도록 구성했습니다.','#EEF3EE'),('하루에서 꾸준함으로','날짜별 메모만으로는 신앙생활의 흐름을 돌아보기 어렵습니다.','기록한 날과 묵상한 날을 구분하고, 완료한 시간을 달력과 물결에 반영했습니다.','#E6F0F8'),('개인에서 공동체로','함께 기도하고 싶지만, 깊은 개인 기록까지 공개하고 싶지는 않습니다.','개인 묵상은 비공개로 두고, 나눌 기도제목만 직접 작성하도록 했습니다.','#EDEEF8')]
for i,(title,problem,solution,color) in enumerate(cards):
    x=80+i*490;rect(im,(x,345,x+465,1100),color)
    text(im,(x+35,390),f'0{i+1}',65,MUTED)
    text(im,(x+35,505),title,42)
    text(im,(x+35,600),problem,35,MUTED,width=390,spacing=18)
    ImageDraw.Draw(im).line((x+35,790,x+430,790),fill='#BCCDD5',width=2)
    text(im,(x+35,825),'↓',40)
    text(im,(x+35,900),solution,34,INK,width=390,spacing=14)
rect(im,(60,1200,1540,2180),'#E5EEF3',45)
text(im,(110,1250),'03 / CORE EXPERIENCE',30,MUTED)
text(im,(110,1350),'화면을 내려놓으면,\n나의 바다가 차오릅니다.',80,spacing=18)
for i,label in enumerate(['기도·말씀·적용\n기록','휴대폰을 뒤집어\n내려놓기','묵상에\n집중하기','나의 바다\n돌아보기']):
    x=115+i*365;text(im,(x,1660),f'0{i+1}',50,MUTED);text(im,(x,1750),label,38,spacing=12)
text(im,(110,1970),'휴대폰을 내려놓으면 시간이 쌓이고, 들면 잠시 멈춥니다.\n묵상을 완료하면 작성한 항목마다 1/3칸씩, 하루 최대 한 칸이 채워집니다.',36,MUTED,width=1350,spacing=18)
save(im,'03-approach.jpg')

record=['01-calendar-before.png','02-scripture-search_1.png','02-scripture-search_2.png','03-prayer-and-scripture.png','04-practice-and-meditation.png','05-saved.png','06-calendar-recorded.png','07-meditation-ready.png','08-meditation-running.png','09-meditation-complete.png','10-calendar-complete.png']
flows=[('04 / APP WALKTHROUGH','오늘의 기록과 묵상','마음에 남은 말씀을, 오늘의 삶으로.','기도·말씀·적용을 기록하고 휴대폰을 내려놓습니다.\n묵상을 완료한 시간은 나의 바다에 작은 물결로 남습니다.','1_기록_묵상',record),('04 / APP WALKTHROUGH','등대에서 함께 기도하기','서로의 기도가 되어주는 작은 공동체.','등대에 모여 기도제목을 나누고 함께 중보기도합니다.\n개인의 묵상 기록과 공동체에 공유하는 기도제목은 구분합니다.','2_등대_묵상',[f'{i}.png' for i in range(1,9)]),('04 / APP WALKTHROUGH','커뮤니티 중보기도','작은 기도가, 더 넓은 바다로.','공개할 기도제목을 직접 작성하고 익명 나눔도 선택할 수 있습니다.\n다른 사람의 기도제목을 읽고 함께 마음을 모읍니다.','3_커뮤니티_묵상',[f'{i}.png' for i in range(1,7)])]
for fi,(tag,title,subtitle,desc,folder,names) in enumerate(flows):
    rows=math.ceil(len(names)/3);im=board(670+rows*1120,'#F3F5F0')
    text(im,(100,70),tag,30,MUTED);text(im,(100,160),title,88);text(im,(100,295),subtitle,48)
    text(im,(100,390),desc,37,MUTED,width=1370,spacing=20)
    for i,name in enumerate(names):
        x=160+(i%3)*475;y=620+(i//3)*1120
        h=phone(im,ASSETS/folder/name,x,y,335)
        text(im,(x,y+h+30),f'{i+1:02} / {len(names):02}',30,MUTED)
    save(im,f'{4+fi:02}-screens.jpg')

im=board(2250)
text(im,(100,70),'05 / VISUAL IDENTITY',30,MUTED)
text(im,(100,150),'편안하게 머무는 바다의 색과 표정.',78)
text(im,(100,300),'크림색 배경, 맑은 파란색, 손그림 캐릭터를 통해\n매일의 묵상에 편안하게 머무는 경험을 표현했습니다.',38,MUTED,spacing=20)
for i,(color,label) in enumerate([('#F7F4EC','따뜻한 여백'),('#D9EFFD','잔잔한 물결'),('#58A9E0','오늘의 은혜'),('#163D56','깊은 바다')]):
    x=100+i*245;rect(im,(x,510,x+210,730),color,40);text(im,(x,765),label,32);text(im,(x,815),color,28,MUTED)
picture(im,ASSETS/'icon_blue.png',(1160,480,260,260));picture(im,ASSETS/'icon_white.png',(1160,780,260,260))
text(im,(100,1000),'06 / DEVELOPMENT',30,MUTED)
text(im,(100,1080),'마음을 담는 기록이기에,\n보호하는 방식도 함께.',78,spacing=18)
items=[('개인 기록 보호','이메일 인증, 서버 접근 권한 확인,\n개인 묵상 본문 암호화를 적용했습니다.'),('공유 범위 구분','개인 묵상은 자동 공유하지 않습니다.\n나눌 기도제목은 따로 작성합니다.'),('사용자의 관리 권한','계정 삭제와 신고·차단 기능을 마련하고,\n암호화와 공유 범위를 안내했습니다.')]
for i,(title,desc) in enumerate(items):
    x=100+i*490;text(im,(x,1370),title,43);text(im,(x,1460),desc,33,MUTED,width=420,spacing=15)
rect(im,(60,1680,1540,2180),BLUE,45)
text(im,(120,1740),'EVERY DROP BECOMES A SEA.',30,MUTED)
text(im,(120,1830),'오늘의 작은 은혜가,\n내일의 바다가 되도록.',84,spacing=15)
text(im,(120,2080),'DESIGN & DEVELOPMENT BY 연수',30,MUTED)
save(im,'07-design-development.jpg')

cover=board(1200,BLUE)
text(cover,(100,90),'은혜의 바다',155)
text(cover,(110,325),'한 방울씩 모여 바다가 된다.',53,MUTED)
phone(cover,ASSETS/'1_기록_묵상/10-calendar-complete.png',360,500,250)
phone(cover,ASSETS/'2_등대_묵상/2.png',1000,500,250)
phone(cover,ASSETS/'1_기록_묵상/08-meditation-running.png',680,425,285)
save(cover,'cover.jpg')
