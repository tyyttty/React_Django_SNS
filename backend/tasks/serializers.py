from rest_framework import serializers
from .models import Profile, Post


class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    
    class Meta:
        model = Profile
        fields = ['id', 'user', 'bio', 'avatar']
        
        
class PostSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    
    class Meta:
        model = Post
        fields = ['id', 'user', 'content', 'image', 'created_at']