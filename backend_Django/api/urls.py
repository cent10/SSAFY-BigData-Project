from django.conf.urls import url
from rest_framework.routers import DefaultRouter
from api import views

# trailing_slash는 /으로 web url에서 hi/ 는 hi라는 이름의 디렉토리가 있는지 확인하는거고 hi 는 hi라는 파일이 있는지 확인!
router = DefaultRouter(trailing_slash=False)

# register
#              self,
#              prefix: Any, 필수
#              viewset: Any, 필수
#              basename: Any = None, path name처럼 view에 이름을 지정함 디폴트시 해당 viewset의 queryset을 기반하여 생성
#              base_name: Any = None

router.register(r"fitness", views.FitnessViewSet, basename="fitness")

urlpatterns = router.urls
