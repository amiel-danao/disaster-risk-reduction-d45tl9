from firebase_admin import credentials, firestore, initialize_app
from firebase_admin import firestore
from firebase_admin import messaging
from datetime import datetime, timedelta

# Initialize the Firebase Admin SDK
cred = credentials.Certificate('disaster-risk-firebase-adminsdk-ockcz-cca49bf2cd.json')
initialize_app(cred)

# Initialize Firestore
db = firestore.client()

def on_snapshot(doc_snapshot, changes, read_time):
    for change in changes:
        if change.type.name == 'ADDED':
            doc = change.document
            ticket_data = doc.to_dict()
            print(f"New ticket created with ID: {doc.id}")
    
            # Retrieve the necessary fields from the ticket document
            userId = ticket_data.get('userId')
            rescuerId = ticket_data.get('rescuerId')
            userName = ticket_data.get('userName')

            token_ref = db.collection('Tokens').document(rescuerId)
            token_doc = token_ref.get()
            if token_doc.exists:
                token_data = token_doc.to_dict()
                rescuer_fcm_token = token_data.get("fcm_token")
                print(f"FCM token for rescuer {rescuerId}: {rescuer_fcm_token}")

                # Compose the FCM notification message
                message = messaging.Message(
                    notification=messaging.Notification(
                        title='Someone needs your help!',
                        body=f'{userName} sent a new rescue ticket!',
                    ),
                    data={
                        'userId': userId,
                        'rescuerId': rescuerId,
                        'userName': userName
                    },
                    token=rescuer_fcm_token
                    # topic='ticket_updates',  # Replace with your desired FCM topic
                )

                try:
                # Send the FCM notification
                    response = messaging.send(message)
                    print('FCM notification sent:', response)
                except Exception:
                    pass
                # Perform actions here based on the new ticket document
                # Perform actions here based on the new ticket document

# Create a reference to the "Tickets" collection
tickets_ref = db.collection('Tickets')

cutoff_date = datetime.now() - timedelta(hours=1)

# Filter the query using dateSubmitted field
query = tickets_ref.where('dateSubmitted', '<', cutoff_date)
# Start listening to document creations
doc_watch = query.on_snapshot(on_snapshot)


while True:
    pass


# Define the Cloud Function
# def send_fcm_notification(data, context):
#     # Get the newly added ticket document data
#     ticket_data = data.get('value', {})
    
#     # Retrieve the necessary fields from the ticket document
#     userId = ticket_data.get('userId')
#     rescuerId = ticket_data.get('rescuerId')
#     dateSubmitted = ticket_data.get('dateSubmitted')
#     userName = ticket_data.get('userName')

#     # Compose the FCM notification message
#     message = messaging.Message(
#         notification=messaging.Notification(
#             title='Someone needs your help!',
#             body=f'{userName} sent a new rescue ticket!',
#         ),
#         data={
#             'userId': userId,
#             'rescuerId': rescuerId,
#             'dateSubmitted': dateSubmitted,
#             'userName': userName
#         },
#         topic='ticket_updates',  # Replace with your desired FCM topic
#     )

#     # Send the FCM notification
#     response = messaging.send(message)
#     print('FCM notification sent:', response)

# # Define the Firestore trigger for the Cloud Function
# def firestore_trigger(event, context):
#     if event.event_type == 'document.create':
#         send_fcm_notification(event)

# # Export the Firestore trigger function
# __all__ = ['firestore_trigger']
