from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from django.conf import settings

# Create your views here.
class GitHubAuthView(APIView):
    def get(self, request):
        #redirect user to github auth
        
        client_id = settings.GITHUB_CLIENT_ID
        redirect_uri = 'http://localhost:3000/callback'
        scope = 'user'
        github_auth_url = f'https://github.com/login/oauth/authorize?client_id={client_id}&redirect_uri={redirect_uri}&scope={scope}'
        
        return Response({
            'github_auth_url' : github_auth_url
        })
        
    def post(self, request):
        #process the github auth callback
        
        code = request.data.get('code')
        client_id = settings.GITHUB_CLIENT_ID
        client_secret = settings.SOCIAL_SECRET
        redirect_uri = 'http://localhost:3000/callback'
        token_url = 'https://github.com/login/oauth/access_token'
        
        #to get an access token we make a post
        response = requests.post(
            token_url,
            data={
                'code' : code,
                'client_id': client_id,
                'client_secret': client_secret,
                'redirect_uri': redirect_uri,
            },
            headers={'Accept': 'application/json'}
                                
            )
        print(response.json())
        
        #get the access token from response
        access_token = response.json().get('access_token')
        print(access_token)

        return Response({
            'access_token': access_token,
            'message': 'Successfully authenticated with GitHub'})
        
class UserProfile(APIView):
    def get(self, request):
        access_token = request.GET.get('access_token')  # Get the access token from the query parameters
        headers = {'Authorization': f'Bearer {access_token}'}
        profile_url = 'https://api.github.com/user'
        response = requests.get(profile_url, headers=headers)
        profile = response.json()
        return Response(profile)
    
    
class UserRepositoriesView(APIView):
    def get(self, request):
        access_token = request.GET.get('access_token')  # Get the access token from the query parameters
        headers = {'Authorization': f'Bearer {access_token}'}
        repositories_url = 'https://api.github.com/user/repos'
        response = requests.get(repositories_url, headers=headers)
        repositories = response.json()
        return Response(repositories)

class UserCollaborationsView(APIView):
    def get(self, request):
        access_token = request.GET.get('access_token')  # Get the access token from the query parameters
        headers = {'Authorization': f'Bearer {access_token}'}
        collaborations_url = 'https://api.github.com/user/repos?type=all&affiliation=collaborator'
        response = requests.get(collaborations_url, headers=headers)
        collaborations = response.json()
        return Response(collaborations)
