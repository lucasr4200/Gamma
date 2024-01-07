from rest_framework import serializers
from .models import Case

status_choices = ['Resolved', 'Unreviewed', 'Further Action Needed']
platform_choices = ['Facebook', 'Twitter', 'Instagram', 'YouTube', 'Reddit', 'TikTok', 'Discord', 'Other']

class CaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Case
        fields = '__all__'

    def validate(self, data):
        if data['status'] not in status_choices:
            raise serializers.ValidationError("Invalid status")
        if data['platform'] not in platform_choices:
            raise serializers.ValidationError("Invalid platform")
        return data
    
    