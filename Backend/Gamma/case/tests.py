import datetime
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Case
from django.test import TestCase


class CaseModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Case.objects.create(status='Resolved',
                            date = datetime.date.today(),
                            platform='Facebook',
                            offender='offender',
                            message='message',
                            context='context')
    
    def test_status_content(self):
        case = Case.objects.get(case_id=1)
        expected_object_name = f'{case.status}'
        self.assertEquals(expected_object_name, 'Resolved')

    def test_date_content(self):
        case = Case.objects.get(case_id=1)
        expected_object_name = f'{case.date}'
        self.assertEquals(expected_object_name, str(datetime.date.today()))

    def test_platform_content(self):
        case = Case.objects.get(case_id=1)
        expected_object_name = f'{case.platform}'
        self.assertEquals(expected_object_name, 'Facebook')

    def test_offender_content(self):
        case = Case.objects.get(case_id=1)
        expected_object_name = f'{case.offender}'
        self.assertEquals(expected_object_name, 'offender')
    
    def test_message_content(self):
        case = Case.objects.get(case_id=1)
        expected_object_name = f'{case.message}'
        self.assertEquals(expected_object_name, 'message')
    
    def test_context_content(self):
        case = Case.objects.get(case_id=1)
        expected_object_name = f'{case.context}'
        self.assertEquals(expected_object_name, 'context')
        


class CaseTest(APITestCase):
    @classmethod
    def setUpTestData(cls):
        Case.objects.create(status='Resolved',
                            date = datetime.date.today(),
                            platform='Facebook',
                            offender='offender',
                            message='message',
                            context='context')

    def test_get_cases(self):
        url = reverse('cases')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        print(response.data)
        # Add additional assertions as needed

    def test_get_case(self):
        url = reverse('case', kwargs={'case_id': 1})
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        #print(response.data)
        # Add additional assertions as needed

    def test_post_case(self):
        url = reverse('cases')
        data = {'status': 'Resolved',
                'date': str(datetime.date.today()),
                'platform': 'Facebook',
                'offender': 'offender',
                'message': 'message',
                'context': 'context'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        #print(response.data)
        # Add additional assertions as needed

    def test_post_bad_status_case(self):
        url = reverse('cases')
        data = {'status': 'bad status',
                'date': str(datetime.date.today()),
                'platform': 'Facebook',
                'offender': 'offender',
                'message': 'message',
                'context': 'context'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        #print(response.data)
        # Add additional assertions as needed
    
    def test_post_bad_platform_case(self):
        url = reverse('cases')
        data = {'status': 'Resolved',
                'date': str(datetime.date.today()),
                'platform': 'bad platform',
                'offender': 'offender',
                'message': 'message',
                'context': 'context'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        #print(response.data)
        # Add additional assertions as needed

    def test_delete_case(self):
        url = reverse('case', args=[1])
        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        #print(response.data)
        # Add additional assertions as needed