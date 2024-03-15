from rest_framework.views import APIView 
from .utils.main import colorize, save_image, cleanup
from django.http import FileResponse
# Create your views here

class ImageModelView(APIView):
    def get(self):
        cleanup()
        output = colorize("sample.jpg")
        return FileResponse(open(output, "rb"), content_type="image/jpeg")
    
    
    def post(self, request):
        cleanup()
        image_data = request.FILES.get('image')   
        image_path = save_image(image_data, "input.jpg")     
        
        output_path = colorize(image_path)
        
        output = open(output_path, "rb")
        response = FileResponse(output, content_type="image/jpeg")
        output.close()
        
        return response