import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonLabel,
} from '@ionic/react';

export function NewItemModal({ onClose }: { onClose: () => void }) {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Queue Item</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="container">
          {/* <p>Create a form here to add a new item to the queue</p>
          <ul>
            <li>title</li>
            <li>duration</li>
          </ul> */}
          <IonItem style={{ width: '100%', marginBottom: 10 }}>
            <IonInput label="Title" placeholder="Title"></IonInput>
          </IonItem>
          <IonItem style={{ width: '100%', marginBottom: 10 }}>
          <IonLabel>Duration</IonLabel>
            <IonDatetimeButton datetime="time"></IonDatetimeButton>
            <IonModal keepContentsMounted={true}>
              <IonDatetime id="time"></IonDatetime>
            </IonModal>
          </IonItem>
          <IonButton style={{ width: '100%' }}>Save</IonButton>
        </div>
      </IonContent>
    </>
  );
}
