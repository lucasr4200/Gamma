from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

class AiTests(APITestCase):
    def test_post_message(self):
        url = reverse('ai')
        data = {'message': 'Hello, world!'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        print(response.data)
        # Add additional assertions as needed