from django.urls import path 
from accounts import views as UserViews



urlpatterns = [    # Add your API endpoints here

    # Example endpoints
    path('register/', UserViews.RegisterView.as_view(), name='register'),
]