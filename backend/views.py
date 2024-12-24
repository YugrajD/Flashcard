from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def signup(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("username")
        email = data.get("email")
        password = data.get("password")
        confirm_password = data.get("confirmPassword")

        if password != confirm_password:
            return JsonResponse({"error": "Passwords do not match"}, status=400)

        if User.objects.filter(username=username).exists():
            return JsonResponse({"error": "Username already exists"}, status=400)

        if User.objects.filter(email=email).exists():
            return JsonResponse({"error": "Email already exists"}, status=400)

        User.objects.create_user(username=username, email=email, password=password)
        return JsonResponse({"message": "User created successfully"}, status=201)

    return JsonResponse({"error": "Invalid HTTP method"}, status=405)
