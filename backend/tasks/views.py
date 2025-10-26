from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .models import Profile, Post
from .serializers import ProfileSerializer, PostSerializer

class ProfileViewSet(ModelViewSet):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]
    
    
    def get_queryset(self):
        # ログイン中のユーザーのタスクだけ返す
        return Profile.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        # タスク作成時,userを自動で紐付け
        serializer.save(user=self.request.user)
        
class PostViewSet(ModelViewSet):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        # 全ユーザーの投稿を返す（タイムライン)
        return Post.objects.all().order_by("-created_at")
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)