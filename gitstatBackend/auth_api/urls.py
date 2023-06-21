from django.urls import path
from auth_api.views import GitHubAuthView, UserCollaborationsView, UserProfile, UserRepositoriesView

urlpatterns = [
    path('github/auth/', GitHubAuthView.as_view(), name="github_auth"),
    path('github/user/', UserProfile.as_view(), name='user-repositories'),
    path('github/user/collaborations/', UserCollaborationsView.as_view(), name='user-collaborations'),
    path('github/user/repositories/', UserRepositoriesView.as_view(), name='user-repositories'),
    path('github/user/collaborations/', UserCollaborationsView.as_view(), name='user-collaborations'),
]
