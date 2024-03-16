from rest_framework.views import APIView 
from .utils.main import colorize, save_image, cleanup
from django.http import FileResponse, JsonResponse



# [GET/POST] /api/colourize/
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
        
        # return FileResponse(open(output_path, "rb"), content_type="image/jpeg")

        with open(output_path, 'rb') as f:
            image_data = f.read()
        
        response = JsonResponse({'image': image_data.decode('latin1')})
        response['Content-Disposition'] = 'attachment; filename="output.jpg"'
        return response
    
        
# try out image captioning